import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import MyBidsRow from "./MyBidsRow"
import { useLoaderData } from "react-router-dom"

const MyBids = () => {
  const { user } = useContext(AuthContext)
  const [bids, setBids] = useState([])
  const url = `http://localhost:5000/bids?email=${user.email}`
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBids(data)
      })
  }, [])
    console.log(user.email);
    const jobInfo = useLoaderData()
    const { jobTitle, price, userEmail, buyerEmail, date } = jobInfo
    const [job, setJob] = useState(jobInfo)
    const filtered1 = jobInfo.filter((employee) => {
      return employee.userEmail === "akbar@gmail.com"
    })
    console.log(jobInfo);
    // console.log(userEmail)
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
            {user?.email === jobInfo?.buyerEmail ?
              bids.map((bid) => (
                <MyBidsRow key={bid._id} bid={bid}></MyBidsRow>
              )) : ""}
          </tbody>
        </table>
          </div>
    </div>
  )
}

export default MyBids
