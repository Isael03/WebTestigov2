import React, { /* useEffect, */ Component } from "react";
import ViewerUser from "./Presentation/ViewerUser";
//import Url from "../Config/url";
import db from "../Config/database";
import Loading from '../Components/Loading'

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open: false,
      activeStep: 0, 
      loading:true
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.type = this.type.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleStepChange = this.handleStepChange.bind(this);
    this.getData=this.getData.bind(this)
  }

  getData(){
      try {
      const { match } = this.props;
      const id = parseInt(match.params.id);
      let connection = db.ref("/Archivos");
        //Enviar datos como array
        connection
          .orderByChild("id")
          .equalTo(id)
          .once("value", snapshot => {
            let list = snapshot.val();
            this.setState({
              data: Object.values(list),
              loading:false
            });
          });
      } catch (error) {
        console.log(error);
      }
    };


  componentDidMount(){
    try {
      const { match } = this.props;
      const id = parseInt(match.params.id);
      let connection = db.ref("/Archivos");

      //Actualizar Visto a true
      connection
        .orderByChild("id")
        .equalTo(id)
        .once("child_added", snapshot => {
          if (snapshot.val().Visto === false) {
            let report = connection.child(snapshot.key);
            report.update(
              {
                Visto: true
              },
              error => {
                console.log(error);
              }
            );
          }
        });
    } catch (error) {
      console.log(error)
    }
   
     this.getData();  
  }  
     
  

   /* componentDidUpdate(){
    const { match } = this.props;
    try {
      const id = parseInt(match.params.id);
      let connection = db.ref("/Archivos");

      //Enviar datos como array
      connection
        .orderByChild("id")
        .equalTo(id)
        .once("value", snapshot => {
          let list = snapshot.val();
          this.setState({
            data: Object.values(list),
            loading:false
            //report:snapshot.val().Reportado
          });
        });
    } catch (error) {
      console.log(error);
    }
  } */
  

  componentWillUnmount() {
    db.ref("/Archivos/").off();
  }

  handleClose() {
    this.setState({
      open: false
    });
  }
  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleReport() {
    const { match } = this.props;
   
    try {
      const id = parseInt(match.params.id);
      let connection = db.ref("/Archivos");

      connection
        .orderByChild("id")
        .equalTo(id)
        .once("child_added", snapshot => {
          let report = connection.child(snapshot.key);
          report.update(
            {
              Reportado: !snapshot.val().Reportado
            },
            error => {
              console.log(error);
            }               
          );
          this.getData()
        });
    } catch (error) {
      console.log(error);
    } 
  }

  type(filename) {
    var extension = filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
    extension=extension.slice(0,3)
    return extension === "mp4" ? "video" : "img";
  }

  handleNext() {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  }

  handleBack() {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  }
  handleStepChange(step) {
    this.setState({
      activeStep: step
    });
  }

  render() {
    const { open, activeStep, data, loading } = this.state;

    if(loading){
      return <Loading/>
    }
    
   
 
    return data.map((data, i) => (
      <ViewerUser
        open={open}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose}
        report={data.Reportado || false}
        handleReport={this.handleReport}
        type={this.type}
        activeStep={activeStep}
        handleNext={this.handleNext}
        handleBack={this.handleBack}
        handleStepChange={this.handleStepChange}
        fecha={data.Fecha}
        comentario={data.Comentario}
        latitud={data.Ubicacion.Latitud}
        longitud={data.Ubicacion.Longitud}
        maxSteps={data.Archivo.length}
        routes={data.Archivo}
        audio={data.Audio}
        key={i}
      />
    ));
  }
}

export default Viewer;

/* const Viewer = ({ match }) => {
  const [data, setData] = React.useState([]);
  const [report, setReport] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  let handldeReport = () => {
    const setReportDB = async () => {
      try {
        let config = {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(match.params)
        };
        let res = await fetch(`${Url}/files`, config);
        let reportBD = await res.json();
        console.log(reportBD);
      } catch (error) {
        console.log(error);
      }
    };
    setReportDB();
  };

  let type = filename => {
    var extension = filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
    return extension === "mp4" ? "video" : "img";
  };

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }
  function handleStepChange(step) {
    setActiveStep(step);
  }
 */
/**Peticion fecth a la API, enviadole el parametro id de la url para hacer la consulta a la bd */
/* useEffect(() => {
    const viewFile = async () => {
      try {
        let config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(match.params)
        };
        let res = await fetch(`${Url}/files`, config);
        let dataFiles = await res.json();
        setData(dataFiles);

        dataFiles.map((d)=>{
          setReport(d.Reportado);
        })

        //setReport(dataFiles.Reportado);
      } catch (error) {
        console.log(error);
      }
    };
    viewFile();
  }, [match.params, data]);
 */

/*   return data.map((data, i) => (
    <ViewerUser
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      report={report}
      handldeReport={handldeReport}
      type={type}
      activeStep={activeStep}
      handleNext={handleNext}
      handleBack={handleBack}
      handleStepChange={handleStepChange}
      fecha={data.Fecha}
      comentario={data.Comentario}
      latitud={data.Ubicacion.Latitud}
      longitud={data.Ubicacion.Longitud}
      maxSteps={data.Archivo.length}
      routes={data.Archivo}
      data={data}
      audio={data.Audio}
      key={i}
    />
  ));
};
export default Viewer; */
