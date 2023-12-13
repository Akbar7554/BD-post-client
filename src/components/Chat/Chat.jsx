import Swal from "sweetalert2"
import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import ChatBox from "./ChatBox"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../Firebase/firebase.config"
import { Link } from "react-router-dom"
import { MdGTranslate } from "react-icons/md"

const Chat = () => {
  const { user } = useContext(AuthContext)
  const [value, setValue] = useState("")

  const handleSendMessage = async (e) => {
    e.preventDefault()

    if (value.trim() === "") {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Please Type Anything!",
        showConfirmButton: false,
        timer: 1500,
      })
      return
    }

    try {
      const { uid, displayName, photoURL } = user
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avator: photoURL,
        uid,
        createdAt: serverTimestamp(),
      })
    } catch (error) {
      console.log(error)
    }

    console.log(value)
    setValue("")
  }

  return (
    <div>
      <ChatBox></ChatBox>
      <div className="bg-gray-200 fixed bottom-0 w-[90%] py-10 shadow-lg">
        <form onSubmit={handleSendMessage} className="containerWrap px-10 flex">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
            type="text"
          />

          <button
            type="submit"
            className="w-auto bg-sky-500 text-white  rounded-r-lg px-5 text-sm"
          >
            Send
          </button>
        </form>
        
      </div>
    </div>
  )
}

export default Chat
