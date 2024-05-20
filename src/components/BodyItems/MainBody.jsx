import CircleRings from "./CircleRings";
import CustomHeaderOne from "./CustomHeaderOne";

export default function MainBody() {
  return (
    <>
      <div className="relative p-4 background">
        <div className=" bg-[#000c20b0] absolute inset-0"></div>
        <div className="mt-32 p-4 z-10 relative">
          <CustomHeaderOne />
        </div>
        <CircleRings ringsStyles="border border-[#ff5c11] h-32 w-32 absolute border-4 rounded-full" />
        <CircleRings />
      </div>
    </>
  );
}
