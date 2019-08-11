import React from "react";
//import Header from "../../Components/Header";
//import Navigation from "../../Components/Navigation";
import Nav from "../../Components/Navbar/Nav";
import Home from "../Home";

const AccountUser = () => {
  return (
    <React.Fragment>
      <Nav />
      <div style={{ marginTop: "2rem" }}>
        <Home/>
      </div>
    </React.Fragment>
  );
};

export default AccountUser;
