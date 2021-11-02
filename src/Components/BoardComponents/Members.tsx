import { Member } from "../../util/memberInterface";

interface iProps {
  members: Member[];
}

const Members = ({ members }: iProps) => {
  return (
    <div className="flex flex-1">
      {members.map((member, index) => {
        return (
          <img
            key={index}
            src={member.image}
            alt="member"
            className={`w-8 h-8 rounded-full object-cover ${index && "-ml-3"}`}
          />
        );
      })}
    </div>
  );
};

export default Members;
