import React from "react";
import { Grid, Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MapCase from "./MapCase";

const useStyles = makeStyles(theme => ({
  modal: {
    height: "85vh",
    width: "90vw",
    margin: "auto"
  },
  button: {
    zIndex: 1,
    position: "absolute",
    bottom: 0
  }
}));

const ModalMap = ({ handleClose, open, latitud, longitud }) => {
  const classes = useStyles();
  
  return (
    <Modal open={open} onClose={handleClose} className={classes.modal}>
      <Grid container>
        <MapCase latitud={latitud} longitud={longitud}/>
        <Button
          variant="contained"
          fullWidth
          onClick={handleClose}
          className={classes.button}
        >
          Cerrar
        </Button>
        />
      </Grid>
    </Modal>
  );
};
export default ModalMap;
