import React from "react";
import {
  Container,
  Divider,
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem
} from "@material-ui/core";
import PanelCases from "../../Components/PanelCases";
import MediaCard from '../../Components/MediaCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    paddingLeft: theme.spacing(2),
  },
  CardMargin: {
    marginTop: theme.spacing(2),
  },
}));

const HomeUser = props => {

  const classes = useStyles();
  const { data, handleChange, values } = props;
 
  return (
    <Container>
      <PanelCases nombre="Recientes" data={data} />
      <Divider />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        style={{ paddingTop: "1rem" }}
      >
        <Grid item>
          <Typography variant="h6" component="h3">
            {values.filter}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography variant="subtitle1">Filtrado por:</Typography>
            </Grid>
            <Grid item>
            <FormControl  className={classes.formControl}>
            <Select
              value={values.filter}
              onChange={handleChange}
              displayEmpty
              name="filter"            
            >
              <MenuItem value="Todos">
                <em>Todos</em>
              </MenuItem>
              <MenuItem value='Accidentes'>Accidentes</MenuItem>
            </Select>
          </FormControl>
            </Grid>         
          </Grid>
        
        </Grid>
      </Grid>
      <Container fixed={true}>
      <Grid container spacing={5} justify="center" className={classes.CardMargin}>
          {data.map((data, key)=>(
            <Grid item xs={12} sm={4} md={3} lg={3} key={key}>
              <MediaCard file={data.Archivos} report={data.Reportado} spotted={data.Visto}/>
            </Grid> 
          ))}                   
        </Grid>
      </Container>    
    </Container>
  );
};
export default HomeUser;
