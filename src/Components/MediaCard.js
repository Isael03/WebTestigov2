import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton,
  Grid,
  Tooltip
} from "@material-ui/core";
import {
  Map,
  CalendarToday,
  Visibility,
  VisibilityOff,
  Flag
} from "@material-ui/icons";
import "../Assets/css/Error.css";
import "../Assets/css/CardMedia.css";
import ModalMap from "./ModalMap";
import Viewer from '../Pages/Viewer'
import { Route, Switch, Link } from "react-router-dom";


const ImgMediaCard = props => {
  const [see, setSee] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { report, file, spotted, Fecha, link } = props;
 

  let handleClick = () => {
    /* setTimeout(()=>(setSee(true)), 3000) */
    setSee(true)
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let CardMediaType = filename => {
    var extension = filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
    return extension === "mp4" ? "video" : "img";
  };

  return (
    <React.Fragment>
      <Card elevation={1} className={report ? "Card_Error" : "Card"}>
        <Link to={link}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component={CardMediaType(file[0])}
            alt="Caso"
            height="120"
            src={file[0]}
            title="Caso"
          />
        </CardActionArea>
        </Link>      
        <CardActions>
          <Tooltip title="Ubicación">
            <IconButton size="small" onClick={handleOpen}>
              <Map />
            </IconButton>
          </Tooltip>
          <Tooltip title={`Fecha: ${Fecha}`} interactive	leaveTouchDelay={2000}>
            {/* <IconButton size="small"> */}
              <CalendarToday className='color-icon'/>
            {/* </IconButton> */}
          </Tooltip>
          <Grid container justify="flex-end">
            {report ? (
              <Tooltip title="Reportado">
                <Flag color="secondary" />
              </Tooltip>
            ) : null}
            {spotted || see ? (
              <Tooltip title="Visto">
                <Visibility />
              </Tooltip>
            ) : (
              <Tooltip title="No visto">
                <VisibilityOff />
              </Tooltip>
            )}
          </Grid>
        </CardActions>
      </Card>
        <ModalMap open={open} handleClose={handleClose} {...props}/>  
         <Switch>          
          <Route path='/watch/:id' render={() => <Viewer/>}/>          
        </Switch> 
    </React.Fragment>
  );
};
export default ImgMediaCard;
