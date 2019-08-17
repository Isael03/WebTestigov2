import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Typography,
  IconButton,
  MobileStepper,
  Grid, Paper
} from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Video from "../../Components/Video";
import Audio from "../../Components/Audio";
import { Map, Flag } from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import "../../Assets/css/Player.css";
import Nav from "../../Components/Navbar/Nav";
import ModalMap from '../../Components/ModalMap'


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    flexGrow: 1,
    overflow:'hidden'
  },
  img: {
    height: 255,
    maxWidth: 650,
    overflow: "hidden",
    display: "block",
    width: "100%"
  }, 
  comment:{
    maxWidth:700,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  }
}));

export default function TextMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [report, setReport] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  let routes = [
    "/Images/Most Epic Music Ever׃ Mosane.mp4",
    "/Images/Font-testigo.jpg"
  ];

  const maxSteps = routes.length;

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
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

  let type = filename => {
    var extension = filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
    return extension === "mp4" ? "video" : "img";
  };
  let handldeReport = ()=>{
    report===true?setReport(false):setReport(true)
  }
    
  

  return (
    <React.Fragment>
      <Nav {...props} />
      <div style={{ marginTop: "2rem" }}>
        <Container className={classes.root}>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {routes.map((step, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  type(step) === "video" ? (
                    <Video src={step} />
                  ) : (
                    <div className="player-wrapper">
                      <img
                        src={step}
                        alt="hola"
                        className="react-player"
                        width="100%"
                        height="100%"
                      />
                    </div>
                  )
                ) : null}
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <div>
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Siguiente
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              </div>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Anterior
              </Button>
            }
          />
          <Typography variant="subtitle2" className='pt-1'>25/06/2019 22:00</Typography>
               <Grid
            container
             direction="column"
             justify="center"
             alignItems="center"            
             wrap='nowrap'
             spacing={2}
          >
            <Grid item xs={12}  >
            <Typography>Estoy intentando escribir un texto largo, para probar el que servira para los comentarios largos, espero que salga bien
            </Typography>
            </Grid>            
            <Grid item xs>
              <Grid container
              direction="row"
              justify="center"
              alignItems="center">
                <Audio />
                <IconButton onClick={handleOpen}>
                  <Map />
                </IconButton>
                <IconButton onClick={handldeReport}>
                {/*   {report?<Flag color='secondary'/>:<Flag />} */}
                  <Flag color={report===true?'secondary':'inherit'}/>
                </IconButton>
              </Grid>               
            </Grid>
            </Grid>    
            <ModalMap latitud={-27.3664} longitud={-70.3331} open={open} handleClose={handleClose}/>
        </Container>
      </div>
    </React.Fragment>
  );
}
