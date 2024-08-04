import { useState, useRef, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import "./Chat.scss";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";

const Chat = () => {
  const [message, setMessage] = useState([]);
  const [chat, setChat] = useState("");
  const url = "http://127.0.0.1:8000/";

  const aiCall = async (chat) => {
    try {
      const response = await axios.post(`${url}api/chatbot/`, {
        user_message: chat,
      });
      console.log("res: ", response);

      setMessage((prevState) => [
        ...prevState,
        {
          ai: response.data.bot_response,
        },
      ]);
    } catch (error) {
      console.error("Error sending msg. to AI:", error);
    }
  };

  const sendMessage = () => {
    aiCall(chat);

    if (chat.trim() !== "") {
      setMessage((prevState) => [
        ...prevState,
        {
          user: chat,
        },
      ]);

      setChat("");
    }
  };

  console.log(message);

  const keyPressHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
      console.log("enter");
    }
  };

  const chatHistRef = useRef(null);

  useEffect(() => {
    if (chatHistRef.current) {
      chatHistRef.current.scrollTop = chatHistRef.current.scrollHeight;
      console.log("scrolling");
    }
  }, [message]);

  return (
    <>
      <Nav />
      <div className="chat_container">
        <div className="title">
          <h3>
            Chat with your&nbsp;
            <span>health Companion!</span>
          </h3>
        </div>

        <div className="chat_sec">
          <div className="chat_hist" ref={chatHistRef}>
            {message.map((item, index) =>
              item.ai ? (
                <div className="chat_AI" key={index}>
                  <div className="bubble">
                    <p>{item.ai}</p>
                  </div>
                </div>
              ) : (
                <div className="chat_user" key={index}>
                  <div className="bubble">
                    <p>{item.user}</p>
                  </div>
                </div>
              )
            )}


          </div>

          <div className="input_container">
            <input
              type="text"
              placeholder="ask anything!"
              value={chat}
              onChange={(e) => {
                setChat(e.target.value);
              }}
              onKeyDown={keyPressHandler}
            />
            <button id="send" onClick={sendMessage}>
              <FaArrowRight
                style={{
                  color: "white",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
