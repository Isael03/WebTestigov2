import React,{useEffect}  from 'react'
import HomeUser from './Presentation/HomeUser'
import {Archivo} from '../data.json'

const Home = ()=>{
    const [data, setData]= React.useState([])
    const [values, setValues] = React.useState({
        filter: "Todos",
      });

    function handleChange(event) {
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value
        }));
      }

    useEffect(()=>{
        setData(Archivo)
    },[]) 
  
    return (
              <HomeUser data={data} handleChange={handleChange} values={values}/>
    );
}


export default Home;
