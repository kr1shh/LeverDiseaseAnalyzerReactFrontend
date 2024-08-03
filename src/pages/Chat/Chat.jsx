import { useState,useRef,useEffect } from "react";
import Nav from "../../components/Nav/Nav"
import "./Chat.scss"
import { FaArrowRight } from "react-icons/fa6";


const Chat = () => {

  const [message,setMessage] = useState([])
  const [chat,setChat] = useState("")

  const sendMessage = ()=>{

    if(chat.trim() !== ""){
      setMessage([...message,chat])
      setChat("")
    } 

  }

  const keyPressHandler = (e)=>{
    if(e.key === "Enter"){
      e.preventDefault()
      sendMessage()
      console.log("enter");
      
    }
  }

  const chatHistRef = useRef(null);

  useEffect(()=>{
    if (chatHistRef.current) {
      chatHistRef.current.scrollTop = chatHistRef.current.scrollHeight;
    }
  }, [message])

  return (
    <>
        <Nav/>
        <div className="chat_container">
          <div className="title">
            <h3>
              Chat with your&nbsp;
              <span>
                health Companion!
              </span> 
            </h3>
          </div>


          <div className="chat_sec">
            <div className="chat_hist" ref={chatHistRef}>
              <div className="chat_AI">
                <div className="bubble">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ab?
                  </p>
                </div>
              </div>

              {
                message.map((item,index)=>(
                  <div className="chat_user" key={index}>
                    <div className="bubble">
                      <p>
                        { item }
                      </p>
                    </div>
                  </div>
                ))
              } 

            </div>

            <div className="input_container">
              <input type="text" placeholder="ask anything!" value={ chat } onChange={ (e)=>{ setChat(e.target.value) }} onKeyDown={ keyPressHandler }/> 
              <button id="send" onClick={ sendMessage} >
                <FaArrowRight style={{
                  color:"white"
                }}/>
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Chat