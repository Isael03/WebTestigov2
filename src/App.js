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
       <Redirect exact from='/' to="/login" /> 
      {/* Si la cookie institution NO esta definida el router redirige al usuario al login, de lo contrario al Home */}
       {/* <Route exact path="/login" render={props => (cookies.institution==='undefined'? (
        <Login {...props} />) : (<Redirect to='/home' />))} />    */}

      <Route exact path="/login" render={(props)=>( <Login {...props} />)} />   

       {/*  <Route exact path="/login" render={props => (
        <Login {...props} />)} />   */}

      {/* Si la cookie institution SI esta definida el router redirige al usuario al Home, de lo contrario al login*/}

      {/*  <Route exact path="/home" render={props =>(cookies.institution!=='undefined'? (
        <Home {...props} />) : (<Redirect to="/login"/>))} />  */} 

        <Route exact path="/home" render={(props)=>(<Home {...props} />)} />  

        {/**Ruta Watch que acepta parametros */}
      <Route exact path='/watch/:id' render={props => <Viewer {...props}/>}/> 


          {/**Ruta para renderizar vista de error en caso de no encontrar la página */}
      <Route render={()=>(<Error404/>)}  />              
    </Switch>
    </React.Fragment>
)}



export default App;
