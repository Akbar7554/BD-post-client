import Banner05 from "../../assets/banner5.jpg"
const ExtraSection1 = () => {
  return (
    <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            New Job
            <span className="font-bold text-blue-500">vacancies</span>
            {/* <span className="text-xl font-semibold rounded-full text-blueGray-500">
              2.0
            </span> */}
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Browse BDPost.com`s new job listings including online jobs,
            government jobs, part time, contractual and full time jobs.
          </p>
          <div className="mt-5 sm:flex md:mt-8">
            <div className="rounded-md shadow">
              <a
                href=""
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                Getting started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href=""
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                Contribute
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <img src={Banner05} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtraSection1
