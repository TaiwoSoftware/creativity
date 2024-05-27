import Image from "next/image";
import engineerImage from "../images-icons/about2.png.webp";
export default function AboutLeego() {
  return (
    <div className="mt-20 p-4 grid grid-cols-2 w-full gap-[24rem]">
      <div className="w-full">
        <p className=" text-2xl uppercase text-[#ff5c11] ">About Leego</p>
        <h2 className="text-6xl font-bold text-[#2c234d]">
          Safe Leego & Transport <br /> solutions that saves our <br /> valuable
          time!!
        </h2>
        <div className="w-[45rem]">
          <p className="font-extralight text-justify font-sans w-full text-2xl mt-5">
            Leego is a product with flexible, convenient and reliable service of
            rendering your product to the right place and telling you how long
            it would last to get to the destined location and if anything comes
            up along he line we are ready to notify you concerning the product.
            <br />
            This product is a developed with a mindset of improving the means of transportation of goods in the transportation field. 
            <br />
            This product is a portfolio project for Taiwo Akerele which he is planning on pushing it to the market with the aid of improving himself in the frontend development field.  {" "}
          </p>
        </div>
      </div>
      <div>
        <Image src={engineerImage} alt="engineer image" />
      </div>
    </div>
  );
}
