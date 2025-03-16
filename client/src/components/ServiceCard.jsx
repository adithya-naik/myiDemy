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





// last best commit


// import React from "react";
// import logo from "../assets/myidemy-logo.png";
// import * as LucideIcons from "lucide-react";

// const ServiceCard = ({ service, description, price, icon, provider }) => {
//   const IconComponent = LucideIcons[icon] || LucideIcons.Code;

//   return (
//     <div className="group relative p-6 cursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-200">
//       {/* Top section with icon and service name */}
//       <div className="flex items-center gap-4 mb-4">
//         <div className="p-3 bg-blue-800 text-white rounded-lg flex items-center justify-center">
//           <IconComponent size={26} className="group-hover:scale-110 transition-transform duration-300" />
//         </div>
//         <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{service}</h3>
//       </div>
      
//       {/* Description */}
//       <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      
//       {/* Bottom section with provider and price */}
//       <div className="flex items-center justify-between pt-4 border-t border-gray-200">
//         {/* Provider image and name */}
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
//             <img
//               src={logo}
//               alt={provider}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           {/* <span className="text-sm font-medium text-gray-700">{provider}</span> */}
//         </div>

//         {/* Price and enroll button - now with more spacing */}
//         <div className="flex items-center gap-4">
//           <span className="text-lg font-bold text-blue-600">{price}</span>
//           <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-300">
//             Enroll
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;





// new logic


// import React from "react";

// const ServiceCard = ({ service, onView, onEnroll }) => {
//   return (
//     <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-900">{service.service}</h3>
//         <p className="text-gray-600 mb-4">{service.description}</p>
//         <p className="font-medium text-gray-800">Price: {service.price}</p>
//         <div className="flex justify-between items-center mt-4">
//           <button
//             onClick={onView}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded"
//           >
//             View Course
//           </button>
//           <button
//             onClick={onEnroll}
//             className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded"
//           >
//             Enroll Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;




// enhanced one



import React from "react";
import * as LucideIcons from "lucide-react";
import { Star, Clock, Award, User } from "lucide-react";

const ServiceCard = ({ service, onView, onEnroll }) => {
  // Function to dynamically get icon based on string name
  const getIcon = (iconName) => {
    // Check if the icon exists in LucideIcons
    const IconComponent = LucideIcons[iconName] || LucideIcons.BookOpen;
    return <IconComponent size={26} className="group-hover:scale-110 transition-transform duration-300" />;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        {/* Note: Image rendering is commented out as in your example */}
        {/* {service.images && service.images.length > 0 && (
          <img 
            src={service.images[0]} 
            alt={service.service} 
            className="w-full h-48 object-cover"
          />
        )} */}
        {service.featured && (
          <div className="absolute top-0 right-0 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center mb-2 group">
          <div className="bg-blue-100 p-2 rounded-full">
            {getIcon(service.icon)}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 ml-2">
            {service.service}
          </h3>
        </div>

        <p className="text-gray-600 mt-3 mb-4 line-clamp-2">
          {service.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-blue-600">
            {service.price}
          </div>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-semibold">{service.overallRating} ({service.totalReviews})</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="bg-gray-100 rounded-full px-3 py-1 text-xs flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {service.duration}
          </div>
          <div className="bg-gray-100 rounded-full px-3 py-1 text-xs flex items-center">
            <Award className="h-3 w-3 mr-1" />
            {service.skillLevel}
          </div>
          <div className="bg-gray-100 rounded-full px-3 py-1 text-xs flex items-center">
            <User className="h-3 w-3 mr-1" />
            {service.modeOfLearning}
          </div>
        </div>

        {service.instructor && (
          <div className="border-t border-gray-200 pt-3 mb-4">
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center">
                <User className="h-4 w-4 text-gray-500" />
              </div>
              <div className="ml-2">
                <p className="text-sm font-semibold">{service.instructor.name}</p>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs text-gray-500 ml-1">{service.instructor.rating}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex space-x-3 mt-4">
          <button
            onClick={onView}
            className="flex-1 bg-white border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
          >
            View Course
          </button>
          <button
            onClick={onEnroll}
            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;