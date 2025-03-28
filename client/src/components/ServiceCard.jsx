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
import * as LucideIcons from "lucide-react";
import { Star, BookOpen, Clock, TrendingUp } from "lucide-react";

const ServiceCard = ({ 
  service, 
  description, 
  price, 
  icon, 
  provider,
  modeOfLearning,
  overallRating,
  totalReviews,
  skillLevel,
  duration
}) => {
  const IconComponent = LucideIcons[icon] || LucideIcons.Code;

  return (
    <div className="bg-white border cursor-pointer border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      {/* Header with Icon and Service Name */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 flex items-center space-x-4">
        <div className="bg-white/20 p-3 rounded-lg">
          <IconComponent size={28} className="text-white" />
        </div>
        <h3 className="text-xl font-bold text-white truncate">{service}</h3>
      </div>

      {/* Content Area */}
      <div className="p-5">
        {/* Description */}
        <p className="text-gray-600 mb-4 min-h-[72px] line-clamp-3">{description}</p>

        {/* Service Details Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {modeOfLearning && (
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <BookOpen size={16} className="text-blue-500" />
              <span>{modeOfLearning}</span>
            </div>
          )}
          {skillLevel && (
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <TrendingUp size={16} className="text-green-500" />
              <span>{skillLevel}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <Clock size={16} className="text-purple-500" />
              <span>{duration}</span>
            </div>
          )}
        </div>

        {/* Rating Section */}
        {overallRating && (
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className={`${i < Math.round(overallRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({overallRating.toFixed(1)}) • {totalReviews} Reviews
            </span>
          </div>
        )}

        {/* Bottom Section */}
        <div className="flex items-center justify-between border-t pt-4 mt-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-800 font-bold">{provider.charAt(0)}</span>
            </div>
            <span className="text-sm font-medium text-gray-700">{provider}</span>
          </div>
          <div className="text-lg font-bold text-blue-600">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;