import { useContext, useEffect } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"
import Swal from "sweetalert2"

const JobDetails = () => {
    useEffect(() => {
      document.title = "BD Post | Job Details"
    }, [])
    const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const jobData = useLoaderData()
  const {
    _id,
    jobTitle,
    date,
    category,
    minimumPrice,
    maximumPrice,
    description,
    email,
    } = jobData
    
    const handleAddBidInfo = e => {
      e.preventDefault()

      const form = e.target
      const jobTitle = form.jobTitle.value
      const price = form.price.value
      const userEmail = form.userEmail.value
      const buyerEmail = form.buyerEmail.value
      const date = form.date.value

      const newBid = {
        jobTitle,
        price,
        userEmail,
        buyerEmail,
        date,
      }
      console.log(newBid)

      // data send to the server
      fetch("http://localhost:5000/bids", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newBid),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.insertedId) {
            navigate(location?.state ? location.state : "/my-bids")
            Swal.fire({
              title: "success!",
              text: "Jobs Added Successfully!",
              icon: "success",
              confirmButtonText: "Ok",
            })
          }
        })
    }
  return (
    <div className="flex-reverse md:flex justify-around items-center">
      <div className="p-5">
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-sky-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dd className="mt-1  text-center text-lg text-gray-100 sm:mt-0 sm:col-span-2">
                  {jobTitle}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Deadline</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {date}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Price Range
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  ({minimumPrice} - {maximumPrice}) $
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full max-w-lg mx-auto p-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg text-center font-medium mb-6">
              Place your Bid Information
            </h2>
            <form onSubmit={handleAddBidInfo}>
              <div className="col-span-2 mb-2 sm:col-span-1">
                <label
                  htmlFor="card-holder"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  disabled
                  defaultValue={jobData.jobTitle}
                  placeholder=""
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={jobData.minimumPrice}
                    id="price"
                    placeholder="Bidding Amount"
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    id="email"
                    disabled
                    placeholder="Your Email"
                    defaultValue={user.email}
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Buyer Email
                  </label>
                  <input
                    type="email"
                    name="buyerEmail"
                    id="email"
                    disabled
                    defaultValue={jobData.email}
                    placeholder="Buyer Email"
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="card-holder"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Deadline
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    defaultValue={jobData.date}
                    placeholder=""
                    className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-lg focus:outline-none"
                >
                  Bid on the Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
