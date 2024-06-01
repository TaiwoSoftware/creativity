import Image from "next/image";
export default function ClientDetails({
  testimony,
  imgSrc,
  clientName,
  clientExpertise,
}) {
  return (
    <>
      <div className="text-[#cdcdcd] mt-10 font-sans">{testimony}</div>
      <div className="flex gap-2 items-center">
        <Image
          className="rounded-full w-20 mt-10"
          src={imgSrc}
          alt="customer One"
        />
        <div className="mt-5">
          <h4 className=" font-sans text-[#dddddd]">{clientName}</h4>
          <p className="text-[#dddddd] mt-[-.3rem] font-sans">
            {clientExpertise}
          </p>
        </div>
      </div>
    </>
  );
}
