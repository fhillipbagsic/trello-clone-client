import { PlusCircleIcon, HeartIcon } from "@heroicons/react/solid";
import { Like } from "../../util/boardInterface";
import { Member } from "../../util/memberInterface";

interface iProps {
  members: Member[];
  likes: Like[] | undefined;
}

const Members = ({ members, likes }: iProps) => {
  return (
    <div className="flex flex-col ml-10 space-y-2">
      <p className="text-sm font-medium text-gray-600">Members</p>
      <div className="flex items-center space-x-2">
        {members.map((member, index) => {
          return (
            <div className="relative" key={index}>
              <img
                key={index}
                src={member.image}
                alt={member.name}
                className="w-9 h-9 rounded-full object-cover shadow-md"
              />
              {likes?.includes(member.name) && (
                <HeartIcon className="absolute bottom-0 right-0 text-red-500 w-4 drop-shadow-md" />
              )}
            </div>
          );
        })}
        <button>
          <PlusCircleIcon className="w-10" />
        </button>
      </div>
    </div>
  );
};

export default Members;
