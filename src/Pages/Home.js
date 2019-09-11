import React,{useEffect}  from 'react'
import HomeUser from './Presentation/HomeUser'
import {Archivo} from '../data.json'


const Home = (props)=>{
    const [data, setData]= React.useState([])
    const [values, setValues] = React.useState({
        filter: "Todos",
      });

    document.title='Inicio'  
    function handleChange(event) {
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value
        }));
      }

   

      useEffect(()=>{

        const getData= async ()=>{
          try {
            const config={
              headers:{
               'Accept':'application/json',
               'Content-Type':'application/json'
              } 
            }
             let res = await fetch('http://localhost:3000/home/api', config)
             let dataFiles= await res.json()

            setData(dataFiles)


          } catch (error) {
            console.log(error);        
          }
        }
         getData()
      }, [data])
      console.log(data)
  
    return (   
              <HomeUser data={data} handleChange={handleChange} values={values} tags={['Todos','Accidentes', 'Robos', 'Incendios']}/>            
    ); 
}


export default Home;
