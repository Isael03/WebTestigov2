import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography, 
  Grid
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MediaCard from "./MediaCard";

const PanelCases = props => {
  let {nombre, data, link} = props


  return (
    <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{borderBottom: '1px solid rgba(0, 0, 0, .125)'}}
      >
        <Typography variant="subtitle1">{nombre}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{padding:'0.5rem 1rem 0.5rem'}}>
        <Grid container spacing={3} justify="center">
          {data.map((data, key)=>(
            <Grid item xs={12} sm={4} md={3} lg={2} key={key}>
              <MediaCard id={data.id} file={data.Archivo} report={data.Reportado} spotted={data.Visto} latitud={data.Ubicacion.Latitud} longitud={data.Ubicacion.Longitud} Fecha={data.Fecha}  link={`/watch/${data.id}`}/>
            </Grid> 
          ))}                   
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
export default PanelCases;
