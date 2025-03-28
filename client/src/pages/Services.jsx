// import React, { useState } from "react";
// import { BookOpen, Code, Database, Server, Smartphone, Monitor, ChevronRight, Filter } from "lucide-react";

// export default function Services() {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const categories = [
//     { id: "all", name: "All Courses" },
//     { id: "webdev", name: "Web Development" },
//     { id: "datascience", name: "Data Science" },
//     { id: "mobile", name: "Mobile Development" },
//     { id: "cloud", name: "Cloud Computing" },
//     { id: "career", name: "Career Services" }
//   ];

//   const services = [
//     {
//       id: 1,
//       title: "Full Stack Web Development Bootcamp",
//       category: "webdev",
//       icon: <Code className="w-8 h-8" />,
//       color: "bg-blue-100 text-blue-600",
//       description: "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB in this comprehensive 14-week bootcamp. Build 5 real-world projects for your portfolio.",
//       features: ["Live instructor sessions", "24/7 mentor support", "Industry-aligned curriculum", "Career coaching"],
//       duration: "14 weeks",
//       students: "12,450+",
//       rating: 4.8
//     },
//     {
//       id: 2,
//       title: "Data Science & Machine Learning Immersive",
//       category: "datascience",
//       icon: <Database className="w-8 h-8" />,
//       color: "bg-green-100 text-green-600",
//       description: "From data analysis to deep learning. Learn Python, Pandas, NumPy, Scikit-Learn, TensorFlow, and visualization tools to become a data science professional.",
//       features: ["70+ hands-on exercises", "Capstone project", "Real-world datasets", "AI ethics training"],
//       duration: "16 weeks",
//       students: "8,320+",
//       rating: 4.9
//     },
//     {
//       id: 3,
//       title: "iOS & Android Development",
//       category: "mobile",
//       icon: <Smartphone className="w-8 h-8" />,
//       color: "bg-purple-100 text-purple-600",
//       description: "Build native mobile applications for both major platforms. Learn Swift, Kotlin, and cross-platform development with React Native or Flutter.",
//       features: ["App Store submission guide", "UI/UX design principles", "Backend integration", "Monetization strategies"],
//       duration: "12 weeks",
//       students: "6,780+",
//       rating: 4.7
//     },
//     {
//       id: 4,
//       title: "AWS Cloud Architect Certification",
//       category: "cloud",
//       icon: <Server className="w-8 h-8" />,
//       color: "bg-yellow-100 text-yellow-600",
//       description: "Prepare for AWS certification with hands-on labs and expert instruction. Learn architecture best practices, security, and cost optimization.",
//       features: ["Practice exams", "Cloud labs environment", "Architecture reviews", "Certification voucher"],
//       duration: "8 weeks",
//       students: "5,430+",
//       rating: 4.8
//     },
//     {
//       id: 5,
//       title: "Front-End Developer Path",
//       category: "webdev",
//       icon: <Monitor className="w-8 h-8" />,
//       color: "bg-pink-100 text-pink-600",
//       description: "Specialize in creating beautiful, responsive user interfaces with modern frameworks. Master CSS, JavaScript, React, Vue, and web animation.",
//       features: ["Design system creation", "Performance optimization", "Accessibility training", "Portfolio reviews"],
//       duration: "10 weeks",
//       students: "9,870+",
//       rating: 4.7
//     },
//     {
//       id: 6,
//       title: "Career Accelerator Program",
//       category: "career",
//       icon: <BookOpen className="w-8 h-8" />,
//       color: "bg-indigo-100 text-indigo-600",
//       description: "Supercharge your job search with 1:1 career coaching, resume reviews, interview preparation, and networking opportunities in the tech industry.",
//       features: ["Mock interviews", "Portfolio refinement", "Salary negotiation training", "Industry connections"],
//       duration: "4 weeks",
//       students: "3,250+",
//       rating: 4.9
//     }
//   ];

//   const filteredServices = activeCategory === "all"
//     ? services
//     : services.filter(service => service.category === activeCategory);

//   return (
//     <section className="bg-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
//         <div className="container mx-auto px-4 py-20">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Learning Pathways</h1>
//             <p className="text-xl opacity-90 mb-8">
//               Industry-leading courses designed to transform beginners into professionals and help experienced developers level up
//             </p>
//             <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-colors">
//               Find Your Path
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Filter Section */}
//       <div className="container mx-auto px-4 py-8 border-b">
//         <div className="flex items-center mb-4">
//           <Filter className="w-5 h-5 mr-2 text-gray-600" />
//           <h2 className="text-lg font-semibold text-gray-900">Filter Courses</h2>
//         </div>
//         <div className="flex flex-wrap gap-2">
//           {categories.map(category => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                 activeCategory === category.id
//                   ? "bg-indigo-600 text-white"
//                   : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Services Grid */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 gri gap-8">
//           {filteredServices.map(service => (
//             <div key={service.id} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className={`${service.color} p-3 rounded-lg mr-4`}>
//                     {service.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
//                 </div>
//                 <p className="text-gray-600 mb-6">{service.description}</p>
//                 <div className="grid grid-cols-3 gap-4 mb-6">
//                   <div className="flex flex-col">
//                     <span className="text-sm text-gray-500">Duration</span>
//                     <span className="font-medium">{service.duration}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-sm text-gray-500">Enrolled</span>
//                     <span className="font-medium">{service.students}</span>
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-sm text-gray-500">Rating</span>
//                     <div className="flex items-center">
//                       <span className="font-medium mr-1">{service.rating}</span>
//                       <div className="flex text-yellow-400">
//                         {[...Array(5)].map((_, i) => (
//                           <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
//                             <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
//                           </svg>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mb-6">
//                   <h4 className="font-medium text-gray-900 mb-2">What you'll get:</h4>
//                   <ul className="grid grid-cols-2 gap-2">
//                     {service.features.map((feature, index) => (
//                       <li key={index} className="flex items-start">
//                         <ChevronRight className="w-4 h-4 text-green-500 mt-1 mr-1 flex-shrink-0" />
//                         <span className="text-sm text-gray-600">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="flex justify-between items-center pt-4 border-t">
//                   <button className="text-indigo-600 font-medium hover:text-indigo-700">
//                     See full curriculum
//                   </button>
//                   <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded">
//                     Enroll Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Learning Format */}
//       <div className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Flexible Learning Formats</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Live Cohorts</h3>
//               <p className="text-gray-600">
//                 Join a group of peers and learn together with live instructor sessions, real-time collaboration, and a supportive community. Perfect for those who thrive in structured environments.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Paced</h3>
//               <p className="text-gray-600">
//                 Learn on your own schedule with our comprehensive self-paced courses. Access all materials immediately and progress at your own speed with on-demand support from mentors.
//               </p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Training</h3>
//               <p className="text-gray-600">
//                 Custom training solutions for teams and organizations. Upskill your workforce with tailored curriculum, dedicated instructors, and progress tracking for managers.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* certificates */}
//       <div className="bg-white py-16 border-t">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Industry-Recognized Certifications</h2>
//           <div className="grid md:grid-cols-4 gap-6">
//             <div className="bg-gray-50 p-6 rounded-lg border text-center">
//               <img src="/api/placeholder/120/120" alt="placeholder" className="mx-auto mb-4" />
//               <h3 className="text-lg font-bold text-gray-900 mb-2">AWS Certified Developer</h3>
//               <p className="text-gray-600 text-sm">Validate your expertise in developing AWS applications</p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-lg border text-center">
//               <img src="/api/placeholder/120/120" alt="placeholder" className="mx-auto mb-4" />
//               <h3 className="text-lg font-bold text-gray-900 mb-2">Google Data Analytics</h3>
//               <p className="text-gray-600 text-sm">Professional certification for data analytics techniques</p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-lg border text-center">
//               <img src="/api/placeholder/120/120" alt="placeholder" className="mx-auto mb-4" />
//               <h3 className="text-lg font-bold text-gray-900 mb-2">Meta Frontend Developer</h3>
//               <p className="text-gray-600 text-sm">Demonstrate expertise in React and modern frontend technologies</p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-lg border text-center">
//               <img src="/api/placeholder/120/120" alt="placeholder" className="mx-auto mb-4" />
//               <h3 className="text-lg font-bold text-gray-900 mb-2">IBM AI Engineering</h3>
//               <p className="text-gray-600 text-sm">Professional certification in artificial intelligence applications</p>
//             </div>
//           </div>
//           <div className="mt-12 text-center">
//             <p className="text-gray-600 mb-6">All our courses prepare you for relevant industry certifications</p>
//             <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded">
//               View All Certifications
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div className="bg-indigo-50 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Student Success Stories</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <img src="/api/placeholder/60/60" alt="Student" className="rounded-full mr-4" />
//                 <div>
//                   <h3 className="font-bold text-gray-900">Sarah Johnson</h3>
//                   <p className="text-sm text-gray-600">Full Stack Web Development Graduate</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 "After completing the bootcamp, I landed a job as a junior developer within 3 weeks. The project-based curriculum gave me practical skills that employers were looking for."
//               </p>
//               <div className="flex text-yellow-400">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
//                     <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <img src="/api/placeholder/60/60" alt="Student" className="rounded-full mr-4" />
//                 <div>
//                   <h3 className="font-bold text-gray-900">Michael Chen</h3>
//                   <p className="text-sm text-gray-600">Data Science & ML Graduate</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 "The data science course was rigorous but incredibly valuable. I transitioned from marketing analytics to a full data scientist role with a 40% salary increase."
//               </p>
//               <div className="flex text-yellow-400">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
//                     <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <img src="/api/placeholder/60/60" alt="Student" className="rounded-full mr-4" />
//                 <div>
//                   <h3 className="font-bold text-gray-900">Alex Rivera</h3>
//                   <p className="text-sm text-gray-600">Mobile Development Graduate</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 mb-4">
//                 "The mobile development course helped me create my first app that now has over 100,000 downloads. The instructors were experienced professionals who provided real-world insights."
//               </p>
//               <div className="flex text-yellow-400">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
//                     <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
//         <div className="container mx-auto px-4 py-16">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-6">Start Your Learning Journey Today</h2>
//             <p className="text-lg opacity-90 mb-8">
//               Join thousands of successful students who have transformed their careers with our industry-leading courses
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-colors">
//                 Browse All Courses
//               </button>
//               <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
//                 Schedule a Consultation
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
  fetch("http://localhost:3000/api/data/service") // Update with your actual API endpoint
    .then((response) => response.json())
    .then((data) => setServices(data.response)) // Extract the 'response' array
    .catch((error) => console.error("Error fetching courses:", error));
}, []);

console.log(services);
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl p-2 font-bold text-gray-800 mb-6">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service.service}
            description={service.description}
            price={service.price}
            icon={service.icon}
            provider={service.provider}

            modeOfLearning={service.modeOfLearning}
            overallRating={service.overallRating}
            totalReviews={service.totalReviews}
            skillLevel={service.skillLevel}
            duration={service.duration}
            // providerImage={service.providerImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
