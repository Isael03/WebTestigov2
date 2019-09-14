import React,{useEffect}  from 'react'
import HomeUser from './Presentation/HomeUser'
import Url from '../Config/url'
import { useCookies } from 'react-cookie';



const Home = (props)=>{
    const [info, setInfo]= React.useState([])
    const [values, setValues] = React.useState({
        filter: "Contenido",
      });
      const [cookies, setCookie] = useCookies(['institution']);

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
             let res = await fetch(`${Url}/files`, config)
             let dataFiles= await res.json()
            setInfo(dataFiles)


          } catch (error) {
            console.log(error);        
          }
        }
         getData()
      }, [info])

      console.log(info)
    return (   
              <HomeUser data={info} handleChange={handleChange} values={values} tags={['Todos','Accidentes', 'Robos', 'Incendios']} badge={cookies.institution}/>            
    ); 
}


export default Home;
