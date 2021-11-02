import { HeartIcon, ShareIcon } from "@heroicons/react/outline";

const actions = [
  {
    icon: <ShareIcon className="w-4" />,
    label: "Share",
  },
  {
    icon: <HeartIcon className="w-4" />,
    label: "Like",
  },
];

const Actions = () => {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-sm font-medium text-gray-600">Actions</p>
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex space-x-2 items-center px-3 py-1 bg-gray-100 rounded-md shadow-sm"
        >
          {action.icon}
          <p className="pr-10 text-sm">{action.label}</p>
        </button>
      ))}
    </div>
  );
};

export default Actions;
