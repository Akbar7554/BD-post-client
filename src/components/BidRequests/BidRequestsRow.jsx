import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import axios from "axios"
const BidRequestsRow = ({ bid }) => {
  const { _id, jobTitle, price, userEmail, buyerEmail, date, status } = bid
  const { user } = useContext(AuthContext)
  const [bids, setBids] = useState([])
  const url = `http://localhost:5000/bids/buyerEmail?email=${user?.email}`
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
  const handleReject = (id) => {
    fetch(`http://localhost:5000/bids/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          const remaining = bids.filter((bid) => bid._id !== id)
          const updated = bids.find((bid) => bid._id === id)
          updated.status = "confirm"
          const newBids = [updated, ...remaining]
          setBids(newBids)
        }
      })
  }

  return (
    <tr>
      <th>{jobTitle}</th>
      <td>{userEmail}</td>
      <td>{date}</td>
      <td>{price}</td>
      {status === "confirm" ? (
        <span>Rejected</span>
      ) : (
        <div>
          <td>Pending..</td>
          <th>
            <button className="btn text-white bg-sky-500">Accept</button>
            <button
              onClick={() => handleReject(_id)}
              className="btn text-white bg-red-500"
            >
              Reject
            </button>
          </th>
        </div>
      )}
    </tr>
  )
}

export default BidRequestsRow
