import React from "react";
import { Modal } from "@material-ui/core";
import "../Assets/css/Player.css";

const ImageCase = ({
  step,
  clase
}) => {
    const [openModalImage, setOpen] = React.useState(false);

  const handleOpenImage = () => {
    setOpen(true);
  };

  const handleCloseImage = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="player-wrapper">
        <img
          src={step}
          alt="Imagen"
          className="react-player"
          width="100%"
          height="100%"
          onClick={handleOpenImage}
        />
      </div>
      <Modal open={openModalImage} onClose={handleCloseImage} className={clase}>
        <img
          src={step}
          alt="Imagen"
          className="react-player"
          width="100%"
          height="100%"
          onClick={handleCloseImage}
        />
      </Modal>
    </React.Fragment>
  );
};

export default ImageCase;
