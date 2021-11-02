import {
  BadgeCheckIcon,
  MailIcon,
  PhoneIcon,
  XIcon,
} from "@heroicons/react/outline";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Member as iMember } from "../../util/memberInterface";

const MemberDetail = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  const [details, setDetails] = useState<iMember>();

  useImperativeHandle(ref, () => ({
    openMemberDetail(details: iMember) {
      setDetails(details);
      setToggle(true);
    },
  }));

  const handleClose = () => {
    setToggle(false);
  };
  return toggle ? (
    <div
      className="absolute flex items-start justify-between space-x-3 bg-white rounded-md shadow-md right-0 top-0 w-max p-3 border-2 border-gray-100 border-solid "
      // onMouseLeave={handleClose}
    >
      <img
        src={details?.image}
        alt=""
        className=" w-16 h-16 object-cover rounded-full"
      />
      {details && (
        <div>
          <p className="font-medium">{details.name}</p>
          <p className="text-sm text-gray-600">{details.email}</p>
          <MailIcon className="w-5 text-gray-400 inline mr-2 mt-1 cursor-pointer" />
          <PhoneIcon className="w-5 text-gray-400 inline mr-2 mt-1 cursor-pointer" />
          <BadgeCheckIcon className="w-5 text-gray-400 inline mr-2 mt-1 cursor-pointer" />
        </div>
      )}
      <XIcon
        className="w-5 text-gray-400 inline mr-2 mt-1 cursor-pointer"
        onClick={handleClose}
      />
    </div>
  ) : (
    <></>
  );
});
export default MemberDetail;
