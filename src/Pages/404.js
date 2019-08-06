import React from "react";
import "../Components/Styles/Errors.css";
import NotFoundImg from "../Images/404.png";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const NotFound = () => (
  <Container maxWidth="sm" style={{ marginTop: "3rem" }}>
    <Typography component="h2" variant="h4" className="Error_Text">
      Error: 404 Página no encontrada
    </Typography>
    <img src={NotFoundImg} alt="404 NotFound" className="Error_Image" />
  </Container>
);

export default NotFound;
