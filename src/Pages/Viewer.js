import React from "react";
import ViewerUser from "./Presentation/ViewerUser";

const Viewer = () => {
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
  ];

  const maxSteps = routes.length;

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
