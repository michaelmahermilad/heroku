import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Mymessage from "./Mymessage";
import OtherMessage from "./OtherMessage";
import BlurOnIcon from '@mui/icons-material/BlurOn';
 import sound from '../pages/sound.mp3'
 import mainsound from '../pages/mainsound.m4a'
let socket;
function ChatRoom({ email }) {
  const [play, setPlay] = useState(false);
  const [playing,setPlaying]=useState(false)
  const [stop,setStop]=useState(false);
  const audio = new Audio(`${mainsound}`);
  const audio2 = new Audio(`${sound}`);

  const Playit = () => {
    if(!playing){
       audio.play();
        setTimeout(() => {
          audio.pause();
         
        }, 70000); 
    }
       
    
    }
   
     


  useEffect(()=>{
      Playit()  
      setPlaying(true);
  },[play])
  useEffect(() => {
    document.addEventListener("scroll",()=>setPlay(true));
  }, []);


  const [messages, setMessages] = useState([{}]);
  const [message, setMessage] = useState({});
  const email1 = email.trim().split(' ')[0];
   const [textandmessage, setTextandmessage] = useState({
    message1: "",
    email: "",
  });
  const [data,setData]=useState(null)

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
  }, [messages]);
  useEffect(() => {
    const ENDPOINT = "medicalprojectnet.herokuapp.com/";
    socket = io(ENDPOINT);
    socket.emit("join", email.trim().split(' ')[0]);
  }, [email]);
  useEffect(() => {
    socket.on("message", (textandmessage) => {
     if(textandmessage){
     setMessage(textandmessage) }
    })
      
  

  }, []);
  useEffect(() => {
if(message!=={})
setMessages(messages=> [...messages,message])
scrollToBottom()
audio2.play()
  }, [message]);
console.log(messages)

  const getdata = (e, name) => {
    setTextandmessage({ email:email.trim().split(' ')[0], [name]: e.target.value });
  };

  useEffect(() => {
   if (textandmessage.message1 !== "" && email !== undefined) {
     socket.emit("sendMessage", data);}
 
   }, [data]);
  function Handlesubmiting(e){
e.preventDefault();
if(data===textandmessage){
  if (textandmessage.message1 !== "" && email !== undefined) {
    socket.emit("sendMessage", data);
  }
}
 setData(textandmessage)
 scrollToBottom()

  }
  return (
    <div style={{ height: "calc(100% - 2rem)",bottom:'3.2rem', overflowY: "scroll",paddingTop:'1rem' }}>
      {messages.map((message,i) => {
        if (message.email === email1  &&    message // 👈 null and undefined check
        && Object.keys(message).length !== 0
            )
          return <Mymessage key={i} email={message.email} message={message.message1} />;
        else if(     message // 👈 null and undefined check
        && Object.keys(message).length !== 0
        ){
           console.log(message)
          return (
            <OtherMessage key={i}  email={message.email} message={message.message1} />
          );
        }
       
          else return
      })}
            <div style={{height:'6.9rem'}}    ref={messagesEndRef}/>

      <form  ref={messagesEndRef}  onSubmit={Handlesubmiting}>
        <input style={{ position:"absolute",bottom:'0',left:'0rem',right:'0',border:'0',borderTop:'4px solid var(--main)',outline:'0', width: "100%",height: "2.6rem" }}   type="text" onChange={(e) => getdata(e, "message1")} />
        <button className="chathover"
          style={{ position:"absolute",bottom:'2.8rem',marginLeft:'calc(50% - 2rem)',borderRadius:'25px', textAlign:'center',zIndex:'10',outline:'0', width:'3rem' , height: "3rem" }}
          disabled={false}
          type="submit"
        >
          <BlurOnIcon    sx={{color:'var(--main2)',fontSize:'2rem'}}/>
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;
