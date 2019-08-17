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
import MediaCard from "../../Components/MediaCard";
import { makeStyles } from "@material-ui/core/styles";
import Nav from '../../Components/Navbar/Nav'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    paddingLeft: theme.spacing(2)
  },
  CardMargin: {
    marginTop: theme.spacing(2)
  }
}));

const HomeUser = ({ data, handleChange, values, tags }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Nav  />
      <div style={{ marginTop: "2rem" }}>
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
                  <FormControl className={classes.formControl}>
                    <Select
                      value={values.filter}
                      onChange={handleChange}
                      displayEmpty
                      name="filter"
                    >
                      {tags.map((tag, key) => (
                        <MenuItem value={tag} key={key}>
                          {tag}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Container fixed={true}>
            <Grid
              container
              spacing={5}
              justify="center"
              className={classes.CardMargin}
            >
              {data.map((data, key) => (
                <Grid item xs={12} sm={4} md={3} lg={3} key={key}>
                  <MediaCard
                    id={data.Id}
                    file={data.Archivos}
                    report={data.Reportado}
                    spotted={data.Visto}
                    latitud={data.Ubicacion.Latitud}
                    longitud={data.Ubicacion.Longitud}
                    Fecha={data.Fecha}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default HomeUser;
