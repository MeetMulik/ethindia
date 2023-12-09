import { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <header className="z-100">
        <nav className="items-center pt-5 z-100 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
          <div className="flex justify-between">
            <Link to="/">
              <img
                src="https://svgshare.com/i/10Zu.svg"
                width={120}
                height={50}
                alt="Site Logo"
              />
            </Link>
            <button
              className="text-gray-500 outline-none md:hidden"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
              state ? "" : "hidden"
            }`}
          >
            <li className="order-2 pb-5 md:pb-0">
              <a
                href="javascript:void(0)"
                className=" rounded-md shadow-md text-white text-center focus:shadow-none block md:inline"
              >
                <ConnectButton />
              </a>
            </li>
            <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-500 hover:text-indigo-600">
                <Link to={"/addreport"}>Add Report</Link>
              </li>
              <li className="text-gray-500 hover:text-indigo-600">
                <Link to={"/view"}>View</Link>
              </li>
              <li className="text-gray-500 hover:text-indigo-600">
                <Link to={"/posts"}>Posts</Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
