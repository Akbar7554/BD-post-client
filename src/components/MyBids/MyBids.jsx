import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import MyBidsRow from "./MyBidsRow"
import axios from "axios"

const MyBids = () => {
  useEffect(() => {
    document.title = "BD Post | My Bids"
  }, [])
  const { user } = useContext(AuthContext)
  const [bids, setBids] = useState([])
  const url = `https://bd-post-server.vercel.app/bids?email=${user?.email}`
  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBids(res.data)
      console.log(setBids)
    })
    // fetch(url, {credentials: true})
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBids(data)
    //   })
  }, [url])

  return (
    <div className="bg-gray-100 w-[80%] mx-auto p-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-base mb-5">
            <tr>
              <th>Job Title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {user?.email
              ? bids.map((bid) => (
                  <MyBidsRow key={bid._id} bid={bid}></MyBidsRow>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyBids
