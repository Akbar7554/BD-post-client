import MySingleCardPostedJobs from "../MySingleCardPostedJobs/MySingleCardPostedJobs";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Swal from "sweetalert2";
const MyPostedJobs = () => {
    useEffect(() => {
      document.title = "BD Post | My Posted Job"
    }, [])
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([])
    const url = `http://localhost:5000/jobs?email=${user.email}`
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setJobs(data)
        })
    }, [])

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          //   console.log("Deleted")
          fetch(`http://localhost:5000/jobs/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              if (data.deletedCount > 0) {
                Swal.fire(
                  "Deleted!",
                  "Your Product has been deleted.",
                  "success"
                )
                const remaining = jobs.filter(job => job._id !== id)
                setJobs(remaining)
              }
            })
        }
      })
    }

    

    return (
      <div className="p-5 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        {jobs.map((job) => (
          <MySingleCardPostedJobs
            key={job._id}
            job={job}
            handleDelete={handleDelete}
          ></MySingleCardPostedJobs>
        ))}
      </div>
    )
};

export default MyPostedJobs;