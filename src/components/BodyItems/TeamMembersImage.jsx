import Image from "next/image";

export default function TeamMembersImage({src, TeamMemberName, skill}) {
  return (
    <div>
    <Image 
        src={src}
        alt="Team members image"
    />
        <div className="bg-[#cbd6f0a3] p-2 text-center transform: translate-y-[-4.1rem]">
            <p className="font-sans text-[#2c234d]">{TeamMemberName}</p>
            <p className="font-sans text-[#2c234d]">{skill}</p>
        </div>
    </div>
  )
}
