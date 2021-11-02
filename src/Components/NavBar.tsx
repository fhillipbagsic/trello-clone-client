import logo from "../assets/Logo.png";
import boardLogo from "../assets/trello-mark-blue.png";
import userLogo from "../assets/User.png";
import {
  BellIcon,
  ExclamationCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

const NavBar = () => {
  return (
    <nav className="px-6 py-3 flex justify-between border-b-2 border-gray-100">
      {/* left */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="logo" />
        <div className="h-8 w-px bg-gray-200" />
        <img src={boardLogo} alt="board logo" />
        <p className="">Boards</p>
        <div className="h-8 w-px bg-gray-200" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100 rounded-2xl w-2/3 px-5 py-1 hidden md:block"
        />
      </div>
      {/* right */}
      <div className="flex space-x-4">
        <button>
          <PlusCircleIcon className="w-5 text-gray-400" />
        </button>
        <button>
          <ExclamationCircleIcon className="w-5 text-gray-400" />
        </button>
        <button>
          <BellIcon className="w-5 text-gray-400" />
        </button>
        <button>
          <img src={userLogo} alt="user" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
