import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import CssBaseline from "@material-ui/core/CssBaseline";
import './Assets/css/global.css'

ReactDOM.render(
<BrowserRouter>
 <CookiesProvider>
 <CssBaseline /> 
 <App />
 </CookiesProvider>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
