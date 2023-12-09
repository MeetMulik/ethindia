/* eslint-disable no-unused-vars */
import { useState } from "react";
import useMyLocation from "../hooks/useMyLocation";

const AddReport = () => {
  const { location } = useMyLocation();
  console.log(location.latitude, location.longitude);

  const [reportTitle, setReportTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [locationName, setLocationName] = useState("");
  const [governmentBody, setGovernmentBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      reportTitle,
      imageUrl,
      locationName,
      governmentBody,
      message,
    });
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                Help us direct your complaint to the right authorities. Tag the
                relevant government bodies or officials related to your concern.
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  {" "}
                  @GovernmentBody{" "}
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-white p-3 shadow-lg lg:col-span-3 lg:p-10">
              <h1 className="text-center mb-4 text-xl font-bold text-black">
                Add details
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="block w-full rounded-lg border border-gray-200 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                  <label className="sr-only " htmlFor="name">
                    Report Title
                  </label>
                  <input
                    onChange={(e) => setReportTitle(e.target.value)}
                    value={reportTitle}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Title"
                    type="text"
                    id="title"
                  />
                </div>
                <div className="block w-full rounded-lg border border-gray-200 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                  <label className="sr-only " htmlFor="name">
                    Image Url
                  </label>
                  <input
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Image Url"
                    type="text"
                    id="imageurl"
                  />
                </div>
                <div>
                  <div className="">
                    <label
                      htmlFor="governmentBody"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {" "}
                      Select government body{" "}
                    </label>

                    <select
                      name="governmentBody"
                      id="governmentBody"
                      className="rounded-lg border w-full border-gray-200 mt-1.5 p-4  text-gray-700 sm:text-sm"
                      onChange={(e) => setGovernmentBody(e.target.value)}
                    >
                      <option value="">Please select</option>
                      <option value="JM">Government Body 1</option>
                      <option value="SRV">Government Body 2</option>
                      <option value="JH">Government Body 3</option>
                      <option value="BBK">Government Body 4</option>
                      <option value="AK">Government Body 5</option>
                      <option value="BG">Government Body 6</option>
                      <option value="EC">Government Body 7</option>
                    </select>
                  </div>
                </div>
                <div className="block w-full rounded-lg border border-gray-200 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white">
                  <label className="sr-only " htmlFor="location">
                    Location
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Location"
                    type="text"
                    id="location"
                  />
                </div>

                {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className=" rounded-lg border border-gray-200">
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div className="rounded-lg border border-gray-200">
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div> */}
                <div className="rounded-lg border border-gray-200">
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddReport;
