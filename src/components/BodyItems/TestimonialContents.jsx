"use client";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import customerThree from "../images-icons/head.png";
import ClientDetails from "./ClientDetails";
import { useState } from "react";
import customerTwo from "../images-icons/customerTwo.webp";
export default function TestimonialContents() {
  const [isClickedForward, setIsClickedForward] = useState("false");
  const handleBackwardClick = () => { 
    setIsClickedForward(false)
  }
  const handleClickedForward = () => {
    setIsClickedForward(!isClickedForward);
  };
  return (
    <div className="flex justify-between">
      <div className="mt-10 ml-10">
        <p className="text-2xl uppercase text-[#ff5c11]">Clients Testimonial</p>
        <h2 className="text-4xl font-bold text-white">
          What Our Clients Says!!
        </h2>
        {isClickedForward === true ? (
          <>
            <ClientDetails
              testimony={
                <>
                  <p>
                    This web-app has made my life easier because i wanted to transfer a surprise
                  </p>
                  <p>
                    package to one of best friend because it was her birthday and i was not at home
                  </p>
                  <p>
                    {" "}
                    to use transfer the product, i told my friend about it and she introduced me to leego
                  </p>
                  <p>all i did was to just login to leego website and transfer my goods</p>
                </>
              }
              imgSrc={customerTwo}
              clientName={"Elizabeth Jacobs"}
              clientExpertise={"HR"}
            />
          </>
        ) : (
          <>
            <ClientDetails
              testimony={
                <>
                  <p>
                    This web-app has made my life easier because i&rsquo;m a
                    transporter
                  </p>
                  <p>
                    and me been able to transfer goods without leaving my house
                    has made
                  </p>
                  <p>
                    {" "}
                    me happy and all i just have to do is just to open my laptop
                    and
                  </p>
                  <p>login to leego website</p>
                </>
              }
              imgSrc={customerThree}
              clientName={"Joshua David"}
              clientExpertise={"Transporter"}
            />
          </>
        )}
        <div className="ml-[28rem] mt-[-5rem]">
          <button className="border p-4 rounded-l-md border-[#c3c3c3]" onClick={handleBackwardClick}>
            <BsArrowLeft className="text-[#9e9e9e] " />
          </button>
          <button
            className="border p-4 ml-4 rounded-r-md border-[#9e9e9e]"
            onClick={handleClickedForward}
          >
            <BsArrowRight className="text-[#9e9e9e]" />
          </button>
        </div>
      </div>
      <div className="bg-white w-[20rem] mb-[4rem] p-10 mr-10 rounded-lg h-[20rem] mt-20">
        <h2 className="text-center font-bold text-[#0a285d] text-3xl">
          Always Listening, Always Understanding{" "}
        </h2>
        <input
          type="text"
          className="font-sans rounded-md w-full text-gray-500 border outline-none mt-10 p-3"
          readOnly
          value="Incoterms"
        />
        <button className="bg-[#ff5c11] text-white mt-5 w-full p-3 font-sans rounded-md">
          Request for a demo
        </button>
      </div>
    </div>
  );
}
