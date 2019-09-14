import React, { useEffect } from "react";
import ViewerUser from "./Presentation/ViewerUser";
import Url from "../Config/url";

const Viewer = ({ match }) => {
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

  /**Peticion fecth a la API, enviadole el parametro id de la url para hacer la consulta a la bd */
  useEffect(() => {
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


  return data.map((data, i) => (
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
export default Viewer;
