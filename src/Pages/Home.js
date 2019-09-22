import React,{/* useEffect, */ Component}  from 'react'
import HomeUser from './Presentation/HomeUser'
//import Url from '../Config/url'
//import { useCookies } from 'react-cookie';
import db from '../Config/database'
import Cookies from 'universal-cookie';
import Loading from '../Components/Loading'


class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      info:[],
      values:{
        filter:"Contenido"
      },
      loading:true
    }
  }
      /**Consultar datos dependiendo la institucion guardada en la cookie, los datos obtenidos se guardan en el estado "info" */
    componentDidMount(){
    
     const cookies = new Cookies();
      try {
        const connection = db.ref("/Archivos/");
         connection
          .orderByChild(`Institucion/${cookies.get('institution')}`)
          .equalTo(true)
          .on("value", snapshot => {
            var list =
              snapshot.val() !== null
                ? Object.values(snapshot.val()) : snapshot.val();
            this.setState({
              loading:false,
              info:list
            })
          }); 
      } catch (error) {
        console.log(error);     
      }  
    }  

    /**Se desconecta el servicio de la base de datos */
    componentWillUnmount(){
      db.ref("/Archivos/").off()
    }

  render() {
    document.title='Inicio'  
    if(this.state.loading){
      return <Loading/>
    }

    return (
        <HomeUser data={this.state.info} handleChange={this.handleChange}  values={this.state.values}  tags={['Todos','Accidentes', 'Robos', 'Incendios']}/>      
    );
  }
}

export default Home;

/* const Home = (props)=>{
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

        try {

          const connection = db.ref("/Archivos/");
          connection
            .orderByChild(`Institucion/${cookies.institution}`)
            .equalTo(true)
            .on("value", snapshot => {
              var list =
                snapshot.val() !== null
                  ? Object.values(snapshot.val()) : snapshot.val();

              setInfo(list)   
            });
        } catch (error) {
          console.log(error);     
        }  





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
 */