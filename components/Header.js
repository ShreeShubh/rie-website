import Link from "next/link"

const Header = () => {
  return (
    <nav className="bg-custom-blue text-white pt-7">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex flex-col items-center rtl:space-x-reverse">
          <img src="/home/logo.png" className="h-8" alt="" />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            Hosted by <span className="font-bold">EO BANGALORE</span>
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/"
                className="block py-1 px-3 text-black md:text-white relative custom-shadow-border hover:bg-gray-100 md:hover:bg-white md:hover:text-black md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Location
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-1 px-3 text-black md:text-white relative custom-shadow-border hover:bg-gray-100 md:hover:bg-white md:hover:text-black md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/my-eo-experience"
                className="block py-1 px-3 text-black md:text-white relative custom-shadow-border hover:bg-gray-100 md:hover:bg-white md:hover:text-black md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                My EO Experience
              </Link>
            </li>

            <li>
              <Link
                href="/contact-us"
                className="block py-1 px-3 text-black md:text-white relative custom-shadow-border hover:bg-gray-100 md:hover:bg-white md:hover:text-black md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </Link>
            </li>

            <li className="relative group">
              <button
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-1 px-3 text-black md:text-white hover:bg-gray-100 md:hover:bg-white md:border-0 md:hover:text-black md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Language
              </button>

              <div
                id="dropdownNavbar"
                className="absolute z-10 hidden group-hover:block font-normal border border-white divide-y divide-gray-100 shadow w-full dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarLink"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Chinese
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:font-semibold dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Japanese
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="#"
                className="block md:bg-[#EC3C70] py-1 px-3 text-black md:text-white hover:bg-gray-100 md:hover:bg-[#EC3C70] md:hover:shadow-custom dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block md:bg-[#424FA0] py-1 px-3 text-black md:text-white hover:bg-gray-100 md:hover:bg-[#424FA0] md:hover:shadow-custom dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
