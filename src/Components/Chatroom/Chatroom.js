import React, { useEffect, useState } from 'react'
import { Data } from '../Login/Login' ;
import './Chatroom.css'
import socketIo from "socket.io-client" ;             
import Text from "../Texts/Text"
import ReactScrollToBottom from "react-scroll-to-bottom"

let socket ;

const ENDPOINT = "https://fungroupchat.adaptable.app/";

export default function Chatroom() {

  const [id, setid] = useState("");

  const [messages, setMessages] = useState([]) //react-router-dom "http://localhost:5000/"

  const msgsend = () => {
  
    const message = document.getElementById('chat').value ;
  
    if (message) {
      socket.emit ('send' , { message , id } ) ;              
  
      document.getElementById('chat').value = '' ;
    }
    
  }

const enter = (e) =>  e.key === 'Enter' ? msgsend() : null  ;

useEffect(() => {

  socket = socketIo ( ENDPOINT , { transports: ['websocket'] });

  socket.on('connect', () => { setid(socket.id) } )
  
  socket.emit('join', { Data })

  socket.on('Enter', (data) => {  setMessages([...messages, data])  } )

  socket.on('MemberJoined', (data) => { setMessages([...messages, data]) } )

  socket.on('Left', (data) => { setMessages([...messages, data]) } )
  
}, [])

useEffect(() => {

  socket.on('sendMessage', (data) => { setMessages([...messages, data])  })
  
}, [messages] )


  return ( 
    <div>
      <div className = 'Chatroom'> 
      <div className = 'Box'>     
      <div className = 'top' >
        <h1 className='toph'>Group-Chat-Room</h1>
       <a href='/'><button className = "close"> X </button></a> 
      </div>
      <ReactScrollToBottom className = 'chatting'>
        { 
        messages.map ( ( e , i ) =>   <Text  key = {i} name ={e.id === id ? '' : e.user} message={e.message} class ={e.id === id ? 'right' : 'left'} /> )
      }
      </ReactScrollToBottom>

      <div className = 'sendBox'>
      
      <input type = "text" onKeyPress={enter} placeholder = 'Type Here..' id = "chat" name = "chat"  required />
      <button className = "sendbutton" onClick = {msgsend} >  SEND </button>
    </div>
      </div>

      </div>
     
      </div>
  )
}
