import React from "react";
import "../Assets/css/Loading.css";
import logo from "../Assets/images/Testigo.jpg";



const Loading = () => (

    <div className='loader-father'>
        <div className="avatar App-logo" style={{backgroundImage:`url(${logo})`}}></div>
    </div>
     
);

export default Loading;
