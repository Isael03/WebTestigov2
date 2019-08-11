import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Login from "./Pages/Login"
import Error404 from './Pages/404'
import Account from "./Pages/Account"


const App = ()=>{

  return( 
  <BrowserRouter>
  <CssBaseline />   
    <Switch>
      <Route  exact path="/login" render={props => <Login {...props} />} />
      <Redirect exact from="/" to="/login" />
      <Route exact path="/account" render={props => <Account {...props} />} />      
      <Route component={Error404}  />                
    </Switch>
  </BrowserRouter>
)}



export default App;
