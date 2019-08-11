import React from 'react'
import AccountUser from './Presentation/AccountUser'


const Account = (props) =>{

    let handleExit = ()=>{
        props.history.push('/login')
    }
    return(
       <AccountUser handleExit={handleExit}/> 
    )
    
}

export default Account;