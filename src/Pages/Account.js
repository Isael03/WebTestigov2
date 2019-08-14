import React from 'react'
import AccountUser from './Presentation/AccountUser'
import { useCookies } from 'react-cookie';


const Account = (props) =>{
  const [cookies, removeCookie] = useCookies(['institution']);


    let handleExit = ()=>{
        props.history.push('/login')
        removeCookie('institution')

      }
   
    return(
       <AccountUser handleExit={handleExit}  bagdeName={cookies.institution}/> 
    )
    
}

export default Account;