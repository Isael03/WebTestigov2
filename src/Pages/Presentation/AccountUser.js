import React from "react";
import Nav from "../../Components/Navbar/Nav";
import Home from "../Home";

const AccountUser = ({handleExit}) => {
  return (
    <React.Fragment>
      <Nav handleExit={handleExit}/>
      <div style={{ marginTop: "2rem" }}>
        <Home/>
      </div>
    </React.Fragment>
  );
};

export default AccountUser;
