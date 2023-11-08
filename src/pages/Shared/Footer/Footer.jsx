import logo from "../../../assets/logo.png"
import { FaFacebook, FaYoutube } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              <img className="w-24" src={logo} alt="" />
            </span>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              BD Post, the world`s largest marketplace for digital services
              offers both buyers and sellers a digitally streamlined
              transactional platform.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              The unique term for a service offered by a seller on Bd Post is
              called a Bid. When creating Bids, sellers can See their starting
              price point.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-lg font-bold tracking-wide text-[#31A8EB]">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +880 1850-123-502
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              BD@Post.mail
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Street 19 Banani , Dhaka
            </a>
          </div>
        </div>
        <div>
          <span className="text-lg font-bold text-center tracking-wide text-[#31A8EB]">
            Social
          </span>
          <div className="flex items-center gap-2 mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaFacebook className="text-3xl text-[#3b5998]"></FaFacebook>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <AiFillInstagram className="text-4xl text-[#F58529]"></AiFillInstagram>
            </a>
            <a
              href="/"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <FaYoutube className="text-4xl text-[#E4405F]"></FaYoutube>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Largest Marketplace Site in Bangladesh.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2023 BD Inc. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
