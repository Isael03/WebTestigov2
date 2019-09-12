import React from "react";
import PropTypes from "prop-types";
import { withStyles/* , createMuiTheme */ } from "@material-ui/core/styles";
import { ExitToApp } from "@material-ui/icons";
//import MenuIcon from "@material-ui/icons/Menu";
import ToolbarMenu from "./ToolbarMenu";
import {
  MenuItem,
  IconButton,
  Toolbar,
  Typography,
  AppBar
} from "@material-ui/core";
/* import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green'; */
import '../../Assets/css/Appbar.css'
import { useCookies } from 'react-cookie';
import {Link} from 'react-router-dom'

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    padding: 10
  },
  nabvar: {
    backgroundColor: /* '#212121' */ /* || '#171717' */ "#333"
  }
};


/* const theme = createMuiTheme({
  palette: {
    error: red,
    secondary: green,
    primary: {
      main: '#ffffff',
    }
  },
});
 */

function ButtonAppBar(props) {
  const { classes } = props;
  const [cookies, removeCookie] = useCookies(['user']);


     let handleExit = (props)=>{
        removeCookie('user')        
      } 

  return (
    <AppBar position="sticky" className={classes.nabvar}>
      <Toolbar>
        {/*  <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton> */}
          <Link to='/home' className='title' >              
          <Typography
            variant="h6"
            color="inherit"
            style={{ paddingLeft: "5px" }}
          >
            Testigo
          </Typography>
         
        </Link>     
        <ToolbarMenu
          render={collapsed => {
            return collapsed
              ? [
               
                  <MenuItem key="Exit" autoclose='true'  onClick={handleExit}>
                    <Link to='/login' key="ExitIcon" className='text-dark'>Salir</Link>
                  </MenuItem>
 
                ]
              : [
                  <IconButton  size="small" onClick={handleExit} key="ExitIcon">
                     <Link to='/login' ><ExitToApp className='Nav-Icon' /></Link> 
                  </IconButton>          
                ];
          }}
        />
      </Toolbar>      
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
