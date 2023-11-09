import { Link, useLoaderData } from "react-router-dom"
import Banner from "../Banner/Banner"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import TabData from "../../TabData/TabData"
import { useContext, useEffect, useState } from "react"
import ExtraSection1 from "../../../components/ExtraSection1/ExtraSection1"
import ExtraSection2 from "../../../components/ExtraSection2/ExtraSection2"
import { FaRegThumbsUp } from "react-icons/fa"
import { AuthContext } from "../../../providers/AuthProvider"
import Banner2 from "../Banner/Banner2"
const Home = () => {
    useEffect(() => {
        document.title = "BD Post | Home"
    },[])
  const { user } = useContext(AuthContext)
  const tabsData = useLoaderData()
  console.log(tabsData)
  const [category, setCategory] = useState(tabsData)
  const menuItems = [...new Set(tabsData.map((val) => val.category))]
  const filterItems = (cat) => {
    const newItems = tabsData.filter((newval) => newval.category === cat)
    setCategory(newItems)
  }
  const filtered1 = tabsData.filter((employee) => {
    return employee.category === "Web-Development"
  })
  const filtered2 = tabsData.filter((employee) => {
    return employee.category === "Graphics-Design"
  })
  const filtered3 = tabsData.filter((employee) => {
    return employee.category === "Digital-Marketing"
  })
    
  return (
    <div className="">
          {/* <Banner></Banner> */}
          <Banner2></Banner2>
      <div className="p-5">
        <Tabs>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Digital Marketing</Tab>
            <Tab>Graphics Design</Tab>
          </TabList>
          <TabPanel>
            <div className="grid p-5 gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {filtered1.map((category) => (
                <div
                  key={category._id}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex justify-end px-4 pt-4"></div>
                  <div className="flex flex-col items-start ml-3 pb-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {category.jobTitle}
                    </h5>
                    <h1>Job Poster Email : {category.email}</h1>
                    <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                      Deadline :{" "}
                      <span className="font-normal">{category.date}</span>
                    </h5>
                    <span className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                      Salary Range :{" "}
                      <span className="font-normal">
                        ({category.minimumPrice} - {category.maximumPrice}) $
                      </span>
                    </span>
                    <span className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                      Job Details :{" "}
                      <span className="font-normal">
                        {category.description}
                      </span>
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                      {user?.email !== category?.email ? (
                        <Link
                          to={`/job-details/${category._id}`}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <FaRegThumbsUp className="mr-1 text-lg"></FaRegThumbsUp>{" "}
                          Bid Now
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid p-5 gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {filtered2.map((category) => (
                <div
                  key={category._id}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex justify-end px-4 pt-4"></div>
                  <div className="flex flex-col items-start ml-3 pb-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {category.jobTitle}
                    </h5>
                    <h1>Job Poster Email : {category.email}</h1>
                    <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                      Deadline :{" "}
                      <span className="font-normal">{category.date}</span>
                    </h5>
                    <span className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                      Salary Range :{" "}
                      <span className="font-normal">
                        ({category.minimumPrice} - {category.maximumPrice}) $
                      </span>
                    </span>
                    <span className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                      Job Details :{" "}
                      <span className="font-normal">
                        {category.description}
                      </span>
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                      {user?.email !== category?.email ? (
                        <Link
                          to={`/job-details/${category._id}`}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <FaRegThumbsUp className="mr-1 text-lg"></FaRegThumbsUp>{" "}
                          Bid Now
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid p-5 gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {filtered3.map((category) => (
                <div
                  key={category._id}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="flex justify-end px-4 pt-4"></div>
                  <div className="flex flex-col items-start ml-3 pb-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {category.jobTitle}
                    </h5>
                    <h1>Job Poster Email : {category.email}</h1>
                    <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                      Deadline :{" "}
                      <span className="font-normal">{category.date}</span>
                    </h5>
                    <span className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                      Salary Range :{" "}
                      <span className="font-normal">
                        ({category.minimumPrice} - {category.maximumPrice}) $
                      </span>
                    </span>
                    <span className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                      Job Details :{" "}
                      <span className="font-normal">
                        {category.description}
                      </span>
                    </span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                      {user?.email !== category?.email ? (
                        <Link
                          to={`/job-details/${category._id}`}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <FaRegThumbsUp className="mr-1 text-lg"></FaRegThumbsUp>{" "}
                          Bid Now
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      {/* <div>
        <Button
          setCategory={setCategory}
          filterItems={filterItems}
          menuItems={menuItems}
        ></Button>
        <TabData category={category}></TabData>
      </div> */}
      <ExtraSection1></ExtraSection1>
      <ExtraSection2></ExtraSection2>
    </div>
  )
}

export default Home
