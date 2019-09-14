import React from 'react';
import LoginInSide from "./Presentation/LogininSide"
import db from '../Config/database'
import { useCookies } from 'react-cookie';
import bcrypt from 'bcryptjs';
import Controller from '../functions/controllers'

const Login = (props) => {

    /**Declaracion de estados */
    const [form, setForm] = React.useState({
        name:"",
        rut:"",
        password:"",
    })
    const [open, setOpen] = React.useState(false)
    const [errorName, setName] = React.useState(false)
    const [errorRut, setRut] = React.useState(false)
    const [errorPassword, setPassword] = React.useState(false)

    /**Cookies */
    const [cookies, setCookie] = useCookies(['institution']);

    /**Cambiar titulo al html */
    document.title='Iniciar sesión'
    
    /**Funcion para mostrar de error */
    let handleClose = () => {
        setOpen(false)
    } 

    /**Función para actualizar los estados rut y password  */
    let handleChange = name => event => {
        setForm({
            ...form, [name]: event.target.value
        })
      };


      /**Función para enviar formulario */
      let onSubmit = (e)=>{
          /*  bcrypt.hash('123456', 10, function(err, hash) {
           console.log(hash)
         });  */

        e.preventDefault();     
        //Cambiar estado de las advertencias
        if(form.name!==""){setName(false)}
        if(form.rut!==""){setRut(false)}
        if(form.password!==""){setPassword(false)}

        //Comprobar que los campos esten llenos
        if(form.name !=="" && form.rut !=="" && form.password !==""){

          let connection= db.ref(`Institucion/${form.name}`)
         connection.once("value").then(snapshot => {
          if((snapshot.child(form.rut).exists()) /* && (snapshot.child(form.rut+"/Contrasena").val()).toString() === form.password */){
             Password_Verification(form.password, snapshot.child(`${form.rut}/Contrasena`).val(), form.name) 
          }else{
            console.log('es false')
            setOpen(true) 
          }
        }).catch(err=>{
            console.log(err);
            setOpen(true)
        });               
        }  
        else{

          //Lanzar advertencias si un campo esta vacio
          if(form.name === ""){setName(true)}
          if(form.rut === ""){setRut(true)}
          if(form.password === ""){setPassword(true)}
          setOpen(true)    
        }
      }

       let Password_Verification=(password, passwordBD, service)=>{
        bcrypt.compare(password, passwordBD, (err, res)=> {
          if(res){
            setCookie('institution', `${service}`, { path: '/' });
            //Redirigir al home
             props.history.push(`/home`) 
          }else{
           setOpen(true)
          }
      });
      }   

    return(         
        <LoginInSide 
        title="Testigo" 
        subtitle="Anonimato ante el peligro" 
        nameForm="Iniciar Sesión"
        Select={["Carabineros", "Ambulancias", "Bomberos"]} 
        onChange={handleChange}
        institution={form}
        open={open}
        handleClose={handleClose}
        onSubmit={onSubmit}
        errorName={errorName}
        errorRut={errorRut}
        errorPassword={errorPassword}
        />                    
    )
}

export default Login;