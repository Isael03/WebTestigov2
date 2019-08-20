import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Typography,
  IconButton,
  MobileStepper,
  Grid, 
  Tooltip
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
  }
}));

export default function TextMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  
  const {open, handleOpen, handleClose, report, handldeReport, type, activeStep, handleNext, handleBack, handleStepChange, fecha, comentario, latitud, longitud, maxSteps, routes}=props
  

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
          <Typography variant="subtitle2" className='pt-1'>{fecha}</Typography>
               <Grid
            container
             direction="column"
             justify="center"
             alignItems="center"            
             wrap='nowrap'
             spacing={2}
          >
            <Grid item xs={12}  >
            <Typography>{comentario}
            </Typography>
            </Grid>            
            <Grid item xs>
              <Grid container
              direction="row"
              justify="center"
              alignItems="center">
                <Audio />
                <Tooltip title="Ubicación"><IconButton onClick={handleOpen}>
                  <Map />
                </IconButton>
                </Tooltip>
                <Tooltip title='Reportar'>
                 <IconButton onClick={handldeReport}>
                  <Flag color={report===true?'secondary':'inherit'}/>
                </IconButton> 
                </Tooltip>                            
              </Grid>               
            </Grid>
            </Grid>    
            <ModalMap latitud={latitud} longitud={longitud} open={open} handleClose={handleClose}/>
        </Container>
      </div>
    </React.Fragment>
  );
}
