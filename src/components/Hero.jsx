const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container relative mx-auto flex flex-col space-y-16 px-4 py-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
        <div className="lg:flex lg:w-1/2 lg:items-center">
          <div>
            <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
              v6.0 Latest Version
            </div>
            <h1 className="mb-4 text-4xl font-black text-black ">
              Get Your Complaints
              <span className="text-blue-600 dark:text-blue-500">
                {" "}
                noticed easily
              </span>
            </h1>
            <h2 className="text-xl font-medium leading-relaxed text-gray-700 ">
              Super fast and easy to use software to power your next idea or
              build your client’s web projects. Get it today and profit.
            </h2>
            <div className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start">
              <a
                href="#_"
                className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative">Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <div className="relative mx-5 lg:w-96">
            <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 h-40 w-40 rounded-full border border-blue-200 dark:border-blue-900 lg:h-72 lg:w-72" />
            <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 h-40 w-40 rounded-full border border-blue-100 dark:border-blue-950 lg:h-72 lg:w-72" />
            <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 h-40 w-40 rounded-full border border-blue-200 dark:border-blue-900 lg:h-72 lg:w-72" />
            <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 h-40 w-40 rounded-full border border-blue-100 dark:border-blue-950 lg:h-72 lg:w-72" />
            <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 dark:bg-gray-800" />
            <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-blue-800 bg-opacity-75 shadow-inner dark:bg-blue-900 dark:bg-opacity-75" />
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/complaint-resolution-specialist-handling-customer-complaints-and-working-to-resolve-them-8978982-7328703.png"
              className="relative mx-auto rounded-lg shadow-lg"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
