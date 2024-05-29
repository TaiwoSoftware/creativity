"use client";
import { useState } from "react";
import Inputs from "./Auth/Inputs";

export default function StartTheProcess() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [telValue, setTelValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [serialValue, setSerialValue] = useState(0);
  const handleChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handleTelChange = (e) => {
    setTelValue(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocationValue(e.target.value);
  };

  const handleSerialChange = (e) => {
    setSerialValue(e.target.value);
  }
  return (
    <div className="p-4 mt-10 relative started">
      <div className="bg-[#000c20b0] absolute inset-0"></div>
      <div className=" mb-20 p-4 z-10 relative">
        <div className="bg-[#e9e9e9] mt-10 rounded-md py-4 px-10 w-1/2 ml-auto">
          <p className="text-2xl text-center uppercase text-[#ff5c11]">
            Transport your product
          </p>
          <h2 className="text-6xl font-thin text-center text-[#2c234d]">
            Get Started
          </h2>
          <p className="text-left mb-10 text-gray-500 font-sans">
            Leego keeps your details in a well-structured way safe enough to
            keep you going through out this website.
          </p>
          <form>
            <div className="grid grid-cols-2 gap-8 ">
              <Inputs
                type="text"
                value={nameValue}
                handleChange={handleChange}
                placeholder="Name"
              />
              <Inputs
                type="email"
                value={emailValue}
                handleChange={handleEmailChange}
                placeholder="Email"
              />
            </div>
            <Inputs
              type="tel"
              value={telValue}
              handleChange={handleTelChange}
              placeholder="Contact Number"
            />
            <div className="grid grid-cols-2 gap-8">
              <select required className=" font-sans py-3 w-full px-5 mb-4 outline-none text-slate-600 rounded-md">
                <option required>Means of transportation</option>
                <option required>Air Transportation</option>
                <option required>Land Transportation</option>
                <option required>Water Transportation</option>
              </select>
              <Inputs
                type="text"
                value={locationValue}
                handleChange={handleLocationChange}
                placeholder="Destined location"
              />
            </div>
            <Inputs
              type="number"
              value={serialValue}
              handleChange={handleSerialChange}
              placeholder="Serial Number"
            />
            <button type="submit" className="font-semibold bg-[#ff5c11] w-full text-white px-4 py-4 rounded-lg font-sans">Make a transfer</button>
          </form>
        </div>
      </div>
    </div>
  );
}
