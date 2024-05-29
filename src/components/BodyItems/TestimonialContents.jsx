import Image from "next/image";
import customerOne from "../images-icons/customerOne.webp";
import customerTwo from "../images-icons/customerTwo.webp";
export default function TestimonialContents() {
  return (
    <div className="flex">
      <div className="mt-10">
        <p className="text-2xl uppercase text-[#ff5c11]">Clients Testimonial</p>
        <h2 className="text-4xl font-bold text-white">
          What Our Clients Says!!
        </h2>
        <p className="text-white font-sans">
          This web-app has made my life easier because i&rsquo;m a transporter
          and me been able to transfer goods without leaving my house has made
          me happy and all i just have to do is just to open my laptop and login
          to leego website.
        </p>
        <Image className="rounded-full" src={customerOne} alt="customer One" />
        <Image className="rounded-full" src={customerTwo} alt="CustomerTwo" />
      </div>
      <div>
        <h2>Always Listening, Always Understanding   </h2>
      </div>
    </div>
  );
}
