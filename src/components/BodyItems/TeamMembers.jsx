import TeamMembersImage from "./TeamMembersImage";
import teamOne from "../images-icons/team1.png.webp";
import teamTwo from "../images-icons/team2.png.webp";
import teamThree from "../images-icons/team3.png.webp";
export default function TeamMembers() {
  return (
    <div className="mt-20">
      <h2 className="text-4xl text-center font-bold text-[#2c234d]">
        MEET OUR TEAM MEMBER
      </h2>
      <div className="mt-10 p-10 flex justify-between">
        <div>
          <TeamMembersImage
            src={teamOne}
            TeamMemberName="Williams"
            skill="Project manager"
          />
        </div>
        <div>
        <TeamMembersImage
            src={teamThree}
            TeamMemberName="John"
            skill="product designer"
          />
        </div>
        <div>
          <TeamMembersImage
            src={teamTwo}
            TeamMemberName={"David"}
            skill={"Website developer"}
          />
        </div>
      </div>
    </div>
  );
}
