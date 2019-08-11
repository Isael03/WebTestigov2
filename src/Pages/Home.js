import React from 'react'
import HomeUser from './Presentation/HomeUser'
import {Archivo} from '../data.json'


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Archivo
        }
    }
    render() {
        return (
            <div>
                  <HomeUser data={this.state.Archivo}/>
            </div>
        );
    }
}

export default Home;

/* const Home = ()=>{
    const [dataBD, setData] = React.useState(data)
    console.log(dataBD)
    return(
        <HomeUser />
    )
} */