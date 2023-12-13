import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Message = ({ message }) => {
    const {user} = useContext(AuthContext)
    return (
      <div>
        <div className={`chat ${message.uid === user.uid ? "chat-end" : "chat-start"}`}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={message.avator}
              />
            </div>
          </div>
          <div className="chat-header">
            {message.name}
          </div>
                <div className="chat-bubble">{ message.text}</div>
        </div>
      </div>
    )
};

export default Message;