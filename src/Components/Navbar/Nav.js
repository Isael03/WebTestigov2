import React from "react";
import PropTypes from "prop-types";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import { ExitToApp } from "@material-ui/icons";
//import MenuIcon from "@material-ui/icons/Menu";
import ToolbarMenu from "./ToolbarMenu";
import {
  MenuItem,
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  Badge
} from "@material-ui/core";
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    padding: 10
  },
  nabvar: {
    backgroundColor: /* '#212121' */ /* || '#171717' */ "#333"
  },
  exitIcon: {
    color: "white"
  }
};


const theme = createMuiTheme({
  palette: {
    error: red,
    secondary: green,
    primary: {
      main: '#ffffff',
    }
  },
});

function ButtonAppBar(props) {
  const { classes } = props;

  return (
    <AppBar position="sticky" className={classes.nabvar}>
      <Toolbar>
        {/*  <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton> */}
        <ThemeProvider theme={theme}>
        <Badge badgeContent={"Bomberos"}  color='error' >
          <Typography
            variant="h6"
            color="inherit"
            style={{ paddingLeft: "5px" }}
          >
            Testigo
          </Typography>
        </Badge>
        </ThemeProvider>     
        <ToolbarMenu
          render={collapsed => {
            return collapsed
              ? [
                  <MenuItem key="Exit" autoclose={true}>
                    Salir
                  </MenuItem>
                ]
              : [
                  <IconButton key="ExitIcon" size="small">
                    <ExitToApp className={classes.exitIcon} />
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
