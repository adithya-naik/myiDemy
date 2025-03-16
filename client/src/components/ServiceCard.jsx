// import { Code, BarChart, Palette, Megaphone, ShieldAlert, Cloud, BrainCircuit, Smartphone, Server, Blocks, Gamepad, PenTool, ShoppingCart, PieChart, TrendingUp, Camera, Ruler, Music, HeartPulse, Globe } from "lucide-react";

// const iconMap = {
//   Code, BarChart, Palette, Megaphone, ShieldAlert, Cloud, BrainCircuit, Smartphone, Server, Blocks, Gamepad, PenTool, ShoppingCart, PieChart, TrendingUp, Camera, Ruler, Music, HeartPulse, Globe
// };

// const ServiceCard = ({ service, description, price, icon, provider }) => {
//   const IconComponent = iconMap[icon] || Code; // Default to Code icon if not found

//   return (
//     <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-lg flex items-start gap-4 transition-transform transform hover:scale-105">
//       <div className="p-3 bg-gray-100 rounded-xl flex items-center justify-center">
//         <IconComponent size={36} className="text-blue-600" />
//       </div>
//       <div className="flex-1">
//         <h3 className="text-lg font-semibold text-gray-800">{service}</h3>
//         <p className="text-sm text-gray-600 mt-1">{description}</p>
//         <div className="mt-3 flex justify-between items-center">
//           <span className="text-lg font-bold text-blue-600">{price}</span>
//           <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition">Enroll Now</button>
//         </div>
//         <div className="mt-4 flex items-center gap-3">
//           <img src={""} alt={provider} className="w-10 h-10 rounded-full border border-gray-300" />
//           <span className="text-sm font-medium text-gray-700">{provider}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;
import React from "react";
import logo from "../assets/myidemy-logo.png";
import * as LucideIcons from "lucide-react";

const ServiceCard = ({ service, description, price, icon, provider }) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.Code;

  return (
    <div className="group relative p-6 cursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200">
      {/* Top section with icon and service name */}
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-blue-800 text-white rounded-lg flex items-center justify-center">
          <IconComponent size={26} className="group-hover:scale-110 transition-transform duration-300" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{service}</h3>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      
      {/* Bottom section with provider and price */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        {/* Provider image and name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
            <img
              src={logo}
              alt={provider}
              className="w-full h-full object-cover"
            />
          </div>
          {/* <span className="text-sm font-medium text-gray-700">{provider}</span> */}
        </div>

        {/* Price and enroll button - now with more spacing */}
        <div className="flex items-center gap-4">
          <span className="text-lg font-bold text-blue-600">{price}</span>
          <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-300">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;