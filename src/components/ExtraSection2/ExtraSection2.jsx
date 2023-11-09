import Banner06 from "../../assets/banner6.jpg"
const ExtraSection2 = () => {
    return (
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={Banner06}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Develop Yourself for better career
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Be a member of a family of more than one million job seekers and
            apply to any of the 3000+ live jobs
          </p>
          <a
            href="#"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Latest Jobs
          </a>
        </div>
      </div>
    )
};

export default ExtraSection2;