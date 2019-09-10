import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Pages/Login"
import Error404 from './Pages/404'
import Viewer from './Pages/Viewer'
import { useCookies } from 'react-cookie';
import Home from './Pages/Home' 


const App = (props)=>{
  const [cookies] = useCookies(['institution']);


  return( 
    <React.Fragment>
    <Switch>
      <Redirect exact from='/' to="/watch" />
      <Route  path="/login" render={props => (cookies.institution==='undefined'? (
        <Login {...props} />) : (<Redirect to="/home"/>))} />       
       <Route exact path="/home" render={props =>(cookies.institution!=='undefined'? (
        <Home {...props} />) : (<Redirect to="/login"/>))} /> 
        <Route exact path="/home/:institution" render={props =>(cookies.institution!=='undefined'? (
        <Home {...props} />) : (<Redirect to="/login"/>))} />  
      <Route exact path='/watch/:id' render={props => <Viewer {...props}/>}/> 
      {/* <Route path='/watch/:id' render={props => <Viewer {...props}/>}/>  */}
      <Route render={()=>(<Error404/>)}  />              
    </Switch>
    </React.Fragment>
)}



export default App;
