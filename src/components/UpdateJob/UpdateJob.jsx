import { useContext, useEffect } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import { AuthContext } from "../../providers/AuthProvider"

const UpdateJob = () => {
    useEffect(() => {
      document.title = "BD Post | Update Job"
    }, [])
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const updateJob = useLoaderData()
  const {
    _id,
    jobTitle,
    date,
    category,
    minimumPrice,
    maximumPrice,
    description,
  } = updateJob
  const handleUpdatedJobs = (e) => {
    e.preventDefault()

    const form = e.target
    const jobTitle = form.jobTitle.value
    const date = form.date.value
    const category = form.category.value
    const minimumPrice = form.minimumPrice.value
    const maximumPrice = form.maximumPrice.value
    const description = form.description.value

    const updateJob = {
      jobTitle,
      date,
      category,
      minimumPrice,
      maximumPrice,
      description,
    }

    fetch(`http://localhost:5000/jobs/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          navigate(location?.state ? location.state : "/my-posted-jobs")
          Swal.fire({
            title: "Success!",
            text: "Job Updated Successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          })
        }
      })
  }
  return (
    <div className="p-5">
      <form
        onSubmit={handleUpdatedJobs}
        method="dialog"
        className="p-10 rounded-lg bg-[#31A8EB]"
      >
        <div className="mb-5">
          <label
            htmlFor="jobTitle"
            className="mb-3 block text-base font-medium text-white"
          >
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            defaultValue={jobTitle}
            id="jobTitle"
            placeholder="Job Title"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-white"
          >
            Email Address
          </label>
          <input
            disabled
            defaultValue={user?.email}
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required
          />
        </div>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-white"
              >
                Deadline
              </label>
              <input
                type="date"
                defaultValue={date}
                name="date"
                id="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="category"
                className="mb-3 block text-base font-medium text-white"
              >
                Select Category
              </label>
              <select
                id="category"
                defaultValue={category}
                name="category"
                className="border cursor-pointer border-gray-400 p-3 w-full rounded-lg focus:outline-none focus:border-blue-400"
                required
              >
                <option value="">Select Category</option>
                <option value="Web-Development">Web Development</option>
                <option value="Digital-Marketing">Digital Marketing</option>
                <option value="Graphics-Design">Graphics Design</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-5 pt-3">
          <label className="mb-5 block text-base font-semibold text-white sm:text-xl">
            Price Option
          </label>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  defaultValue={minimumPrice}
                  name="minimumPrice"
                  id="minimumPrice"
                  placeholder="Minimum Price"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <input
                  type="text"
                  name="maximumPrice"
                  defaultValue={maximumPrice}
                  id="maximumPrice"
                  placeholder="Maximum Price"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-white font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            defaultValue={description}
            name="description"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows="5"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="hover:shadow-form w-full rounded-md bg-[#31A8EB] py-3 px-8 text-center text-base font-semibold text-white border-2 outline-none"
          >
            Update JOB
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateJob
