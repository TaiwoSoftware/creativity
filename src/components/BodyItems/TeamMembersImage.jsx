import Image from "next/image";

export default function TeamMembersImage({src, TeamMemberName, skill}) {
  return (
    <div>
    <Image 
        src={src}
        alt="Team members image"
    />
        <div>
            <p>{TeamMemberName}</p>
            <p>{skill}</p>
        </div>
    </div>
  )
}
