/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useMyLocation from "../hooks/useMyLocation";
import { ethers } from "ethers";
import { connectWithReportContract, connectWallet } from "../api/index";
import { Web3Storage } from "web3.storage";

const AddReport = () => {
  const { location } = useMyLocation();
  console.log(location.address);

  const [reportTitle, setReportTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [locationName, setLocationName] = useState("");
  const [governmentBody, setGovernmentBody] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setName] = useState("");
  const [account, setAccount] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contract = await connectWithReportContract();
    const connectAccount = await connectWallet();
    setAccount(connectAccount);
    console.log(connectAccount);
    const userName = await contract.getUsername(connectAccount);
    console.log(userName);
    setName(userName);

    setLoading(true);

    try {
      if (file?.type.startsWith("image/")) {
        console.log("image");
        const web3 = new Web3Storage({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU5Nzg5OUYyZjQxNEEzMTlmY2VmRTQyZjk2MDVCNGMzMjI1OTE3MUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTY2MDA5MTMxOTIsIm5hbWUiOiJXZWIzUHJvamVjdCJ9.4gVVE4KVI0MxsAPrCO9d_qbqbcS3y50nMK7bm9AGur0",
        });

        console.log(file);
        const ext = file.name.split(".").pop();
        const newFile = new File([file], file.name, { type: file.type });
        const cid = await web3.put([newFile], {
          name: file.name,
        });
        const url = `https://ipfs.io/ipfs/${cid}/${file.name}`;
      console.log(url);
      const contract = await connectWithReportContract();
      const response = await contract.addReport(
        reportTitle,
        url,
        message,
        userName,
        locationName,
        governmentBody
      );
      console.log(response);
      setLoading(false);
      setIsOpen(false);
      }  else if (file?.type.startsWith("video/")) {
        console.log("video");
        var formdata = new FormData();
        formdata.append("file", file, file.name);
        formdata.append("filename", file.name);
        console.log(formdata);

        const web3 = new Web3Storage({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU5Nzg5OUYyZjQxNEEzMTlmY2VmRTQyZjk2MDVCNGMzMjI1OTE3MUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTY2MDA5MTMxOTIsIm5hbWUiOiJXZWIzUHJvamVjdCJ9.4gVVE4KVI0MxsAPrCO9d_qbqbcS3y50nMK7bm9AGur0",
        });
        const ext = file.name.split(".").pop();
        const newFile = new File([file], file.name, { type: file.type });
        const cid = await web3.put([newFile], {
          name: file.name,
        });
        const url = `https://ipfs.io/ipfs/${cid}/${file.name}`;
        console.log(url);
        const contract = await connectWithReportContract();
        const response = await contract.addReport(
          reportTitle,
          url,
          message,
          userName,
          locationName,
          governmentBody
        );
        console.log(response);
        setLoading(false);
        setIsOpen(false);
      } else if (file?.type.startsWith("audio/")) {
        console.log("audio");
        var formdata = new FormData();
        formdata.append("file", file, file.name);
        formdata.append("filename", file.name);
        console.log(formdata);

        const web3 = new Web3Storage({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEU5Nzg5OUYyZjQxNEEzMTlmY2VmRTQyZjk2MDVCNGMzMjI1OTE3MUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTY2MDA5MTMxOTIsIm5hbWUiOiJXZWIzUHJvamVjdCJ9.4gVVE4KVI0MxsAPrCO9d_qbqbcS3y50nMK7bm9AGur0",
        });
        const ext = file.name.split(".").pop();
        const newFile = new File([file], file.name, { type: file.type });
        const cid = await web3.put([newFile], {
          name: file.name,
        });
        const url = `https://ipfs.io/ipfs/${cid}/${file.name}`;
        const contract = await connectWithReportContract();
        const response = await contract.addReport(
          reportTitle,
          url,
          message,
          userName,
          locationName,
          governmentBody
        );
        console.log(response);
        setLoading(false);
        setIsOpen(false);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
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
                    className="accent-gray-900 mt-2"
                    name="media"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
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
                    onChange={(e) => setLocationName(e.target.value)}
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
