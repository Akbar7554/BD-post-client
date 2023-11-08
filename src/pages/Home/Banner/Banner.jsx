
import { Link } from "react-router-dom";
import Banner01 from "../../../assets/banner1.jpg"
import Banner02 from "../../../assets/banner2.jpg"
import Banner03 from "../../../assets/banner3.jpg"
import Banner04 from "../../../assets/banner4.jpg"
import Banner05 from "../../../assets/banner5.jpg"
import Banner06 from "../../../assets/banner6.jpg"
const Banner = () => {
    return (
      <div
        id="default-carousel"
        className="relative w-full p-2"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-[600px]">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Banner01}
              className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Banner02}
              className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Banner03}
              className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Banner04}
              className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Banner05}
              className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={Banner06}
              className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 6"
            data-carousel-slide-to="4"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-bg-primary dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-bg-primary dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
        <div
          type="button"
          className="absolute md:px-20 top-10 left-14 right-0 md:top-36 md:left-16 z-30 w-[200px] md:w-[600px] lg:w-[800px] cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <h2 className="text-center text-md md:mb-8 font-bold text-bg-secondary md:text-6xl">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-center text-xs md:text-xl md:mb-20 text-bg-secondary">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex items-center justify-center md:justify-end gap-5 md:gap-10">
            <Link className="hover:border-2 text-xs text-center hover:border-bg-primary text-white bg-bg-primary font-semibold  rounded-md text-md px-2 py-2 md:text-lg md:px-5 md:py-3 hover:text-bg-primary hover:bg-bg-secondary">
              Discover More
            </Link>
            <Link className="border-2 text-xs text-white text-center font-semibold border-bg-primary rounded-md text-md px-2 py-2 md:text-lg md:px-5 md:py-3 hover:text-white hover:bg-bg-primary ">
              Latest Project
            </Link>
          </div>
        </div>
      </div>
    )
};

export default Banner;