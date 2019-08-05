import React from 'react';
import LoginInSide from "./Presentation/LogininSide"

const Login = () => {
    const [form, setForm] = React.useState({
        name:"",
        rut:"",
        password:"",
    })
    const [open, setOpen] = React.useState(false)

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
       
        if(form.name !=="" && form.rut !=="" && form.password !=="" ){
          console.log(form);     
        }  
        else{
          setOpen(true)    
        }
      }

    return(         
        <LoginInSide 
        title="Testigo" 
        subtitle="Anonimato ante el peligro" 
        Select={["Carabineros", "Ambulancias", "Bomberos"]} 
        nameForm="Iniciar Sesión"
        onChange={handleChange}
        institution={form}
        open={open}
        handleClose={handleClose}
        onSubmit={onSubmit}
        />                    
    )
}

export default Login;