import React, { useEffect, useState } from 'react'
import  './Login.css';
import {Link} from "react-router-dom" ;

let Data ;
 function Login() {

  let [ name , SetName ] = useState('') ;

  const change = ( e ) => { SetName( e.target.value ) } 

  const transfer = ( e ) => {             
    if ( name === '') {

      e.preventDefault();
      alert('Please Enter Name and Email')
    }
   else  Data = name;
   
  }

  return (

<div className = 'Login' >
<div className = "popup">  
<p className = 'title' > Login To Join Room </p>
<p className = 'name' >  Your Name: <input type = "text" placeholder = 'Enter You name' id = "name" name = "name"  value = {name} onChange = { change } required /> </p>
<p className = 'email' > Your Email: <input type = "email" id = "email" placeholder = 'Enter You Email'  name = "email" required /> </p>
<Link to = '/chatroom' onClick = {transfer} > <button className = "btn"  >  START </button> </Link>
</div>
</div>
  )
}

export default Login ;
export {Data}