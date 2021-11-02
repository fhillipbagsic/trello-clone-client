import { useRef } from "react";
import { useAppSelector } from "../../store/hooks";
import { Member } from "../../util/memberInterface";
import MemberDetail from "./MemberDetail";

interface RefObject {
  openMemberDetail: (details: Member) => void;
}
const MembersStack = () => {
  const members = useAppSelector((state) => state.members.value);
  const detailRef = useRef<RefObject>(null);

  const handleMemberClick = (email: string) => {
    const member = members.find((member) => member.email === email) as Member;
    detailRef.current?.openMemberDetail(member);
  };

  return (
    <div className="flex relative">
      <div className="flex flex-1">
        {members.map((member, index) => {
          return (
            <img
              key={index}
              src={member.image}
              alt="member"
              className={`w-8 h-8 rounded-full object-cover cursor-pointer ${
                index && "-ml-1"
              }`}
              onClick={() => handleMemberClick(member.email)}
            />
          );
        })}
      </div>
      <MemberDetail ref={detailRef} />
    </div>
  );
};

export default MembersStack;
