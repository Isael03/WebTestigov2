import React from 'react';
import LoginInSide from "./Presentation/LogininSide"
import { useCookies } from 'react-cookie';

const Login = (props) => {
    const [form, setForm] = React.useState({
        rut:"",
        password:"",
    })
    const [open, setOpen] = React.useState(false)
    const [errorRut, setRut] = React.useState(false)
    const [errorPassword, setPassword] = React.useState(false)
    const [cookies, setCookie] = useCookies(['institution']);
    
    document.title='Iniciar sesión'
    
    let handleClose = () => {
        setOpen(false)
    } 

    let handleChange = name => event => {
        setForm({
            ...form, [name]: event.target.value
        })
      };

      let onSubmit = e=>{
        e.preventDefault();     
        //Cambiar estado de las advertencias
        if(form.rut!==""){setRut(false)}
        if(form.password!==""){setPassword(false)}
        //Comprobar que los campos esten llenos
        if(form.name !=="" && form.rut !=="" && form.password !=="" ){
           setCookie('user', `${form.rut}`, { path: '/' }); 

          props.history.push(`/home`)  
        }  
        else{
          //Lanzar advertencias si un campo esta vacio
          if(form.rut === ""){setRut(true)}
          if(form.password === ""){setPassword(true)}
          setOpen(true)    
        }
      }

    return(         
        <LoginInSide 
        title="Testigo" 
        subtitle="Anonimato ante el peligro" 
        nameForm="Iniciar Sesión"
        onChange={handleChange}
        institution={form}
        open={open}
        handleClose={handleClose}
        onSubmit={onSubmit}
        errorRut={errorRut}
        errorPassword={errorPassword}
        />                    
    )
}

export default Login;