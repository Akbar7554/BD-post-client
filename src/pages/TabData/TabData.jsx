import React from "react"
import { AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { FaRegThumbsUp } from "react-icons/fa"


const TabData = ({ category }) => {
    return (
      <div className="container">
        <div className=" grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {category.map((val) => (
            <div
              key={val._id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-start ml-3 pb-10">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {val.jobTitle}
                </h5>
                {/* <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                  Role : <span className="font-normal">{val.category}</span>
                </h5> */}
                <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                  Deadline : <span className="font-normal">{val.date}</span>
                </h5>
                <span className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                  Salary Range :{" "}
                  <span className="font-normal">
                    ({val.minimumPrice} - {val.maximumPrice}) $
                  </span>
                </span>
                <span className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                  Job Details :{" "}
                  <span className="font-normal">{val.description}</span>
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <button
                    // onClick={() =>
                    //   document.getElementById("my_modal_5").showModal()
                    // }
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <FaRegThumbsUp className="mr-1 text-lg"></FaRegThumbsUp> Bid Now
                  </button>
                  {/* <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="modal-action">
                
                <form method="dialog">
                  <button className="btn bg-[#31A8EB]">
                    <ImCross className="text-white"></ImCross>
                  </button>
                </form>
              </div>
            </div>
          </dialog> */}
                  {/* <button
                    // onClick={() => handleDelete(_id)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-100 bg-red-500 border border-gray-300 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    <AiFillDelete className="mr-1 text-lg"></AiFillDelete>Delete
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default TabData
