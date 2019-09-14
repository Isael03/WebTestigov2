import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
/* import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors'; 
import Link from "@material-ui/core/Link";*/
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from '../../Assets/js/loginCss'
import AlertNotification from '../../Components/AlertNotification'
//import {Link} from 'react-router-dom'

const SignInSide = props => {

  const classes = useStyles();
  const { title, subtitle, onChange, institution, open, handleClose, onSubmit, nameForm, errorRut, errorPassword,
  errorName, Select} = props;
  /* const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });  */

  return (
    <Grid container component="main" className={classes.root}>       
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>     
        <div className={classes.paper}>  
        <AlertNotification 
          message="Datos incorrectos. Intente de nuevo" 
          handleClose={handleClose}
          open={open}
          autoHideDuration={4000}
          variant="error"
        />     
          <Typography component="h1" variant="h4">
            {title}
          </Typography>
          <Typography component="h2" variant="h6">
            {subtitle}
          </Typography>
          <Avatar className={classes.avatar}>           
            <LockOutlinedIcon />
          </Avatar> 
          <Typography component="h1" variant="h6">
            {nameForm}
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit} >
             {/* <ThemeProvider theme={theme}>  */}    
             <TextField     
              id="institution"
              required
              select
              label="Seleccione Institución"
              value={institution.name}
              onChange={onChange("name")}
              margin="dense"
              variant="outlined"
              fullWidth
              autoFocus
              error={errorName} 
            >
              {Select.map((option, key) => (
                <MenuItem key={key} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>   
            <TextField              
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="rut"
              label="Rut"
              name="rut"
              value={institution.rut}
              onChange={onChange("rut")}
              autoComplete="rut"       
              error={errorRut}  
            />      
            <TextField
              variant="outlined"
              margin="dense"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={institution.password}
              onChange={onChange("password")}
              error={errorPassword} 
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Ingresar
            </Button>
            {/*  </ThemeProvider> */}
            {/*<Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
               <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> 
            </Grid> */}          
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default SignInSide;
