const Hero = () => {
  return (
    <div className="h-screen">
      <div className="container relative mx-auto flex flex-col space-y-16 px-4 py-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
        <div className="lg:flex lg:w-1/2 lg:items-center">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
              Optimize your website for
              <span className="text-indigo-600"> Search engine</span>
            </h1>
            <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
            <div>
              <p className="text-gray-800 py-3">
                Subscribe to our newsletter and we will save your time
              </p>
              <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="text-gray-500 border outline-none p-3 rounded-md w-full sm:w-72"
                />
                <button className="outline-none bg-gray-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-between">
          <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <div className="relative mx-5 lg:w-96">
              <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 h-40 w-40 rounded-full border border-blue-200 dark:border-blue-900 lg:h-72 lg:w-72" />
              <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 h-40 w-40 rounded-full border border-blue-100 dark:border-blue-950 lg:h-72 lg:w-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 h-40 w-40 rounded-full border border-blue-200 dark:border-blue-900 lg:h-72 lg:w-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 h-40 w-40 rounded-full border border-blue-100 dark:border-blue-950 lg:h-72 lg:w-72" />
              <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200 dark:bg-gray-800" />
              <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-blue-800 bg-opacity-75 shadow-inner dark:bg-blue-900 dark:bg-opacity-75" />
              <img
                src="https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg"
                className="relative mx-auto rounded-lg shadow-lg"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
