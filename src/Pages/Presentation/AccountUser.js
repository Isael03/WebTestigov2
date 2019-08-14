import React from "react";
import Nav from "../../Components/Navbar/Nav";
import Home from "../Home";


const AccountUser = (props) => {
  
  return (
    <React.Fragment>
      <Nav {...props}/>
      <div style={{ marginTop: "2rem" }}>
        <Home/>
      </div>
    </React.Fragment>
  );
};

export default AccountUser;
