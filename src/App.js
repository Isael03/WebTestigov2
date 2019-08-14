import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Login from "./Pages/Login"
import Error404 from './Pages/404'
import Account from "./Pages/Account"
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';


const App = ()=>{
  const [cookies] = useCookies(['institution']);


  return( 
  <BrowserRouter>
  <CssBaseline />   
  <CookiesProvider>
    <Switch>
      <Route  exact path="/login" render={props => <Login {...props} />} />
      <Route exact path="/" render={props =>(cookies.institution==='undefined'? (
        < Redirect to="/login"/>) : (<Account {...props} />))} />  
      
      
      <Route component={Error404}  />                
    </Switch>
    </CookiesProvider>
  </BrowserRouter>
)}



export default App;
