import React,{useEffect} from "react";
import ViewerUser from "./Presentation/ViewerUser";


const Viewer = ({match}) => {
  const [report, setReport] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] =React.useState([])

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  let handldeReport = () => {
    report === true ? setReport(false) : setReport(true);
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

  let routes = [
    "/Images/Most Epic Music Ever׃ Mosane.mp4",
    "/Images/Font-testigo.jpg"
  ] || [];

  const maxSteps = routes.length;



  /**Peticion fecth a la API, enviadole el parametro id de la url para hacer la consulta a la bd */
  useEffect(()=>{

    const viewFile = async()=>{

      try {
        let config={
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
           }, 
          body:match.params
        }
        let res = await fetch('http://localhost:3000/watch/api', config)
        let dataFiles= await res.json() 
        setData(dataFiles)
        console.log(data)

      } catch (error) {
        console.log(error)
      }
    }
    viewFile()
  },[match.params, data])


  return (
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
      fecha="25/06/2019 22:00"
      comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend, lorem non pretium tempor, libero est convallis nibh, non dictum neque justo non mi."
      latitud={-27.3664}
      longitud={-70.3331}
      maxSteps={maxSteps}
      routes={routes}
    />
  );
};
export default Viewer;
