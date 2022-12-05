import React from 'react'
import './Text.css'

export default function Text( props ) {
  
    if ( props.name ) {                              
        return (
            <div className = {`toplevel ${props.class}`} >
                {`${props.name}: ${props.message}`} 
            </div>
          )
    }
  else {                                                     
    return (
        <div className = {`toplevel ${props.class}`} >
            {`You : ${props.message}` }
        </div>
      )
  }
   
}
