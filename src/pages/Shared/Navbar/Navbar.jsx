import logo from "../../../assets/logo.png"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../providers/AuthProvider"
import { BsChatDotsFill } from "react-icons/bs"
import { MdGTranslate } from "react-icons/md"

// import { useState, useEffect } from "react"
const Navbar = () => {
  // const [theme, setTheme] = useState("light")
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark")
  //   } else {
  //     document.documentElement.classList.remove("dark")
  //   }
  // }, [theme])

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark")
  // }

  const { user, userSignOut, createUser } = useContext(AuthContext)
  const handleSignOut = () => {
    userSignOut()
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const links = (
    <>
      <li>
        <Link className="md:text-lg font-semibold text-gray-600" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="md:text-lg font-semibold text-gray-600" to="/add-job">
          Add Job
        </Link>
      </li>
      <li>
        <Link
          className="md:text-lg font-semibold text-gray-600"
          to="/my-posted-jobs"
        >
          My Posted Jobs
        </Link>
      </li>
      <li>
        <Link className="md:text-lg font-semibold text-gray-600" to="/my-bids">
          My Bids
        </Link>
      </li>
      <li>
        <Link
          className="md:text-lg font-semibold text-gray-600"
          to="/bid-requests"
        >
          Bid Requests
        </Link>
      </li>
    </>
  )
  return (
    <div className="navbar bg-base-100 mb-5 mt-3 md:mt-8 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-20 md:w-32" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
          <div className="navbar-end">
        <Link to="/translate">
          <MdGTranslate className="mr-2 text-3xl text-sky-400"></MdGTranslate>
        </Link>
        <Link to="/chat">
          <BsChatDotsFill className="mr-2 text-3xl text-green-400"></BsChatDotsFill>
        </Link>
        <Link className="border-2 mr-2 text-[#31A8EB] font-semibold border-[#31A8EB] rounded-xl text-xs md:text-md px-2 py-2 md:text-lg md:px-5 md:py-3 hover:text-white hover:bg-[#31A8EB]">
          Search Jobs
        </Link>
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-40 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user.displayName}</a>
              </li>
              <li>
                <a>{user.email}</a>
              </li>
              <li>
                <Link to="/" onClick={handleSignOut}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Navbar
