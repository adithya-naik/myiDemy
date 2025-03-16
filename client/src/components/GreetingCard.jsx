import { Smile } from "lucide-react";

const GreetingCard = ({ name = "User" }) => {
  return (
    <div className="flex items-center py-2">
      <div className="py-2 rounded-lg flex items-center gap-2 max-w-md w-full">
        <Smile className="text-gray-500" size={24} />
        <h1 className="text-lg sm:text-xl text-gray-900 font-medium">
          Hello, <span className="text-red-500">{name.charAt(0).toUpperCase() + name.slice(1)}</span>! Welcome to our Website
        </h1>
      </div>
    </div>
  );
};

export default GreetingCard;