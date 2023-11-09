import { createContext, useEffect, useState } from "react"
import axios from "axios"
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth"
import app from "../Firebase/firebase.config"
export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userSignOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email
      const loggedUser = { email: userEmail }
      console.log("User is SignOut", currentUser)
      setUser(currentUser)
      setLoading(false)
      if (currentUser) {
        axios
          .post("https://bd-post-server.vercel.app/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response", res.data)
          })
      } else {
        axios
          .post("https://bd-post-server.vercel.app/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data)
          })
      }
    })
    return () => {
      unSubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    userSignOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
