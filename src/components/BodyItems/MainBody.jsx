import AboutLeego from "./AboutLeego";
import CardDetails from "./CardDetails";
import CircleRings from "./CircleRings";
import CustomHeaderOne from "./CustomHeaderOne";
import FirstSection from "./FirstSection";
import { FiTruck } from "react-icons/fi";
import { BsAirplane } from "react-icons/bs";
import { LuShip } from "react-icons/lu";
import StartTheProcess from "./StartTheProcess";
import TeamMembers from "./TeamMembers";
import Testimonials from "./Testimonials";
export default function MainBody() {
  return (
    <>
      <div>
        <div className="relative p-4 background ">
          <div className=" bg-[#000c20b0] absolute inset-0"></div>
          <div className="mt-48 mb-20 p-4 z-10 relative">
            <CustomHeaderOne />
          </div>
          <div>
            <CircleRings ringsStyles="border animate-bounce border-[#ff5c11] h-36 top-24 right-[12rem] w-36 absolute border-4 rounded-full" />
            <CircleRings ringsStyles="border animate-bounce border-[#ff5c11] h-36 top-[9rem] right-[6rem] w-36 absolute border-4 rounded-full" />
            <CircleRings ringsStyles="border animate-bounce border-[#ff5c11] h-36 top-48  right-[12rem]  w-36 absolute border-4 rounded-full   " />
            <CircleRings ringsStyles="border animate-bounce border-[#ff5c11] h-36 top-36 right-[18rem] w-36 absolute border-4 rounded-full  " />
          </div>
        </div>
        <FirstSection />
        <div className="grid grid-cols-3 gap-4 p-4">
          <CardDetails
            content={
              <>
                <FiTruck className="text-6xl mx-auto mb-5 text-[#ff5c11] " />
                <h2 className="mt-2 text-3xl font-bold text-[#2c234d] mb-3 text-center">
                  Land Transportaion
                </h2>
                <p className="font-sans text-center   text-gray-400 mb-14">
                  We tend to move the product through by road and ready to
                  assure you that it is safe. It is our priority to make your
                  goods save and easier for you transport them.
                </p>
              </>
            }
          />
          <CardDetails
            content={
              <>
                <LuShip className="text-6xl mx-auto mb-5 text-[#ff5c11] " />
                <h2 className="mt-2 text-3xl font-bold text-[#2c234d] mb-3 text-center">
                  Ship Transport
                </h2>
                <p className="font-sans text-center  text-gray-400 mb-14">
                  We tend to move the product through the water and ready to
                  assure you that it is safe. It is our priority to make your
                  goods save and easier for you transport them.
                </p>
              </>
            }
          />
          <CardDetails
            content={
              <>
                <BsAirplane className="text-6xl mx-auto mb-5 text-[#ff5c11] " />
                <h2 className="mt-2 text-3xl font-bold text-[#2c234d] mb-3 text-center">
                  Air Transport
                </h2>
                <p className="font-sans text-center  text-gray-400 mb-14">
                  We believe transporting it through the airplanes and ready to
                  assure you that it is safe. It is our priority to make your
                  goods save and easier for you transport them.
                </p>
              </>
            }
          />
        </div>
        <AboutLeego />
        <StartTheProcess />
        <div className="mt-10">
          <TeamMembers />
        </div>
        <Testimonials />
      </div>
    </>
  );
}
