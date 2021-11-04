import logo from "../../assets/craftwork_logo.png";

const Copyright = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="" className="w-5" />
      <p className="text-gray-500">Made by craftwork</p>
    </div>
  );
};

export default Copyright;
