import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  IconButton, Grid
} from "@material-ui/core";
import {
  Map,
  CalendarToday, 
  Visibility , 
  VisibilityOff, Flag,
} from "@material-ui/icons";
import '../Assets/css/Error.css'

const ImgMediaCard= (props)=> {
  const [see, setSee] = React.useState(false);
  //const [report, setReport] = React.useState(false)
  const {report, file, spotted}=props

  let handleClick =()=>{
    setSee(true);
  }

  return (
    <Card  elevation={1} className={report?'Card_Error':'Card'}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          alt="Caso"
          height="120"
          src={file[0]}
          /* src="/Images/Font-testigo.jpg" */ 
          /* src="/Images/【AMV】Fate⁄Grand Order -「Immortals-フェイト⁄グランドオーダ」.mp4"  */         
          title="Caso"
         
        />
      </CardActionArea>
      <CardActions >
        <IconButton size="small" aria-label="Ubicacion">
          <Map/>
        </IconButton>
        <IconButton size="small" aria-label="Fecha">
          <CalendarToday/>
        </IconButton>
        <Grid container justify="flex-end">
            {report?<Flag color="secondary" aria-label="Reportado"/>:null}
            {(spotted || see )? <Visibility aria-label="Visto"/>: <VisibilityOff aria-label="No visto"/>}
        </Grid> 
      </CardActions>
    </Card>
  );
}
export default ImgMediaCard;