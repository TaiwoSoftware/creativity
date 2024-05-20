import CircleRings from "./CircleRings";
import CustomHeaderOne from "./CustomHeaderOne";

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
            <CircleRings ringsStyles="border border-[#ff5c11] h-36 top-24 right-[12rem] w-36 absolute border-4 rounded-full" />
            <CircleRings ringsStyles="border border-[#ff5c11] h-36 top-[9rem] right-[6rem] w-36 absolute border-4 rounded-full" />
            <CircleRings ringsStyles="border border-[#ff5c11] h-36 top-48  right-[12rem]  w-36 absolute border-4 rounded-full   " />
            <CircleRings ringsStyles="border border-[#ff5c11] h-36 top-36 right-[18rem] w-36 absolute border-4 rounded-full  " />
          </div>
        </div>
      </div>
    </>
  );
}
