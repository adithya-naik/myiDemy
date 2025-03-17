// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"; // Import useParams
// import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast

// const CourseDetail = () => {
//   const { id } = useParams(); // Get the course ID from the URL
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`https://myidemy.onrender.com/api/data/service/${id}`); // Fetch service by ID
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCourse(data.response); // Set the course data
//       } catch (error) {
//         console.error("Error fetching course details:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseDetails();
//   }, [id]);

//   const handleEnroll = () => {
//     // Show toast notification for enrollment
//     toast.success("Enrolled successfully!");
//   };

//   if (loading) {
//     return (
//       <div className="container mx-auto p-6 flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto p-6">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           <p>Failed to load course details: {error}</p>
//           <button
//             className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//             onClick={() => window.location.reload()}
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <ToastContainer />
//       {course ? (
//         <div>
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">{course.service}</h2>
//           <p className="text-gray-600 mb-4">{course.description}</p>
//           <p className="font-medium text-gray-800">Price: {course.price}</p>
//           <p className="font-medium text-gray-800">Duration: {course.duration}</p>
//           <p className="font-medium text-gray-800">Skill Level: {course.skillLevel}</p>
//           <p className="font-medium text-gray-800">Mode of Learning: {course.modeOfLearning}</p>
//           <p className="font-medium text-gray-800">Certification Provided: {course.certificationProvided.yes ? "Yes" : "No"}</p>
//           <p className="font-medium text-gray-800">Instructor: {course.instructor.name}</p>
//           <p className="font-medium text-gray-800">Rating: {course.rating}</p>
//           <div className="mt-6">
//             <h3 className="text-xl font-bold">Course Outline:</h3>
//             <ul className="list-disc pl-5">
//               {course.courseOutline.map((module, index) => (
//                 <li key={index} className="text-gray-600">{module}</li>
//               ))}
//             </ul>
//           </div>
//           <button
//             onClick={handleEnroll}
//             className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mt-4"
//           >
//             Enroll Now
//           </button>
//         </div>
//       ) : (
//         <p className="text-gray-500">No course details available.</p>
//       )}
//     </div>
//   );
// };

// export default CourseDetail;














// enhnaced one

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import * as LucideIcons from "lucide-react";
// import {
//   Clock,
//   Award,
//   BookOpen,
//   User,
//   Star,
//   Calendar,
//   CheckCircle,
//   MessageCircle,
//   Clock4,
//   Briefcase,
//   FileText,
//   CreditCard,
//   Percent,
//   Bookmark,
//   Building,
//   ChevronsRight,
//   ChevronLeft,
//   Share2,
//   Heart,
//   Loader2,
//   AlertTriangle,
//   Users,
//   Laptop,
//   DollarSign,
//   Gift,
//   GraduationCap,
// } from "lucide-react";

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://myidemy.onrender.com/api/data/service/${id}`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCourse(data.response);
//         // Scroll to top when course data is loaded
//         window.scrollTo(0, 0);
//       } catch (error) {
//         console.error("Error fetching course details:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseDetails();
//   }, [id]);

//   const getIcon = (iconName) => {
//     const IconComponent = LucideIcons[iconName] || LucideIcons.BookOpen;
//     return <IconComponent size={24} />;
//   };

//   const handleEnroll = () => {
//     toast.success(`Successfully enrolled in ${course.service}!`);
//     // Additional enrollment logic can be added here
//   };

//   const handleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//     toast.info(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
//   };

//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href);
//     toast.info("Course link copied to clipboard!");
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md">
//           <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800">
//             Loading Course Details
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Please wait while we fetch the course information...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md max-w-md w-full">
//           <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             Failed to Load Course Details
//           </h2>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
//             onClick={() => window.location.reload()}
//           >
//             <ChevronLeft className="h-4 w-4 mr-2" />
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="container mx-auto p-6">
//         <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
//           <p className="font-medium">No course details available.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-gray py-8">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex items-center mb-2">
//             <button
//               onClick={() => window.history.back()}
//               className="mr-4 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <div className="flex items-center">
//               <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
//                 {getIcon(course.icon)}
//               </div>
//               <h1 className="text-2xl text-gray-800 md:text-3xl lg:text-4xl font-bold">
//                 {course.service}
//               </h1>
//             </div>
//           </div>
//           <p className="text-lg md:text-xl text-blue-100 mt-2 max-w-3xl">
//             {course.description}
//           </p>

//           <div className="flex flex-wrap items-center mt-6 gap-4">
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Star className="h-4 w-4 mr-1 text-yellow-300" />
//               <span>
//                 {course.overallRating} ({course.totalReviews} reviews)
//               </span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Clock className="h-4 w-4 mr-1" />
//               <span>{course.duration}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Award className="h-4 w-4 mr-1" />
//               <span>{course.skillLevel}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <User className="h-4 w-4 mr-1" />
//               <span>{course.instructor.name}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
//           {/* Left Column - Course Details */}
//           <div className="lg:w-2/3">
//             {/* Course Images */}
//             {course.images && course.images.length > 0 && (
//               <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//                 <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-4">
//                   <img
//                     src={course.images[activeImageIndex]}
//                     alt={`${course.service} preview`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex space-x-2 overflow-x-auto pb-2">
//                   {course.images.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setActiveImageIndex(index)}
//                       className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 ${
//                         index === activeImageIndex
//                           ? "border-blue-500"
//                           : "border-transparent"
//                       }`}
//                     >
//                       <img
//                         src={image}
//                         alt={`Thumbnail ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Tabs Navigation */}
//             <div className="bg-white rounded-lg shadow-md mb-6">
//               <div className="flex overflow-x-auto border-b">
//                 <button
//                   onClick={() => setActiveTab("overview")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "overview"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Overview
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("curriculum")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "curriculum"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Curriculum
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("instructor")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "instructor"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Instructor
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("reviews")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "reviews"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Reviews ({course.totalReviews})
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("career")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "career"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Career Outcomes
//                 </button>
//               </div>

//               {/* Tab Content */}
//               <div className="p-6">
//                 {/* Overview Tab */}
//                 {activeTab === "overview" && (
//                   <div>
//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         About This Course
//                       </h3>
//                       <p className="text-gray-700">{course.description}</p>

//                       <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
//                         <p className="text-sm text-blue-800">
//                           <strong>Prerequisites:</strong> {course.prerequisites}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         Course Features
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {course.certificationProvided?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Certification</p>
//                               <p className="text-sm text-gray-600">
//                                 Issued by{" "}
//                                 {course.certificationProvided.issuingAuthority}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.projectBasedLearning?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">
//                                 Project-Based Learning
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 {course.projectBasedLearning.numberOfProjects}{" "}
//                                 hands-on projects
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.mentorshipSupport?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Mentorship Support</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.mentorshipSupport
//                                   .liveDoubtSolvingSessions
//                                   ? "Live doubt-solving sessions available"
//                                   : "Email support available"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.discussionForum?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Discussion Forum</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.discussionForum.communityAccess
//                                   ? "Access to community forums"
//                                   : "Q&A support"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.assignmentsAndQuizzes?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">
//                                 Assignments & Quizzes
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 {course.assignmentsAndQuizzes.weeklyAssignments
//                                   ? "Weekly assignments"
//                                   : ""}
//                                 {course.assignmentsAndQuizzes
//                                   .weeklyAssignments &&
//                                 course.assignmentsAndQuizzes.mcqTests
//                                   ? " and "
//                                   : ""}
//                                 {course.assignmentsAndQuizzes.mcqTests
//                                   ? "Multiple-choice tests"
//                                   : ""}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.interactiveCodingPlatform && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">
//                                 Interactive Coding Platform
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 Practice coding directly in the browser
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.doubtResolutionTime && (
//                           <div className="flex items-start">
//                             <Clock4 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Doubt Resolution</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.doubtResolutionTime}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.officeHours && (
//                           <div className="flex items-start">
//                             <Calendar className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Office Hours</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.officeHours}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.leaderboardAndBadges && (
//                           <div className="flex items-start">
//                             <Award className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Gamification</p>
//                               <p className="text-sm text-gray-600">
//                                 Leaderboards and achievement badges
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.aiPoweredLearningRecommendations && (
//                           <div className="flex items-start">
//                             <Laptop className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">AI-Powered Learning</p>
//                               <p className="text-sm text-gray-600">
//                                 Personalized recommendations
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         Payment Options
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="flex items-start">
//                           <CreditCard className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
//                           <div>
//                             <p className="font-medium">Price</p>
//                             <p className="text-sm text-gray-600">
//                               {course.price}
//                             </p>
//                           </div>
//                         </div>
//                         {course.installmentOptions?.yes && (
//                           <div className="flex items-start">
//                             <CreditCard className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">EMI Options</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.installmentOptions.emiPlans
//                                   ? "Flexible EMI plans available"
//                                   : "No EMI plans"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.discountsAndOffers?.earlyBirdDiscount && (
//                           <div className="flex items-start">
//                             <Percent className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Early Bird Discount</p>
//                               <p className="text-sm text-gray-600">
//                                 Enroll early for special pricing
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.discountsAndOffers?.referralBonus && (
//                           <div className="flex items-start">
//                             <Gift className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Referral Bonus</p>
//                               <p className="text-sm text-gray-600">
//                                 Get rewards for referrals
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.scholarshipsAvailable?.yes && (
//                           <div className="flex items-start">
//                             <GraduationCap className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Scholarships</p>
//                               <p className="text-sm text-gray-600">
//                                 Criteria:{" "}
//                                 {course.scholarshipsAvailable.criteria}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Curriculum Tab */}
//                 {activeTab === "curriculum" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       Course Curriculum
//                     </h3>
//                     <div className="space-y-4">
//                       {course.courseOutline?.map((topic, index) => (
//                         <div
//                           key={index}
//                           className="p-4 border rounded-md hover:bg-gray-50 transition-colors"
//                         >
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                               <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 font-medium">
//                                 {index + 1}
//                               </div>
//                               <span className="font-medium">{topic}</span>
//                             </div>
//                             <ChevronsRight className="h-5 w-5 text-gray-400" />
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="mt-8 p-4 bg-blue-50 rounded-md">
//                       <h4 className="font-medium flex items-center text-blue-800">
//                         <FileText className="h-5 w-5 mr-2" />
//                         Learning Format
//                       </h4>
//                       <p className="text-blue-700 mt-2">
//                         {course.modeOfLearning}
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Instructor Tab */}
//                 {activeTab === "instructor" && (
//                   <div>
//                     <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
//                       <div className="bg-blue-100 rounded-full p-4 md:p-6">
//                         <User className="h-12 w-12 md:h-16 md:w-16 text-blue-700" />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold">
//                           {course.instructor.name}
//                         </h3>
//                         <div className="flex items-center mt-1">
//                           <Star className="h-4 w-4 text-yellow-400 mr-1" />
//                           <span className="text-gray-700">
//                             {course.instructor.rating} Instructor Rating
//                           </span>
//                         </div>
//                         <div className="mt-4">
//                           <p className="font-medium text-gray-700">
//                             Experience
//                           </p>
//                           <p className="text-gray-600 mt-1">
//                             {course.instructor.experience}
//                           </p>
//                         </div>
//                         <div className="mt-4">
//                           <p className="font-medium text-gray-700">
//                             Notable Projects
//                           </p>
//                           <p className="text-gray-600 mt-1">
//                             {course.instructor.notableProjects}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Reviews Tab */}
//                 {activeTab === "reviews" && (
//                   <div>
//                     <div className="flex flex-col md:flex-row items-center justify-between mb-6">
//                       <div className="text-center md:text-left mb-4 md:mb-0">
//                         <h3 className="text-xl font-semibold">
//                           Student Reviews
//                         </h3>
//                         <p className="text-gray-600 mt-1">
//                           {course.totalReviews} reviews for this course
//                         </p>
//                       </div>
//                       <div className="flex items-center bg-blue-50 px-6 py-3 rounded-lg">
//                         <div className="text-4xl font-bold text-blue-600 mr-3">
//                           {course.overallRating}
//                         </div>
//                         <div>
//                           <div className="flex text-yellow-400">
//                             {[...Array(5)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className={`h-5 w-5 ${
//                                   i < Math.floor(course.overallRating)
//                                     ? "text-yellow-400"
//                                     : "text-gray-300"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                           <p className="text-sm text-gray-600 mt-1">
//                             Average Rating
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-4">
//                       {course.topReviews?.map((review, index) => (
//                         <div key={index} className="p-4 border rounded-md">
//                           <div className="flex items-start">
//                             <div className="bg-gray-100 rounded-full p-2 mr-3">
//                               <User className="h-5 w-5 text-gray-500" />
//                             </div>
//                             <div>
//                               <div className="flex text-yellow-400 mb-2">
//                                 {[...Array(5)].map((_, i) => (
//                                   <Star key={i} className="h-4 w-4" />
//                                 ))}
//                               </div>
//                               <p className="text-gray-700">{review}</p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Career Outcomes Tab */}
//                 {activeTab === "career" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       Career Outcomes
//                     </h3>

//                     <div className="p-4 bg-green-50 rounded-md mb-6">
//                       <h4 className="flex items-center font-medium text-green-800">
//                         <DollarSign className="h-5 w-5 mr-2" />
//                         Average Salary of Graduates
//                       </h4>
//                       <p className="text-green-700 text-lg font-semibold mt-2">
//                         {course.averageSalaryOfGraduates}
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                       {course.jobGuarantee?.yes && (
//                         <div className="p-4 border rounded-md">
//                           <h4 className="flex items-center font-medium">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                             Job Guarantee
//                           </h4>
//                           <p className="text-gray-600 mt-2">
//                             Conditions: {course.jobGuarantee.conditions}
//                           </p>
//                         </div>
//                       )}

//                       {course.internshipOpportunities?.yes && (
//                         <div className="p-4 border rounded-md">
//                           <h4 className="flex items-center font-medium">
//                             <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
//                             Internship Opportunities
//                           </h4>
//                           <p className="text-gray-600 mt-2">
//                             Partner Companies:
//                           </p>
//                           <div className="flex flex-wrap gap-2 mt-1">
//                             {course.internshipOpportunities.partnerCompanies?.map(
//                               (company, index) => (
//                                 <span
//                                   key={index}
//                                   className="bg-blue-50 text-blue-700 text-sm px-2 py-1 rounded"
//                                 >
//                                   {company}
//                                 </span>
//                               )
//                             )}
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     <div className="mb-6">
//                       <h4 className="flex items-center font-medium mb-3">
//                         <Building className="h-5 w-5 text-gray-700 mr-2" />
//                         Hiring Partners
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {course.hiringPartners?.map((company, index) => (
//                           <span
//                             key={index}
//                             className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
//                           >
//                             {company}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {course.careerSupport && (
//                       <div>
//                         <h4 className="font-medium mb-3">
//                           Career Support Services
//                         </h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           {course.careerSupport.resumeBuilding && (
//                             <div className="flex items-center">
//                               <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                               <span>Resume Building</span>
//                             </div>
//                           )}
//                           {course.careerSupport.interviewPreparation && (
//                             <div className="flex items-center">
//                               <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                               <span>Interview Preparation</span>
//                             </div>
//                           )}
//                           {course.careerSupport.internships && (
//                             <div className="flex items-center">
//                               <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
//                               <span>Internship Assistance</span>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Enrollment Card */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-lg    self-start sticky top-16 shadow-md p-6">
//               <h3 className="text-2xl font-bold">{course.price}</h3>

//               <button
//                 onClick={handleEnroll}
//                 className="w-full bg-blue-600 text-white py-3 rounded-md font-medium mt-6 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 Enroll Now
//               </button>

//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={handleWishlist}
//                   lassName={`flex items-center justify-center w-1/2 mr-2 py-2 rounded-md font-medium ${
//                     isWishlisted
//                 ? "bg-red-50 text-red-600 border border-red-200"
//                 : "bg-gray-50 text-gray-700 border border-gray-200"
//                   }`}
//                 >
//                   <Heart
//                     className={`h-4 w-4 mr-2 ${
//                       isWishlisted ? "fill-current" : ""
//                     }`}
//                   />
//                   Wishlist
//                 </button>
//                 <button
//                   onClick={handleShare}
//                   className="flex items-center justify-center w-1/2 ml-2 py-2 bg-gray-50 text-gray-700 rounded-md font-medium border border-gray-200"
//                 >
//                   <Share2 className="h-4 w-4 mr-2" />
//                   Share
//                 </button>
//               </div>

//               <div className="mt-6 space-y-4">
//                 <h4 className="font-medium">This course includes:</h4>

//                 <div className="flex items-center">
//                   <Clock className="h-5 w-5 text-gray-500 mr-3" />
//                   <span className="text-gray-700">
//                     {course.duration} of course content
//                   </span>
//                 </div>

//                 <div className="flex items-center">
//                   <FileText className="h-5 w-5 text-gray-500 mr-3" />
//                   <span className="text-gray-700">
//                     Comprehensive curriculum
//                   </span>
//                 </div>

//                 {course.projectBasedLearning?.yes && (
//                   <div className="flex items-center">
//                     <Briefcase className="h-5 w-5 text-gray-500 mr-3" />
//                     <span className="text-gray-700">
//                       {course.projectBasedLearning.numberOfProjects} hands-on
//                       projects
//                     </span>
//                   </div>
//                 )}

//                 {course.certificationProvided?.yes && (
//                   <div className="flex items-center">
//                     <Award className="h-5 w-5 text-gray-500 mr-3" />
//                     <span className="text-gray-700">
//                       Certificate of completion
//                     </span>
//                   </div>
//                 )}

//                 {course.mentorshipSupport?.yes && (
//                   <div className="flex items-center">
//                     <MessageCircle className="h-5 w-5 text-gray-500 mr-3" />
//                     <span className="text-gray-700">Mentorship support</span>
//                   </div>
//                 )}

//                 {course.careerSupport?.resumeBuilding && (
//                   <div className="flex items-center">
//                     <Users className="h-5 w-5 text-gray-500 mr-3" />
//                     <span className="text-gray-700">Career services</span>
//                   </div>
//                 )}

//                 <div className="flex items-center">
//                   <Clock4 className="h-5 w-5 text-gray-500 mr-3" />
//                   <span className="text-gray-700">Lifetime access</span>
//                 </div>
//               </div>

//               {course.featured && (
//                 <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-md">
//                   <p className="text-yellow-800 flex items-center">
//                     <Star className="h-5 w-5 text-yellow-500 mr-2" />
//                     <span className="font-medium">Featured Course</span>
//                   </p>
//                   <p className="text-yellow-700 text-sm mt-1">
//                     This is one of our most popular and highly-rated courses!
//                   </p>
//                 </div>
//               )}

//               <div className="mt-6 text-center">
//                 <p className="text-sm text-gray-500">
//                   Not sure? Contact our team for more information
//                 </p>
//                 <button className="text-blue-600 text-sm font-medium hover:underline mt-1">
//                   Get Course Advice
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;


























// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import * as LucideIcons from "lucide-react"
// import {
//   Clock,
//   Award,
//   User,
//   Star,
//   CheckCircle,
//   MessageCircle,
//   Clock4,
//   Briefcase,
//   FileText,
//   CreditCard,
//   Percent,
//   Building,
//   ChevronsRight,
//   ChevronLeft,
//   Share2,
//   Heart,
//   Loader2,
//   AlertTriangle,
//   Users,
//   Laptop,
//   DollarSign,
//   Gift,
//   GraduationCap,
// } from "lucide-react"
// import { useCart } from "../store/cart" // Import our custom hook

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   // Use the cart context
//   const {
//     isInCart,
//     isInWishlist,
//     isPurchased,
//     handleEnroll: enrollCourse,
//     handleWishlist: toggleWishlist,
//     handleShare: shareItem
//   } = useCart();

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://myidemy.onrender.com/api/data/service/${id}`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCourse(data.response);
//         // Scroll to top when course data is loaded
//         window.scrollTo(0, 0);
//       } catch (error) {
//         console.error("Error fetching course details:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseDetails();
//   }, [id]);

//   const getIcon = (iconName) => {
//     const IconComponent = LucideIcons[iconName] || LucideIcons.BookOpen;
//     return <IconComponent size={24} />;
//   };

//   // Updated functions to use the cart context
//   const handleEnroll = () => {
//     if (course) {
//       enrollCourse(course);
//     }
//   };

//   const handleWishlist = () => {
//     if (course) {
//       toggleWishlist(course);
//     }
//   };

//   const handleShare = () => {
//     if (course) {
//       shareItem(course);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md">
//           <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800">
//             Loading Course Details
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Please wait while we fetch the course information...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md max-w-md w-full">
//           <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             Failed to Load Course Details
//           </h2>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
//             onClick={() => window.location.reload()}
//           >
//             <ChevronLeft className="h-4 w-4 mr-2" />
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="container mx-auto p-6">
//         <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
//           <p className="font-medium">No course details available.</p>
//         </div>
//       </div>
//     );
//   }

//   // Determine enrollment and wishlist status
//   const alreadyPurchased = isPurchased(course._id);
//   const inCart = isInCart(course._id);
//   const inWishlist = isInWishlist(course._id);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white py-8">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex items-center mb-2">
//             <button
//               onClick={() => window.history.back()}
//               className="mr-4 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <div className="flex items-center">
//               <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
//                 {getIcon(course.icon)}
//               </div>
//               <h1 className="text-2xl text-white md:text-3xl lg:text-4xl font-bold">
//                 {course.service}
//               </h1>
//             </div>
//           </div>
//           <p className="text-lg md:text-xl text-blue-100 mt-2 max-w-3xl">
//             {course.description}
//           </p>

//           <div className="flex flex-wrap items-center mt-6 gap-4">
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Star className="h-4 w-4 mr-1 text-yellow-300" />
//               <span>
//                 {course.overallRating} ({course.totalReviews} reviews)
//               </span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Clock className="h-4 w-4 mr-1" />
//               <span>{course.duration}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Award className="h-4 w-4 mr-1" />
//               <span>{course.skillLevel}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <User className="h-4 w-4 mr-1" />
//               <span>{course.instructor.name}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
//           {/* Left Column - Course Details */}
//           <div className="lg:w-2/3">
//             {/* Course Images */}
//             {course.images && course.images.length > 0 && (
//               <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//                 <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-4">
//                   <img
//                     src={course.images[activeImageIndex] || "/placeholder.svg"}
//                     alt={`${course.service} preview`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex space-x-2 overflow-x-auto pb-2">
//                   {course.images.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setActiveImageIndex(index)}
//                       className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 ${
//                         index === activeImageIndex
//                           ? "border-blue-500"
//                           : "border-transparent"
//                       }`}
//                     >
//                       <img
//                         src={image || "/placeholder.svg"}
//                         alt={`Thumbnail ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Tabs Navigation */}
//             <div className="bg-white rounded-lg shadow-md mb-6">
//               <div className="flex overflow-x-auto border-b">
//                 <button
//                   onClick={() => setActiveTab("overview")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "overview"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Overview
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("curriculum")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "curriculum"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Curriculum
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("instructor")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "instructor"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Instructor
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("reviews")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "reviews"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Reviews ({course.totalReviews})
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("career")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "career"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Career Outcomes
//                 </button>
//               </div>

//               {/* Tab Content */}
//               <div className="p-6">
//                 {/* Overview Tab */}
//                 {activeTab === "overview" && (
//                   <div>
//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         About This Course
//                       </h3>
//                       <p className="text-gray-700">{course.description}</p>

//                       <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
//                         <p className="text-sm text-blue-800">
//                           <strong>Prerequisites:</strong> {course.prerequisites}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         Course Features
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {course.certificationProvided?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Certification</p>
//                               <p className="text-sm text-gray-600">
//                                 Issued by{" "}
//                                 {course.certificationProvided.issuingAuthority}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.projectBasedLearning?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">
//                                 Project-Based Learning
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 {course.projectBasedLearning.numberOfProjects}{" "}
//                                 hands-on projects
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.mentorshipSupport?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Mentorship Support</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.mentorshipSupport
//                                   .liveDoubtSolvingSessions
//                                   ? "Live doubt-solving sessions available"
//                                   : "Email support available"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.discussionForum?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Discussion Forum</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.discussionForum.communityAccess
//                                   ? "Access to community forums"
//                                   : "Q&A support"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.assignmentsAndQuizzes?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Assignments and Quizzes</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.assignmentsAndQuizzes.autoGraded
//                                   ? "Auto-graded exercises"
//                                   : "Practice exercises"} included
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.accessPeriod && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Lifetime Access</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.accessPeriod}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         What You'll Learn
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                         {course.learningOutcomes?.map((outcome, index) => (
//                           <div
//                             key={index}
//                             className="flex items-start bg-gray-50 p-3 rounded-md"
//                           >
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                             <p className="text-gray-700">{outcome}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         Target Audience
//                       </h3>
//                       <div className="space-y-3">
//                         {course.targetAudience?.map((audience, index) => (
//                           <div key={index} className="flex items-start">
//                             <ChevronsRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
//                             <p className="text-gray-700">{audience}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Curriculum Tab */}
//                 {activeTab === "curriculum" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       Course Curriculum
//                     </h3>

//                     {course.curriculum?.modules?.map((module, index) => (
//                       <div
//                         key={index}
//                         className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
//                       >
//                         <div className="bg-gray-50 p-4 border-b border-gray-200">
//                           <h4 className="font-semibold text-lg">
//                             Module {index + 1}: {module.title}
//                           </h4>
//                           <p className="text-sm text-gray-600 mt-1">
//                             {module.lessons?.length || 0} lessons •{" "}
//                             {module.duration}
//                           </p>
//                         </div>
//                         <div className="divide-y divide-gray-200">
//                           {module.lessons?.map((lesson, lessonIndex) => (
//                             <div
//                               key={lessonIndex}
//                               className="p-4 hover:bg-gray-50 flex justify-between items-center"
//                             >
//                               <div className="flex items-start">
//                                 {lesson.type === "video" ? (
//                                   <LucideIcons.Video className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
//                                 ) : lesson.type === "quiz" ? (
//                                   <LucideIcons.FileQuestion className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
//                                 ) : lesson.type === "assignment" ? (
//                                   <LucideIcons.ClipboardList className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
//                                 ) : (
//                                   <LucideIcons.FileText className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
//                                 )}
//                                 <div>
//                                   <h5 className="font-medium">
//                                     {lesson.title}
//                                   </h5>
//                                   {lesson.description && (
//                                     <p className="text-sm text-gray-600">
//                                       {lesson.description}
//                                     </p>
//                                   )}
//                                 </div>
//                               </div>
//                               <span className="text-sm text-gray-500">
//                                 {lesson.duration}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Instructor Tab */}
//                 {activeTab === "instructor" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">About the Instructor</h3>
//                     <div className="flex flex-col md:flex-row items-start gap-6">
//                       <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
//                         {course.instructor?.profilePicture ? (
//                           <img
//                             src={course.instructor.profilePicture || "/placeholder.svg"}
//                             alt={course.instructor.name}
//                             className="w-full h-full object-cover"
//                           />
//                         ) : (
//                           <User className="w-full h-full p-4 text-gray-400" />
//                         )}
//                       </div>
//                       <div>
//                         <h4 className="text-lg font-medium">
//                           {course.instructor?.name}
//                         </h4>
//                         <p className="text-gray-600">
//                           {course.instructor?.title}
//                         </p>
//                         <div className="flex items-center mt-1 mb-3">
//                           <Star className="h-4 w-4 text-yellow-400 mr-1" />
//                           <span className="text-sm">
//                             {course.instructor?.rating} Instructor Rating •{" "}
//                             {course.instructor?.students?.toLocaleString()}{" "}
//                             Students
//                           </span>
//                         </div>
//                         <p className="text-gray-700 mb-4">
//                           {course.instructor?.bio}
//                         </p>
//                         {course.instructor?.expertise && (
//                           <div className="mb-4">
//                             <h5 className="font-medium mb-2">Expertise</h5>
//                             <div className="flex flex-wrap gap-2">
//                               {course.instructor.expertise.map(
//                                 (skill, index) => (
//                                   <span
//                                     key={index}
//                                     className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
//                                   >
//                                     {skill}
//                                   </span>
//                                 )
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Reviews Tab */}
//                 {activeTab === "reviews" && (
//                   <div>
//                     <div className="flex flex-col md:flex-row justify-between mb-6">
//                       <div>
//                         <h3 className="text-xl font-semibold">
//                           Student Reviews
//                         </h3>
//                         <div className="flex items-center mt-2">
//                           <div className="flex">
//                             {[...Array(Math.floor(course.overallRating))].map(
//                               (_, i) => (
//                                 <Star
//                                   key={i}
//                                   className="h-5 w-5 text-yellow-400 fill-current"
//                                 />
//                               )
//                             )}
//                             {course.overallRating % 1 !== 0 && (
//                               <LucideIcons.StarHalf className="h-5 w-5 text-yellow-400" />
//                             )}
//                             {[
//                               ...Array(
//                                 5 -
//                                   Math.floor(course.overallRating) -
//                                   (course.overallRating % 1 !== 0 ? 1 : 0)
//                               ),
//                             ].map((_, i) => (
//                               <Star
//                                 key={i + Math.floor(course.overallRating) + (course.overallRating % 1 !== 0 ? 1 : 0)}
//                                 className="h-5 w-5 text-gray-300"
//                               />
//                             ))}
//                           </div>
//                           <span className="ml-2 text-xl font-medium">
//                             {course.overallRating}
//                           </span>
//                           <span className="ml-2 text-gray-600">
//                             ({course.totalReviews} reviews)
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {course.reviews && course.reviews.length > 0 ? (
//                       <div className="space-y-6">
//                         {course.reviews.map((review, index) => (
//                           <div
//                             key={index}
//                             className="border-b border-gray-200 pb-6 last:border-b-0"
//                           >
//                             <div className="flex items-center mb-2">
//                               <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-medium mr-3">
//                                 {review.name
//                                   .split(" ")
//                                   .map((n) => n[0])
//                                   .join("")
//                                   .toUpperCase()}
//                               </div>
//                               <div>
//                                 <h4 className="font-medium">{review.name}</h4>
//                                 <div className="flex items-center">
//                                   <div className="flex">
//                                     {[...Array(review.rating)].map((_, i) => (
//                                       <Star
//                                         key={i}
//                                         className="h-4 w-4 text-yellow-400 fill-current"
//                                       />
//                                     ))}
//                                     {[...Array(5 - review.rating)].map(
//                                       (_, i) => (
//                                         <Star
//                                           key={i + review.rating}
//                                           className="h-4 w-4 text-gray-300"
//                                         />
//                                       )
//                                     )}
//                                   </div>
//                                   <span className="text-sm text-gray-500 ml-2">
//                                     {review.date}
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                             <p className="text-gray-700">{review.comment}</p>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="text-center py-8 bg-gray-50 rounded-lg">
//                         <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
//                         <h4 className="text-lg font-medium text-gray-600">
//                           No Reviews Yet
//                         </h4>
//                         <p className="text-gray-500 mt-1">
//                           Be the first to review this course
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Career Outcomes Tab */}
//                 {activeTab === "career" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       Career Opportunities
//                     </h3>

//                     {course.careerOutcomes?.jobRoles && (
//                       <div className="mb-6">
//                         <h4 className="font-medium text-lg mb-3">
//                           Potential Job Roles
//                         </h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           {course.careerOutcomes.jobRoles.map((role, index) => (
//                             <div
//                               key={index}
//                               className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
//                             >
//                               <div className="flex items-center mb-2">
//                                 <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
//                                 <h5 className="font-medium">{role.title}</h5>
//                               </div>
//                               {role.averageSalary && (
//                                 <div className="flex items-center text-gray-700 mb-1">
//                                   <DollarSign className="h-4 w-4 text-green-500 mr-2" />
//                                   <span>Avg. Salary: {role.averageSalary}</span>
//                                 </div>
//                               )}
//                               {role.demand && (
//                                 <div className="flex items-center text-gray-700">
//                                   <Percent className="h-4 w-4 text-purple-500 mr-2" />
//                                   <span>Market Demand: {role.demand}</span>
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {course.careerOutcomes?.skills && (
//                       <div className="mb-6">
//                         <h4 className="font-medium text-lg mb-3">
//                           Skills You'll Gain
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {course.careerOutcomes.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {course.careerOutcomes?.companies && (
//                       <div>
//                         <h4 className="font-medium text-lg mb-3">
//                           Companies That Hire These Skills
//                         </h4>
//                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                           {course.careerOutcomes.companies.map(
//                             (company, index) => (
//                               <div
//                                 key={index}
//                                 className  => (
//                               <div
//                                 key={index}
//                                 className="flex items-center bg-gray-50 p-3 rounded-lg"
//                               >
//                                 <Building className="h-5 w-5 text-gray-500 mr-2" />
//                                 <span>{company}</span>
//                               </div>
//                             )
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Price Card */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="text-3xl font-bold">
//                   ${course.price.discounted || course.price.original}
//                 </div>
//                 {course.price.discounted && (
//                   <div className="flex items-center">
//                     <span className="text-gray-500 line-through mr-2">
//                       ${course.price.original}
//                     </span>
//                     <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
//                       {Math.round(
//                         ((course.price.original - course.price.discounted) /
//                           course.price.original) *
//                           100
//                       )}
//                       % off
//                     </span>
//                   </div>
//                 )}
//               </div>

//               {course.price.discounted && course.price.endsAt && (
//                 <div className="bg-orange-50 border border-orange-100 rounded p-3 mb-4 flex items-center">
//                   <Clock4 className="h-5 w-5 text-orange-500 mr-2" />
//                   <div className="text-sm text-orange-800">
//                     <span className="font-medium">Sale ends in:</span>{" "}
//                     {course.price.endsAt}
//                   </div>
//                 </div>
//               )}

//               <div className="space-y-3 mb-6">
//                 <div className="flex items-center">
//                   <Clock className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>{course.duration} total length</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FileText className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>
//                     {course.curriculum?.modules?.reduce(
//                       (acc, module) => acc + (module.lessons?.length || 0),
//                       0
//                     )}{" "}
//                     lessons
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <GraduationCap className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>{course.skillLevel}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Users className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>
//                     {course.studentsEnrolled?.toLocaleString()} students enrolled
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <Laptop className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>{course.accessPeriod}</span>
//                 </div>
//                 {course.certificationProvided?.yes && (
//                   <div className="flex items-center">
//                     <Award className="h-5 w-5 text-gray-500 mr-3" />
//                     <span>Certificate of completion</span>
//                   </div>
//                 )}
//               </div>

//               <div className="space-y-3">
//                 {alreadyPurchased ? (
//                   <button className="w-full bg-green-100 text-green-800 py-3 px-4 rounded-md font-medium flex items-center justify-center cursor-default">
//                     <CheckCircle className="h-5 w-5 mr-2" />
//                     Already Enrolled
//                   </button>
//                 ) : (
//                   <>
//                     <button
//                       onClick={handleEnroll}
//                       className={`w-full ${
//                         inCart
//                           ? "bg-gray-100 text-gray-800"
//                           : "bg-blue-600 text-white hover:bg-blue-700"
//                       } py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors`}
//                     >
//                       {inCart ? (
//                         <>
//                           <CheckCircle className="h-5 w-5 mr-2" />
//                           Added to Cart
//                         </>
//                       ) : (
//                         <>
//                           <CreditCard className="h-5 w-5 mr-2" />
//                           Add to Cart
//                         </>
//                       )}
//                     </button>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={handleWishlist}
//                         className={`flex-1 ${
//                           inWishlist
//                             ? "bg-pink-100 text-pink-700 border-pink-200"
//                             : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
//                         } py-3 px-4 rounded-md font-medium flex items-center justify-center border transition-colors`}
//                       >
//                         <Heart
//                           className={`h-5 w-5 mr-2 ${
//                             inWishlist ? "fill-current" : ""
//                           }`}
//                         />
//                         Wishlist
//                       </button>
//                       <button
//                         onClick={handleShare}
//                         className="flex-1 bg-gray-100 text-gray-800 border border-gray-200 py-3 px-4 rounded-md font-medium flex items-center justify-center hover:bg-gray-200 transition-colors"
//                       >
//                         <Share2 className="h-5 w-5 mr-2" />
//                         Share
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <h4 className="font-medium mb-2">This course includes:</h4>
//                 <ul className="space-y-2">
//                   {course.features?.map((feature, index) => (
//                     <li key={index} className="flex items-center text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {course.moneyBackGuarantee && (
//                 <div className="mt-6 pt-6 border-t border-gray-200 flex items-center">
//                   <Gift className="h-8 w-8 text-green-500 mr-3" />
//                   <div>
//                     <h4 className="font-medium">Money-Back Guarantee</h4>
//                     <p className="text-sm text-gray-600">
//                       {course.moneyBackGuarantee}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;








































// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import * as LucideIcons from "lucide-react";
// import {
//   Clock,
//   Award,
//   User,
//   Star,
//   CheckCircle,
//   MessageCircle,
//   Clock4,
//   Briefcase,
//   FileText,
//   CreditCard,
//   Percent,
//   Building,
//   ChevronsRight,
//   ChevronLeft,
//   Share2,
//   Heart,
//   Loader2,
//   AlertTriangle,
//   Users,
//   Laptop,
//   DollarSign,
//   Gift,
//   GraduationCap,
// } from "lucide-react";
// import { useCart } from "../store/cart"; // Import our custom hook

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   // Use the cart context
//   const {
//     isInCart,
//     isInWishlist,
//     isPurchased,
//     handleEnroll: enrollCourse,
//     handleWishlist: toggleWishlist,
//     handleShare: shareItem,
//   } = useCart();

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://myidemy.onrender.com/api/data/service/${id}`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCourse(data.response);
//         // Scroll to top when course data is loaded
//         window.scrollTo(0, 0);
//       } catch (error) {
//         console.error("Error fetching course details:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseDetails();
//   }, [id]);

//   const getIcon = (iconName) => {
//     const IconComponent = LucideIcons[iconName] || LucideIcons.BookOpen;
//     return <IconComponent size={24} />;
//   };

//   // Updated functions to use the cart context
//   const handleEnroll = () => {
//     if (course) {
//       enrollCourse(course);
//     }
//   };

//   const handleWishlist = () => {
//     if (course) {
//       toggleWishlist(course);
//     }
//   };

//   const handleShare = () => {
//     if (course) {
//       shareItem(course);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md">
//           <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800">
//             Loading Course Details
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Please wait while we fetch the course information...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md max-w-md w-full">
//           <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             Failed to Load Course Details
//           </h2>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
//             onClick={() => window.location.reload()}
//           >
//             <ChevronLeft className="h-4 w-4 mr-2" />
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="container mx-auto p-6">
//         <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
//           <p className="font-medium">No course details available.</p>
//         </div>
//       </div>
//     );
//   }

//   // Determine enrollment and wishlist status
//   const alreadyPurchased = isPurchased(course._id);
//   const inCart = isInCart(course._id);
//   const inWishlist = isInWishlist(course._id);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white py-8">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex items-center mb-2">
//             <button
//               onClick={() => window.history.back()}
//               className="mr-4 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <div className="flex items-center">
//               <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
//                 {getIcon(course.icon)}
//               </div>
//               <h1 className="text-2xl text-white md:text-3xl lg:text-4xl font-bold">
//                 {course.service}
//               </h1>
//             </div>
//           </div>
//           <p className="text-lg md:text-xl text-blue-100 mt-2 max-w-3xl">
//             {course.description}
//           </p>

//           <div className="flex flex-wrap items-center mt-6 gap-4">
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Star className="h-4 w-4 mr-1 text-yellow-300" />
//               <span>
//                 {course.overallRating} ({course.totalReviews} reviews)
//               </span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Clock className="h-4 w-4 mr-1" />
//               <span>{course.duration}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Award className="h-4 w-4 mr-1" />
//               <span>{course.skillLevel}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <User className="h-4 w-4 mr-1" />
//               <span>{course.instructor.name}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
//           {/* Left Column - Course Details */}
//           <div className="lg:w-2/3">
//             {/* Course Images */}
//             {course.images && course.images.length > 0 && (
//               <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//                 <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-4">
//                   <img
//                     src={course.images[activeImageIndex] || "/placeholder.svg"}
//                     alt={`${course.service} preview`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex space-x-2 overflow-x-auto pb-2">
//                   {course.images.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setActiveImageIndex(index)}
//                       className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 ${
//                         index === activeImageIndex
//                           ? "border-blue-500"
//                           : "border-transparent"
//                       }`}
//                     >
//                       <img
//                         src={image || "/placeholder.svg"}
//                         alt={`Thumbnail ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Tabs Navigation */}
//             <div className="bg-white rounded-lg shadow-md mb-6">
//               <div className="flex overflow-x-auto border-b">
//                 <button
//                   onClick={() => setActiveTab("overview")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "overview"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Overview
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("curriculum")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "curriculum"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Curriculum
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("instructor")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "instructor"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Instructor
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("reviews")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "reviews"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Reviews ({course.totalReviews})
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("career")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "career"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Career Outcomes
//                 </button>
//               </div>

//               {/* Tab Content */}
//               <div className="p-6">
//                 {/* Overview Tab */}
//                 {activeTab === "overview" && (
//                   <div>
//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         About This Course
//                       </h3>
//                       <p className="text-gray-700">{course.description}</p>

//                       <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
//                         <p className="text-sm text-blue-800">
//                           <strong>Prerequisites:</strong> {course.prerequisites}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         Course Features
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {course.certificationProvided?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Certification</p>
//                               <p className="text-sm text-gray-600">
//                                 Issued by{" "}
//                                 {course.certificationProvided.issuingAuthority}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.projectBasedLearning?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">
//                                 Project-Based Learning
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 {course.projectBasedLearning.numberOfProjects}{" "}
//                                 hands-on projects
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.mentorshipSupport?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Mentorship Support</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.mentorshipSupport
//                                   .liveDoubtSolvingSessions
//                                   ? "Live doubt-solving sessions available"
//                                   : "Email support available"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.discussionForum?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Discussion Forum</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.discussionForum.communityAccess
//                                   ? "Access to community forums"
//                                   : "Q&A support"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.assignmentsAndQuizzes?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">
//                                 Assignments and Quizzes
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 {course.assignmentsAndQuizzes.autoGraded
//                                   ? "Auto-graded exercises"
//                                   : "Practice exercises"}{" "}
//                                 included
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.accessPeriod && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Lifetime Access</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.accessPeriod}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         What You'll Learn
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                         {course.learningOutcomes?.map((outcome, index) => (
//                           <div
//                             key={index}
//                             className="flex items-start bg-gray-50 p-3 rounded-md"
//                           >
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                             <p className="text-gray-700">{outcome}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         Target Audience
//                       </h3>
//                       <div className="space-y-3">
//                         {course.targetAudience?.map((audience, index) => (
//                           <div key={index} className="flex items-start">
//                             <ChevronsRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
//                             <p className="text-gray-700">{audience}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Curriculum Tab */}
//                 {activeTab === "curriculum" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       Course Curriculum
//                     </h3>

//                     {course.curriculum?.modules?.map((module, index) => (
//                       <div
//                         key={index}
//                         className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
//                       >
//                         <div className="bg-gray-50 p-4 border-b border-gray-200">
//                           <h4 className="font-semibold text-lg">
//                             Module {index + 1}: {module.title}
//                           </h4>
//                           <p className="text-sm text-gray-600 mt-1">
//                             {module.lessons?.length || 0} lessons •{" "}
//                             {module.duration}
//                           </p>
//                         </div>
//                         <div className="divide-y divide-gray-200">
//                           {module.lessons?.map((lesson, lessonIndex) => (
//                             <div
//                               key={lessonIndex}
//                               className="p-4 hover:bg-gray-50 flex justify-between items-center"
//                             >
//                               <div className="flex items-start">
//                                 {lesson.type === "video" ? (
//                                   <LucideIcons.Video className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
//                                 ) : lesson.type === "quiz" ? (
//                                   <LucideIcons.FileQuestion className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
//                                 ) : lesson.type === "assignment" ? (
//                                   <LucideIcons.ClipboardList className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
//                                 ) : (
//                                   <LucideIcons.FileText className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
//                                 )}
//                                 <div>
//                                   <h5 className="font-medium">
//                                     {lesson.title}
//                                   </h5>
//                                   {lesson.description && (
//                                     <p className="text-sm text-gray-600">
//                                       {lesson.description}
//                                     </p>
//                                   )}
//                                 </div>
//                               </div>
//                               <span className="text-sm text-gray-500">
//                                 {lesson.duration}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Instructor Tab */}
//                 {activeTab === "instructor" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       About the Instructor
//                     </h3>
//                     <div className="flex flex-col md:flex-row items-start gap-6">
//                       <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
//                         {course.instructor?.profilePicture ? (
//                           <img
//                             src={
//                               course.instructor.profilePicture ||
//                               "/placeholder.svg"
//                             }
//                             alt={course.instructor.name}
//                             className="w-full h-full object-cover"
//                           />
//                         ) : (
//                           <User className="w-full h-full p-4 text-gray-400" />
//                         )}
//                       </div>
//                       <div>
//                         <h4 className="text-lg font-medium">
//                           {course.instructor?.name}
//                         </h4>
//                         <p className="text-gray-600">
//                           {course.instructor?.title}
//                         </p>
//                         <div className="flex items-center mt-1 mb-3">
//                           <Star className="h-4 w-4 text-yellow-400 mr-1" />
//                           <span className="text-sm">
//                             {course.instructor?.rating} Instructor Rating •{" "}
//                             {course.instructor?.students?.toLocaleString()}{" "}
//                             Students
//                           </span>
//                         </div>
//                         <p className="text-gray-700 mb-4">
//                           {course.instructor?.bio}
//                         </p>
//                         {course.instructor?.expertise && (
//                           <div className="mb-4">
//                             <h5 className="font-medium mb-2">Expertise</h5>
//                             <div className="flex flex-wrap gap-2">
//                               {course.instructor.expertise.map(
//                                 (skill, index) => (
//                                   <span
//                                     key={index}
//                                     className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
//                                   >
//                                     {skill}
//                                   </span>
//                                 )
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Reviews Tab */}
//                 {activeTab === "reviews" && (
//                   <div>
//                     <div className="flex flex-col md:flex-row justify-between mb-6">
//                       <div>
//                         <h3 className="text-xl font-semibold">
//                           Student Reviews
//                         </h3>
//                         <div className="flex items-center mt-2">
//                           <div className="flex">
//                             {[...Array(Math.floor(course.overallRating))].map(
//                               (_, i) => (
//                                 <Star
//                                   key={i}
//                                   className="h-5 w-5 text-yellow-400 fill-current"
//                                 />
//                               )
//                             )}
//                             {course.overallRating % 1 !== 0 && (
//                               <LucideIcons.StarHalf className="h-5 w-5 text-yellow-400" />
//                             )}
//                             {[
//                               ...Array(
//                                 5 -
//                                   Math.floor(course.overallRating) -
//                                   (course.overallRating % 1 !== 0 ? 1 : 0)
//                               ),
//                             ].map((_, i) => (
//                               <Star
//                                 key={
//                                   i +
//                                   Math.floor(course.overallRating) +
//                                   (course.overallRating % 1 !== 0 ? 1 : 0)
//                                 }
//                                 className="h-5 w-5 text-gray-300"
//                               />
//                             ))}
//                           </div>
//                           <span className="ml-2 text-xl font-medium">
//                             {course.overallRating}
//                           </span>
//                           <span className="ml-2 text-gray-600">
//                             ({course.totalReviews} reviews)
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {course.reviews && course.reviews.length > 0 ? (
//                       <div className="space-y-6">
//                         {course.reviews.map((review, index) => (
//                           <div
//                             key={index}
//                             className="border-b border-gray-200 pb-6 last:border-b-0"
//                           >
//                             <div className="flex items-center mb-2">
//                               <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-medium mr-3">
//                                 {review.name
//                                   .split(" ")
//                                   .map((n) => n[0])
//                                   .join("")
//                                   .toUpperCase()}
//                               </div>
//                               <div>
//                                 <h4 className="font-medium">{review.name}</h4>
//                                 <div className="flex items-center">
//                                   <div className="flex">
//                                     {[...Array(review.rating)].map((_, i) => (
//                                       <Star
//                                         key={i}
//                                         className="h-4 w-4 text-yellow-400 fill-current"
//                                       />
//                                     ))}
//                                     {[...Array(5 - review.rating)].map(
//                                       (_, i) => (
//                                         <Star
//                                           key={i + review.rating}
//                                           className="h-4 w-4 text-gray-300"
//                                         />
//                                       )
//                                     )}
//                                   </div>
//                                   <span className="text-sm text-gray-500 ml-2">
//                                     {review.date}
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                             <p className="text-gray-700">{review.comment}</p>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="text-center py-8 bg-gray-50 rounded-lg">
//                         <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
//                         <h4 className="text-lg font-medium text-gray-600">
//                           No Reviews Yet
//                         </h4>
//                         <p className="text-gray-500 mt-1">
//                           Be the first to review this course
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Career Outcomes Tab */}
//                 {activeTab === "career" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       Career Opportunities
//                     </h3>

//                     {course.careerOutcomes?.jobRoles && (
//                       <div className="mb-6">
//                         <h4 className="font-medium text-lg mb-3">
//                           Potential Job Roles
//                         </h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           {course.careerOutcomes.jobRoles.map((role, index) => (
//                             <div
//                               key={index}
//                               className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
//                             >
//                               <div className="flex items-center mb-2">
//                                 <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
//                                 <h5 className="font-medium">{role.title}</h5>
//                               </div>
//                               {role.averageSalary && (
//                                 <div className="flex items-center text-gray-700 mb-1">
//                                   <DollarSign className="h-4 w-4 text-green-500 mr-2" />
//                                   <span>Avg. Salary: {role.averageSalary}</span>
//                                 </div>
//                               )}
//                               {role.demand && (
//                                 <div className="flex items-center text-gray-700">
//                                   <Percent className="h-4 w-4 text-purple-500 mr-2" />
//                                   <span>Market Demand: {role.demand}</span>
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {course.careerOutcomes?.skills && (
//                       <div className="mb-6">
//                         <h4 className="font-medium text-lg mb-3">
//                           Skills You'll Gain
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {course.careerOutcomes.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {course.careerOutcomes?.companies && (
//                       <div>
//                         <h4 className="font-medium text-lg mb-3">
//                           Companies That Hire These Skills
//                         </h4>
//                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                           {course.careerOutcomes.companies.map(
//                             (company, index) => (
//                               <div
//                                 key={index}
//                                 className="flex items-center bg-gray-50 p-3 rounded-lg"
//                               >
//                                 <Building className="h-5 w-5 text-gray-500 mr-2" />
//                                 <span>{company}</span>
//                               </div>
//                             )
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Price Card */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="text-3xl font-bold">
//                   ${course.price.discounted || course.price.original}
//                 </div>
//                 {course.price.discounted && (
//                   <div className="flex items-center">
//                     <span className="text-gray-500 line-through mr-2">
//                       ${course.price.original}
//                     </span>
//                     <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
//                       {Math.round(
//                         ((course.price.original - course.price.discounted) /
//                           course.price.original) *
//                           100
//                       )}
//                       % off
//                     </span>
//                   </div>
//                 )}
//               </div>

//               {course.price.discounted && course.price.endsAt && (
//                 <div className="bg-orange-50 border border-orange-100 rounded p-3 mb-4 flex items-center">
//                   <Clock4 className="h-5 w-5 text-orange-500 mr-2" />
//                   <div className="text-sm text-orange-800">
//                     <span className="font-medium">Sale ends in:</span>{" "}
//                     {course.price.endsAt}
//                   </div>
//                 </div>
//               )}

//               <div className="space-y-3 mb-6">
//                 <div className="flex items-center">
//                   <Clock className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>{course.duration} total length</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FileText className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>
//                     {course.curriculum?.modules?.reduce(
//                       (acc, module) => acc + (module.lessons?.length || 0),
//                       0
//                     )}{" "}
//                     lessons
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <GraduationCap className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>{course.skillLevel}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Users className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>
//                     {course.studentsEnrolled?.toLocaleString()} students
//                     enrolled
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <Laptop className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>{course.accessPeriod}</span>
//                 </div>
//                 {course.certificationProvided?.yes && (
//                   <div className="flex items-center">
//                     <Award className="h-5 w-5 text-gray-500 mr-3" />
//                     <span>Certificate of completion</span>
//                   </div>
//                 )}
//               </div>

//               <div className="space-y-3">
//                 {alreadyPurchased ? (
//                   <button className="w-full bg-green-100 text-green-800 py-3 px-4 rounded-md font-medium flex items-center justify-center cursor-default">
//                     <CheckCircle className="h-5 w-5 mr-2" />
//                     Already Enrolled
//                   </button>
//                 ) : (
//                   <>
//                     <button
//                       onClick={handleEnroll}
//                       className={`w-full ${
//                         inCart
//                           ? "bg-gray-100 text-gray-800"
//                           : "bg-blue-600 text-white hover:bg-blue-700"
//                       } py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors`}
//                     >
//                       {inCart ? (
//                         <>
//                           <CheckCircle className="h-5 w-5 mr-2" />
//                           Added to Cart
//                         </>
//                       ) : (
//                         <>
//                           <CreditCard className="h-5 w-5 mr-2" />
//                           Add to Cart
//                         </>
//                       )}
//                     </button>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={handleWishlist}
//                         className={`flex-1 ${
//                           inWishlist
//                             ? "bg-pink-100 text-pink-700 border-pink-200"
//                             : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
//                         } py-3 px-4 rounded-md font-medium flex items-center justify-center border transition-colors`}
//                       >
//                         <Heart
//                           className={`h-5 w-5 mr-2 ${
//                             inWishlist ? "fill-current" : ""
//                           }`}
//                         />
//                         Wishlist
//                       </button>

//                       <button
//                         onClick={handleShare}
//                         className="flex-1 bg-gray-100 text-gray-800 border border-gray-200 py-3 px-4 rounded-md font-medium flex items-center justify-center hover:bg-gray-200 transition-colors"
//                       >
//                         <Share2 className="h-5 w-5 mr-2" />
//                         Share
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <h4 className="font-medium mb-2">This course includes:</h4>
//                 <ul className="space-y-2">
//                   {course.features?.map((feature, index) => (
//                     <li key={index} className="flex items-center text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {course.moneyBackGuarantee && (
//                 <div className="mt-6 pt-6 border-t border-gray-200 flex items-center">
//                   <Gift className="h-8 w-8 text-green-500 mr-3" />
//                   <div>
//                     <h4 className="font-medium">Money-Back Guarantee</h4>
//                     <p className="text-sm text-gray-600">
//                       {course.moneyBackGuarantee}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;















// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import * as LucideIcons from "lucide-react";
// import {
//   Clock,
//   Award,
//   User,
//   Star,
//   CheckCircle,
//   MessageCircle,
//   Clock4,
//   Briefcase,
//   FileText,
//   CreditCard,
//   Percent,
//   Building,
//   ChevronsRight,
//   ChevronLeft,
//   Share2,
//   Heart,
//   Loader2,
//   AlertTriangle,
//   Users,
//   Laptop,
//   DollarSign,
//   Gift,
//   GraduationCap,
// } from "lucide-react";
// import { useCart } from "../store/cart"; // Adjust path as needed

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   // Cart context hooks
//   const {
//     isInCart,
//     isInWishlist,
//     isPurchased,
//     addToCart,
//     removeFromCart,
//     handleWishlist,
//     handleShare
//   } = useCart();

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://myidemy.onrender.com/api/data/service/${id}`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCourse(data.response);
//         window.scrollTo(0, 0);
//       } catch (error) {
//         console.error("Error fetching course details:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseDetails();
//   }, [id]);

//   const getIcon = (iconName) => {
//     const IconComponent = LucideIcons[iconName] || LucideIcons.BookOpen;
//     return <IconComponent size={24} />;
//   };

//   // Handle enrollment/cart actions
//   const handleEnroll = () => {
//     if (!course) return;

//     if (isPurchased(course._id)) {
//       toast.info("You already own this course");
//       return;
//     }

//     if (isInCart(course._id)) {
//       removeFromCart(course._id);
//     } else {
//       addToCart({
//         _id: course._id,
//         service: course.service,
//         price: course.price,
//         image: course.images?.[0],
//         instructor: course.instructor.name,
//         duration: course.duration
//       });
//     }
//   };

//   const handleWishlistToggle = () => {
//     setIsWishlisted(!isWishlisted);
//     handleWishlist(course);
//     toast.info(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
//   };

//   const handleShareCourse = () => {
//     handleShare(course);
//     toast.info("Course link copied to clipboard!");
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md">
//           <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800">
//             Loading Course Details
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Please wait while we fetch the course information...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md max-w-md w-full">
//           <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             Failed to Load Course Details
//           </h2>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
//             onClick={() => window.location.reload()}
//           >
//             <ChevronLeft className="h-4 w-4 mr-2" />
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // No course data
//   if (!course) {
//     return (
//       <div className="container mx-auto p-6">
//         <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
//           <p className="font-medium">No course details available.</p>
//         </div>
//       </div>
//     );
//   }

//   // Determine button states
//   const alreadyPurchased = isPurchased(course._id);
//   const inCart = isInCart(course._id);
//   const inWishlist = isInWishlist(course._id);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white py-8">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex items-center mb-2">
//             <button
//               onClick={() => window.history.back()}
//               className="mr-4 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <div className="flex items-center">
//               <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
//                 {getIcon(course.icon)}
//               </div>
//               <h1 className="text-2xl text-white md:text-3xl lg:text-4xl font-bold">
//                 {course.service}
//               </h1>
//             </div>
//           </div>
//           <p className="text-lg md:text-xl text-blue-100 mt-2 max-w-3xl">
//             {course.description}
//           </p>

//           <div className="flex flex-wrap items-center mt-6 gap-4">
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Star className="h-4 w-4 mr-1 text-yellow-300" />
//               <span>
//                 {course.overallRating} ({course.totalReviews} reviews)
//               </span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Clock className="h-4 w-4 mr-1" />
//               <span>{course.duration}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Award className="h-4 w-4 mr-1" />
//               <span>{course.skillLevel}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <User  className="h-4 w-4 mr-1" />
//               <span>{course.instructor.name}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
//           {/* Left Column - Course Details */}
//           <div className="lg:w-2/3">
//             {/* Course Images */}
//             {course.images && course.images.length > 0 && (
//               <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//                 <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-4">
//                   <img
//                     src={course.images[activeImageIndex] || "/placeholder.svg"}
//                     alt={`${course.service} preview`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex space-x-2 overflow-x-auto pb-2">
//                   {course.images.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setActiveImageIndex(index)}
//                       className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 ${
//                         index === activeImageIndex
//                           ? "border-blue-500"
//                           : "border-transparent"
//                       }`}
//                     >
//                       <img
//                         src={image || "/placeholder.svg"}
//                         alt={`Thumbnail ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Tabs Navigation */}
//             <div className="bg-white rounded-lg shadow-md mb-6">
//               <div className="flex overflow-x-auto border-b">
//                 <button
//                   onClick={() => setActiveTab("overview")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "overview"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Overview
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("curriculum")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "curriculum"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Curriculum
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("instructor")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "instructor"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Instructor
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("reviews")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "reviews"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Reviews ({course.totalReviews})
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("career")}
//                   className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
//                     activeTab === "career"
//                       ? "border-b-2 border-blue-500 text-blue-700"
//                       : "text-gray-600 hover:text-blue-700"
//                   }`}
//                 >
//                   Career Outcomes
//                 </button>
//               </div>

//               {/* Tab Content */}
//               <div className="p-6">
//                 {/* Overview Tab */}
//                 {activeTab === "overview" && (
//                   <div>
//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         About This Course
//                       </h3>
//                       <p className="text-gray-700">{course.description}</p>

//                       <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
//                         <p className="text-sm text-blue-800">
//                           <strong>Prerequisites:</strong> {course.prerequisites}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         Course Features
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {course.certificationProvided?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Certification</p>
//                               <p className="text-sm text-gray-600">
//                                 Issued by{" "}
//                                 {course.certificationProvided.issuingAuthority}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.projectBasedLearning?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">
//                                 Project-Based Learning
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 {course.projectBasedLearning.numberOfProjects}{" "}
//                                 hands-on projects
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.mentorshipSupport?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Mentorship Support</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.mentorshipSupport
//                                   .liveDoubtSolvingSessions
//                                   ? "Live doubt-solving sessions available"
//                                   : "Email support available"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.discussionForum?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Discussion Forum</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.discussionForum.communityAccess
//                                   ? "Access to community forums"
//                                   : "Q&A support"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.assignmentsAndQuizzes?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Assignments and Quizzes</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.assignmentsAndQuizzes.autoGraded
//                                   ? "Auto-graded exercises"
//                                   : "Practice exercises"} included
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.accessPeriod && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Lifetime Access</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.accessPeriod}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         What You'll Learn
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                         {course.learningOutcomes?.map((outcome, index) => (
//                           <div
//                             key={index}
//                             className="flex items-start bg-gray-50 p-3 rounded-md"
//                           >
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                             <p className="text-gray-700">{outcome}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         Target Audience
//                       </h3>
//                       <div className="space-y-3">
//                         {course.targetAudience?.map((audience, index) => (
//                           <div key={index} className="flex items-start">
//                             <ChevronsRight className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
//                             <p className="text-gray-700">{audience}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Curriculum Tab */}
//                 {activeTab === "curriculum" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       Course Curriculum
//                     </h3>

//                     {course.curriculum?.modules?.map((module, index) => (
//                       <div
//                         key={index}
//                         className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
//                       >
//                         <div className="bg-gray-50 p-4 border-b border-gray-200">
//                           <h4 className="font-semibold text-lg">
//                             Module {index + 1}: {module.title}
//                           </h4>
//                           <p className="text-sm text-gray-600 mt-1">
//                             {module.lessons?.length || 0} lessons •{" "}
//                             {module.duration}
//                           </p>
//                         </div>
//                         <div className="divide-y divide-gray-200">
//                           {module.lessons?.map((lesson, lessonIndex) => (
//                             <div
//                               key={lessonIndex}
//                               className="p-4 hover:bg-gray-50 flex justify-between items-center"
//                             >
//                               <div className="flex items-start">
//                                 {lesson.type === "video" ? (
//                                   <LucideIcons.Video className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
//                                 ) : lesson.type === "quiz" ? (
//                                   <LucideIcons.FileQuestion className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
//                                 ) : lesson.type === "assignment" ? (
//                                   <LucideIcons.ClipboardList className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
//                                 ) : (
//                                   <LucideIcons.FileText className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
//                                 )}
//                                 <div>
//                                   <h5 className="font-medium">
//                                     {lesson.title}
//                                   </h5>
//                                   {lesson.description && (
//                                     <p className="text-sm text-gray-600">
//                                       {lesson.description}
//                                     </p>
//                                   )}
//                                 </div>
//                               </div>
//                               <span className="text-sm text-gray-500">
//                                 {lesson.duration}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Instructor Tab */}
//                 {activeTab === "instructor" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">About the Instructor</h3>
//                     <div className="flex flex-col md:flex-row items-start gap-6">
//                       <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
//                         {course.instructor?.profilePicture ? (
//                           <img
//                             src={course.instructor.profilePicture || "/placeholder.svg"}
//                             alt={course.instructor.name}
//                             className="w-full h-full object-cover"
//                           />
//                         ) : (
//                           <User  className="w-full h-full p-4 text-gray-400" />
//                         )}
//                       </div>
//                       <div>
//                         <h4 className="text-lg font-medium">
//                           {course.instructor?.name}
//                         </h4>
//                         <p className="text-gray-600">
//                           {course.instructor?.title}
//                         </p>
//                         <div className="flex items-center mt-1 mb-3">
//                           <Star className="h-4 w-4 text-yellow-400 mr-1" />
//                           <span className="text-sm">
//                             {course.instructor?.rating} Instructor Rating •{" "}
//                             {course.instructor?.students?.toLocaleString()}{" "}
//                             Students
//                           </span>
//                         </div>
//                         <p className="text-gray-700 mb-4">
//                           {course.instructor?.bio}
//                         </p>
//                         {course.instructor?.expertise && (
//                           <div className="mb-4">
//                             <h5 className="font-medium mb-2">Expertise</h5>
//                             <div className="flex flex-wrap gap-2">
//                               {course.instructor.expertise.map(
//                                 (skill, index) => (
//                                   <span
//                                     key={index}
//                                     className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
//                                   >
//                                     {skill}
//                                   </span>
//                                 )
//                               )}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Reviews Tab */}
//                 {activeTab === "reviews" && (
//                   <div>
//                     <div className="flex flex-col md:flex-row justify-between mb-6">
//                       <div>
//                         <h3 className="text-xl font-semibold">
//                           Student Reviews
//                         </h3>
//                         <div className="flex items-center mt-2">
//                           <div className="flex">
//                             {[...Array(Math.floor(course.overallRating))].map(
//                               (_, i) => (
//                                 <Star
//                                   key={i}
//                                   className="h-5 w-5 text-yellow-400 fill-current"
//                                 />
//                               )
//                             )}
//                             {course.overallRating % 1 !== 0 && (
//                               <LucideIcons.StarHalf className="h-5 w-5 text-yellow-400" />
//                             )}
//                             {[
//                               ...Array(
//                                 5 -
//                                   Math.floor(course.overallRating) -
//                                   (course.overallRating % 1 !== 0 ? 1 : 0)
//                               ),
//                             ].map((_, i) => (
//                               <Star
//                                 key={i + Math.floor(course.overallRating) + (course.overallRating % 1 !== 0 ? 1 : 0)}
//                                 className="h-5 w-5 text-gray-300"
//                               />
//                             ))}
//                           </div>
//                           <span className="ml-2 text-xl font-medium">
//                             {course.overallRating}
//                           </span>
//                           <span className="ml-2 text-gray-600">
//                             ({course.totalReviews} reviews)
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {course.reviews && course.reviews.length > 0 ? (
//                       <div className="space-y-6">
//                         {course.reviews.map((review, index) => (
//                           <div
//                             key={index}
//                             className="border-b border-gray-200 pb-6 last:border-b-0"
//                           >
//                             <div className="flex items-center mb-2">
//                               <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-medium mr-3">
//                                 {review.name
//                                   .split(" ")
//                                   .map((n) => n[0])
//                                   .join("")
//                                   .toUpperCase()}
//                               </div>
//                               <div>
//                                 <h4 className="font-medium">{review.name}</h4>
//                                 <div className="flex items-center">
//                                   <div className="flex">
//                                     {[...Array(review.rating)].map((_, i) => (
//                                       <Star
//                                         key={i}
//                                         className="h-4 w-4 text-yellow-400 fill-current"
//                                       />
//                                     ))}
//                                     {[...Array(5 - review.rating)].map(
//                                       (_, i) => (
//                                         <Star
//                                           key={i + review.rating}
//                                           className="h-4 w-4 text-gray-300"
//                                         />
//                                       )
//                                     )}
//                                   </div>
//                                   <span className="text-sm text-gray-500 ml-2">
//                                     {review.date}
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                             <p className="text-gray-700">{review.comment}</p>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="text-center py-8 bg-gray-50 rounded-lg">
//                         <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-3" />
//                         <h4 className="text-lg font-medium text-gray-600">
//                           No Reviews Yet
//                         </h4>
//                         <p className="text-gray-500 mt-1">
//                           Be the first to review this course
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {/* Career Outcomes Tab */}
//                 {activeTab === "career" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">
//                       Career Opportunities
//                     </h3>

//                     {course.careerOutcomes?.jobRoles && (
//                       <div className="mb-6">
//                         <h4 className="font-medium text-lg mb-3">
//                           Potential Job Roles
//                         </h4>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                           {course.careerOutcomes.jobRoles.map((role, index) => (
//                             <div
//                               key={index}
//                               className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
//                             >
//                               <div className="flex items-center mb-2">
//                                 <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
//                                 <h5 className="font-medium">{role.title}</h5>
//                               </div>
//                               {role.averageSalary && (
//                                 <div className="flex items-center text-gray-700 mb-1">
//                                   <DollarSign className="h-4 w-4 text-green-500 mr-2" />
//                                   <span>Avg. Salary: {role.averageSalary}</span>
//                                 </div>
//                               )}
//                               {role.demand && (
//                                 <div className="flex items-center text-gray-700">
//                                   <Percent className="h-4 w-4 text-purple-500 mr-2" />
//                                   <span>Market Demand: {role.demand}</span>
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {course.careerOutcomes?.skills && (
//                       <div className="mb-6">
//                         <h4 className="font-medium text-lg mb-3">
//                           Skills You'll Gain
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {course.careerOutcomes.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     {course.careerOutcomes?.companies && (
//                       <div>
//                         <h4 className="font-medium text-lg mb-3">
//                           Companies That Hire These Skills
//                         </h4>
//                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                           {course.careerOutcomes.companies.map(
//                             (company, index) => (
//                               <div
//                                 key={index}
//                                 className="flex items-center bg-gray-50 p-3 rounded-lg"
//                               >
//                                 <Building className="h-5 w-5 text-gray-500 mr-2" />
//                                 <span>{company}</span>
//                               </div>
//                             )
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Price Card */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="text-3xl font-bold">
//                   ${course.price.discounted || course.price.original}
//                 </div>
//                 {course.price.discounted && (
//                   <div className="flex items-center">
//                     <span className="text-gray-500 line-through mr-2">
//                       ${course.price.original}
//                     </span>
//                     <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
//                       {Math.round(
//                         ((course.price.original - course.price.discounted) /
//                           course.price.original) *
//                           100
//                       )}
//                       % off
//                     </span>
//                   </div>
//                 )}
//               </div>

//               {course.price.discounted && course.price.endsAt && (
//                 <div className="bg-orange-50 border border-orange-100 rounded p-3 mb-4 flex items-center">
//                   <Clock4 className="h-5 w-5 text-orange-500 mr-2" />
//                   <div className="text-sm text-orange-800">
//                     <span className="font-medium">Sale ends in:</span>{" "}
//                     {course.price.endsAt}
//                   </div>
//                 </div>
//               )}

//               <div className="space-y-3 mb-6">
//                 <div className="flex items-center">
//                   <Clock className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>{course.duration} total length</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FileText className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>
//                     {course.curriculum?.modules?.reduce(
//                       (acc, module) => acc + (module.lessons?.length || 0),
//                       0
//                     )}{" "}
//                     lessons
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <GraduationCap className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>{course.skillLevel}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Users className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>
//                     {course.studentsEnrolled?.toLocaleString()} students enrolled
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <Laptop className="h-5 w-5 text-gray-500 mr-3" />
//                   <span>{course.accessPeriod}</span>
//                 </div>
//                 {course.certificationProvided?.yes && (
//                   <div className="flex items-center">
//                     <Award className="h-5 w-5 text-gray-500 mr-3" />
//                     <span>Certificate of completion</span>
//                   </div>
//                 )}
//               </div>

//               <div className="space-y-3">
//                 {alreadyPurchased ? (
//                   <button className="w-full bg-green-100 text-green-800 py-3 px-4 rounded-md font-medium flex items-center justify-center cursor-default">
//                     <CheckCircle className="h-5 w-5 mr-2" />
//                     Already Enrolled
//                   </button>
//                 ) : (
//                   <>
//                     <button
//                       onClick={handleEnroll}
//                       className={`w-full ${
//                         inCart
//                           ? "bg-gray-100 text-gray-800"
//                           : "bg-blue-600 text-white hover:bg-blue-700"
//                       } py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors`}
//                     >
//                       {inCart ? (
//                         <>
//                           <CheckCircle className="h-5 w-5 mr-2" />
//                           Added to Cart
//                         </>
//                       ) : (
//                         <>
//                           <CreditCard className="h-5 w-5 mr-2" />
//                           Add to Cart
//                         </>
//                       )}
//                     </button>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={handleWishlistToggle}
//                         className={`flex-1 ${
//                           inWishlist
//                             ? "bg-pink-100 text-pink-700 border-pink-200"
//                             : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
//                         } py-3 px-4 rounded-md font-medium flex items-center justify-center border transition-colors`}
//                       >
//                         <Heart
//                           className={`h-5 w-5 mr-2 ${
//                             inWishlist ? "fill-current" : ""
//                           }`}
//                         />
//                         Wishlist
//                       </button>
//                       <button
//                         onClick={handleShareCourse}
//                         className="flex-1 bg-gray-100 text-gray-800 border border-gray-200 py-3 px-4 rounded-md font-medium flex items-center justify-center hover:bg-gray-200 transition-colors"
//                       >
//                         <Share2 className="h-5 w-5 mr-2" />
//                         Share
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>

//               <div className="mt-6 pt-6 border-t border-gray-200">
//                 <h4 className="font-medium mb-2">This course includes:</h4>
//                 <ul className="space-y-2">
//                   {course.features?.map((feature, index) => (
//                     <li key={index} className="flex items-center text-sm">
//                       <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {course.moneyBackGuarantee && (
//                 <div className="mt-6 pt-6 border-t border-gray-200 flex items-center">
//                   <Gift className="h-8 w-8 text-green-500 mr-3" />
//                   <div>
//                     <h4 className="font-medium">Money-Back Guarantee</h4>
//                     <p className="text-sm text-gray-600">
//                       {course.moneyBackGuarantee}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseDetail;
































// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import * as LucideIcons from "lucide-react";
// import {
//   Clock,
//   Award,
//   BookOpen,
//   User,
//   Star,
//   Calendar,
//   CheckCircle,
//   MessageCircle,
//   Clock4,
//   Briefcase,
//   FileText,
//   CreditCard,
//   Percent,
//   Building,
//   ChevronsRight,
//   ChevronLeft,
//   Share2,
//   Heart,
//   Loader2,
//   AlertTriangle,
//   Users,
//   Laptop,
//   DollarSign,
//   Gift,
//   GraduationCap,
// } from "lucide-react";
// import { useCart } from "../store/cart"; // Import the Cart context hook

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
  
//   // Use the cart context
//   const {
//     isInCart,
//     isInWishlist,
//     isPurchased,
//     handleEnroll,
//     handleWishlist,
//     handleShare,
//   } = useCart();

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://myidemy.onrender.com/api/data/service/${id}`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCourse(data.response);
//         // Scroll to top when course data is loaded
//         window.scrollTo(0, 0);
//       } catch (error) {
//         console.error("Error fetching course details:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseDetails();
//   }, [id]);

//   const getIcon = (iconName) => {
//     const IconComponent = LucideIcons[iconName] || LucideIcons.BookOpen;
//     return <IconComponent size={24} />;
//   };

//   // Check whether the course is in cart/wishlist/purchased
//   const isCoursePurchased = course ? isPurchased(course._id) : false;
//   const isCourseInCart = course ? isInCart(course._id) : false;
//   const isCourseInWishlist = course ? isInWishlist(course._id) : false;

//   // Handlers using CartContext functions
//   const handleCourseEnroll = () => {
//     if (course) {
//       handleEnroll(course);
//     }
//   };

//   const handleCourseWishlist = () => {
//     if (course) {
//       handleWishlist(course);
//     }
//   };

//   const handleCourseShare = () => {
//     if (course) {
//       handleShare(course);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md">
//           <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800">
//             Loading Course Details
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Please wait while we fetch the course information...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md max-w-md w-full">
//           <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             Failed to Load Course Details
//           </h2>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
//             onClick={() => window.location.reload()}
//           >
//             <ChevronLeft className="h-4 w-4 mr-2" />
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="container mx-auto p-6">
//         <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
//           <p className="font-medium">No course details available.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-gray py-8">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex items-center mb-2">
//             <button
//               onClick={() => window.history.back()}
//               className="mr-4 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <div className="flex items-center">
//               <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
//                 {getIcon(course.icon)}
//               </div>
//               <h1 className="text-2xl text-gray-800 md:text-3xl lg:text-4xl font-bold">
//                 {course.service}
//               </h1>
//             </div>
//           </div>
//           <p className="text-lg md:text-xl text-blue-100 mt-2 max-w-3xl">
//             {course.description}
//           </p>

//           <div className="flex flex-wrap items-center mt-6 gap-4">
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Star className="h-4 w-4 mr-1 text-yellow-300" />
//               <span>
//                 {course.overallRating} ({course.totalReviews} reviews)
//               </span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Clock className="h-4 w-4 mr-1" />
//               <span>{course.duration}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Award className="h-4 w-4 mr-1" />
//               <span>{course.skillLevel}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <User className="h-4 w-4 mr-1" />
//               <span>{course.instructor.name}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
//           {/* Left Column - Course Details */}
//           <div className="lg:w-2/3">
//             {/* Course Images */}
//             {course.images && course.images.length > 0 && (
//               <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//                 <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-4">
//                   <img
//                     src={course.images[activeImageIndex]}
//                     alt={`${course.service} preview`}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex space-x-2 overflow-x-auto pb-2">
//                   {course.images.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setActiveImageIndex(index)}
//                       className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 ${
//                         index === activeImageIndex
//                           ? "border-blue-500"
//                           : "border-transparent"
//                       }`}
//                     >
//                       <img
//                         src={image}
//                         alt={`Thumbnail ${index + 1}`}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Tabs Navigation with Capsules */}
//             <div className="bg-white rounded-lg shadow-md mb-6">
//               <div className="flex overflow-x-auto p-3 space-x-2 border-b">
//                 <button
//                   onClick={() => setActiveTab("overview")}
//                   className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
//                     activeTab === "overview"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Overview
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("curriculum")}
//                   className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
//                     activeTab === "curriculum"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Curriculum
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("instructor")}
//                   className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
//                     activeTab === "instructor"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Instructor
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("reviews")}
//                   className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
//                     activeTab === "reviews"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Reviews ({course.totalReviews})
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("career")}
//                   className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
//                     activeTab === "career"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Career Outcomes
//                 </button>
//               </div>

//               {/* Tab Content */}
//               <div className="p-6">
//                 {/* Overview Tab */}
//                 {activeTab === "overview" && (
//                   <div>
//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         About This Course
//                       </h3>
//                       <p className="text-gray-700">{course.description}</p>

//                       <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
//                         <p className="text-sm text-blue-800">
//                           <strong>Prerequisites:</strong> {course.prerequisites}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         Course Features
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {course.certificationProvided?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Certification</p>
//                               <p className="text-sm text-gray-600">
//                                 Issued by{" "}
//                                 {course.certificationProvided.issuingAuthority}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.projectBasedLearning?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">
//                                 Project-Based Learning
//                               </p>
//                               <p className="text-sm text-gray-600">
//                                 {course.projectBasedLearning.numberOfProjects}{" "}
//                                 hands-on projects
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.mentorshipSupport?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Mentorship Support</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.mentorshipSupport
//                                   .liveDoubtSolvingSessions
//                                   ? "Live doubt-solving sessions available"
//                                   : "Email support available"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.discussionForum?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Discussion Forum</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.discussionForum.communityAccess
//                                   ? "Access to community forums"
//                                   : "Q&A support"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.assignmentsAndQuizzes?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Assignments & Quizzes</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.assignmentsAndQuizzes.gradedAssignments
//                                   ? "Graded assignments included"
//                                   : "Practice quizzes available"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.lifetimeAccess && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Lifetime Access</p>
//                               <p className="text-sm text-gray-600">
//                                 Access course content forever
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         What You Will Learn
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                         {course.learningOutcomes?.map((outcome, index) => (
//                           <div key={index} className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <p className="text-gray-700">{outcome}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">Target Audience</h3>
//                       <div className="grid grid-cols-1 gap-3">
//                         {course.targetAudience?.map((audience, index) => (
//                           <div key={index} className="flex items-start">
//                             <User className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
//                             <p className="text-gray-700">{audience}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Curriculum Tab */}
//                 {activeTab === "curriculum" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Course Curriculum</h3>
                    
//                     {course.curriculum?.map((section, sectionIndex) => (
//                       <div key={sectionIndex} className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
//                         <div className="bg-gray-100 px-4 py-3 flex justify-between items-center">
//                           <h4 className="font-medium text-lg">
//                             {section.title}
//                           </h4>
//                           <div className="text-sm text-gray-600">
//                             {section.lessons?.length} lessons • {section.duration}
//                           </div>
//                         </div>
                        
//                         <div className="divide-y divide-gray-200">
//                           {section.lessons?.map((lesson, lessonIndex) => (
//                             <div key={lessonIndex} className="p-4 hover:bg-gray-50">
//                               <div className="flex items-start justify-between">
//                                 <div className="flex items-start flex-1">
//                                   <div className="mt-1 mr-3">
//                                     {lesson.type === "video" ? (
//                                       <LucideIcons.Video className="h-5 w-5 text-blue-500" />
//                                     ) : lesson.type === "quiz" ? (
//                                       <LucideIcons.FileQuestion className="h-5 w-5 text-yellow-500" />
//                                     ) : lesson.type === "assignment" ? (
//                                       <LucideIcons.Clipboard className="h-5 w-5 text-green-500" />
//                                     ) : (
//                                       <LucideIcons.File className="h-5 w-5 text-gray-500" />
//                                     )}
//                                   </div>
//                                   <div>
//                                     <h5 className="font-medium">{lesson.title}</h5>
//                                     {lesson.description && (
//                                       <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
//                                     )}
//                                   </div>
//                                 </div>
//                                 <div className="text-sm text-gray-500 flex items-center">
//                                   <Clock className="h-4 w-4 mr-1" />
//                                   {lesson.duration}
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Instructor Tab */}
//                 {activeTab === "instructor" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">About the Instructor</h3>
                    
//                     <div className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 p-6 rounded-lg">
//                       <div className="flex-shrink-0">
//                         <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
//                           {course.instructor?.profileImage ? (
//                             <img 
//                               src={course.instructor.profileImage} 
//                               alt={course.instructor.name}
//                               className="w-full h-full object-cover" 
//                             />
//                           ) : (
//                             <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500">
//                               <User size={40} />
//                             </div>
//                           )}
//                         </div>
//                       </div>
                      
//                       <div className="flex-1">
//                         <h4 className="text-lg font-medium">{course.instructor?.name}</h4>
//                         <p className="text-gray-600 mt-1">{course.instructor?.title}</p>
                        
//                         <div className="flex items-center mt-2 space-x-4">
//                           <div className="flex items-center">
//                             <Star className="h-4 w-4 text-yellow-400 mr-1" />
//                             <span className="text-sm">{course.instructor?.rating} Instructor Rating</span>
//                           </div>
//                           <div className="flex items-center">
//                             <Users className="h-4 w-4 text-blue-500 mr-1" />
//                             <span className="text-sm">{course.instructor?.students} Students</span>
//                           </div>
//                           <div className="flex items-center">
//                             <BookOpen className="h-4 w-4 text-green-500 mr-1" />
//                             <span className="text-sm">{course.instructor?.courses} Courses</span>
//                           </div>
//                         </div>
                        
//                         <div className="mt-4">
//                           <p className="text-gray-700">{course.instructor?.bio}</p>
//                         </div>
                        
//                         {course.instructor?.expertise && (
//                           <div className="mt-4">
//                             <h5 className="font-medium mb-2">Areas of Expertise</h5>
//                             <div className="flex flex-wrap gap-2">
//                               {course.instructor.expertise.map((skill, index) => (
//                                 <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
//                                   {skill}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Reviews Tab */}
//                 {activeTab === "reviews" && (
//                   <div>
//                     <div className="flex flex-col md:flex-row justify-between mb-6">
//                       <h3 className="text-xl font-semibold">Student Reviews</h3>
//                       <div className="flex items-center mt-2 md:mt-0">
//                         <div className="flex items-center">
//                           <Star className="h-5 w-5 text-yellow-400" />
//                           <span className="text-lg font-medium ml-1">{course.overallRating}</span>
//                         </div>
//                         <span className="text-gray-600 ml-2">
//                           ({course.totalReviews} reviews)
//                         </span>
//                       </div>
//                     </div>
                    
//                     {/* Rating Breakdown */}
//                     <div className="bg-gray-50 p-4 rounded-lg mb-6">
//                       <h4 className="font-medium mb-3">Rating Breakdown</h4>
//                       <div className="space-y-2">
//                         {[5, 4, 3, 2, 1].map((rating) => (
//                           <div key={rating} className="flex items-center">
//                             <div className="w-12 text-sm">{rating} stars</div>
//                             <div className="flex-1 mx-3">
//                               <div className="w-full bg-gray-200 rounded-full h-2">
//                                 <div
//                                   className="bg-yellow-400 h-2 rounded-full"
//                                   style={{
//                                     width: `${
//                                       course.ratingBreakdown?.[`rating${rating}`] || 0
//                                     }%`,
//                                   }}
//                                 ></div>
//                               </div>
//                             </div>
//                             <div className="text-sm text-gray-600">
//                               {course.ratingBreakdown?.[`rating${rating}`] || 0}%
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
                    
//                     {/* Reviews List */}
//                     <div className="space-y-4">
//                       {course.reviews?.map((review, index) => (
//                         <div key={index} className="border rounded-lg p-4">
//                           <div className="flex justify-between items-start">
//                             <div className="flex items-center">
//                               <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
//                                 {review.user.name.charAt(0)}
//                               </div>
//                               <div className="ml-3">
//                                 <h5 className="font-medium">{review.user.name}</h5>
//                                 <div className="flex items-center mt-1">
//                                   {Array.from({ length: 5 }).map((_, i) => (
//                                     <Star
//                                       key={i}
//                                       className={`h-4 w-4 ${
//                                         i < review.rating ? "text-yellow-400" : "text-gray-300"
//                                       }`}
//                                     />
//                                   ))}
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-sm text-gray-500">
//                               {new Date(review.date).toLocaleDateString()}
//                             </div>
//                           </div>
//                           <p className="mt-3 text-gray-700">{review.comment}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Career Outcomes Tab */}
//                 {activeTab === "career" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Career Opportunities</h3>
                    
//                     {/* Job Roles */}
//                     <div className="mb-6">
//                       <h4 className="font-medium text-lg mb-3">Potential Job Roles</h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {course.careerOutcomes?.potentialJobs?.map((job, index) => (
//                           <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 flex items-start">
//                             <Briefcase className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
//                             <div>
//                               <h5 className="font-medium">{job.title}</h5>
//                               {job.averageSalary && (
//                                 <p className="text-sm text-gray-600 mt-1">
//                                   <span className="flex items-center">
//                                     <DollarSign className="h-4 w-4 mr-1" />
//                                     Avg. Salary: {job.averageSalary}
//                                   </span>
//                                 </p>
//                               )}
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
                    
//                     {/* Skills You'll Gain */}
//                     <div className="mb-6">
//                       <h4 className="font-medium text-lg mb-3">Skills You'll Gain</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {course.careerOutcomes?.skillsGained?.map((skill, index) => (
//                           <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     {/* Industry Demand */}
//                     {course.careerOutcomes?.industryDemand && (
//                       <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
//                         <h4 className="font-medium flex items-center">
//                           <Laptop className="h-5 w-5 text-blue-500 mr-2" />
//                           Industry Demand
//                         </h4>
//                         <p className="mt-2 text-gray-700">
//                           {course.careerOutcomes.industryDemand}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Sidebar */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
//               {/* Price Section */}
//               <div className="mb-6">
//                 {course.discount?.active ? (
//                   <div>
//                     <div className="flex items-center mb-2">
//                       <span className="text-3xl font-bold">${course.discount.discountedPrice}</span>
//                       <span className="text-xl text-gray-500 line-through ml-2">
//                         ${course.price}
//                       </span>
//                       <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
//                         {course.discount.percentage}% off
//                       </span>
//                     </div>
//                       {course.discount.expiry && (
//                         <div className="flex items-center text-gray-600 text-sm mb-2">
//                           <Clock className="h-4 w-4 mr-1" />
//                           <span>Offer ends in: {course.discount.expiry}</span>
//                         </div>
//                       )}
//                   </div>
//                 ) : (
//                   <div className="text-3xl font-bold mb-2">${course.price}</div>
//                 )}
                
//                 {/* Money Back Guarantee */}
//                 {course.moneyBackGuarantee?.yes && (
//                   <div className="flex items-center text-sm text-gray-600 mb-4">
//                     <Gift className="h-4 w-4 mr-1 text-green-500" />
//                     <span>{course.moneyBackGuarantee.days}-day money-back guarantee</span>
//                   </div>
//                 )}
//               </div>

//               {/* Action Buttons */}
//               <div className="space-y-3 mb-6">
//                 {isCoursePurchased ? (
//                   <button 
//                     className="w-full py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors flex items-center justify-center"
//                     disabled
//                   >
//                     <CheckCircle className="h-5 w-5 mr-2" />
//                     Already Enrolled
//                   </button>
//                 ) : (
//                   <button
//                     onClick={handleCourseEnroll}
//                     className={`w-full py-3 font-medium rounded-md transition-colors flex items-center justify-center ${
//                       isCourseInCart 
//                         ? "bg-gray-100 text-gray-800 hover:bg-gray-200" 
//                         : "bg-blue-600 text-white hover:bg-blue-700"
//                     }`}
//                   >
//                     {isCourseInCart ? (
//                       <>
//                         <CheckCircle className="h-5 w-5 mr-2" />
//                         Added to Cart
//                       </>
//                     ) : (
//                       <>
//                         <ChevronsRight className="h-5 w-5 mr-2" />
//                         Enroll Now
//                       </>
//                     )}
//                   </button>
//                 )}

//                 <button
//                   onClick={handleCourseWishlist}
//                   className="w-full py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
//                 >
//                   {isCourseInWishlist ? (
//                     <>
//                       <Heart className="h-5 w-5 mr-2 text-red-500 fill-red-500" />
//                       Saved to Wishlist
//                     </>
//                   ) : (
//                     <>
//                       <Heart className="h-5 w-5 mr-2" />
//                       Add to Wishlist
//                     </>
//                   )}
//                 </button>

//                 <button 
//                   onClick={handleCourseShare}
//                   className="w-full py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
//                 >
//                   <Share2 className="h-5 w-5 mr-2" />
//                   Share This Course
//                 </button>
//               </div>

//               {/* Course Includes */}
//               <div className="border-t border-gray-200 pt-4 mb-6">
//                 <h3 className="font-semibold mb-3">This Course Includes</h3>
//                 <ul className="space-y-2">
//                   <li className="flex items-center text-gray-700">
//                     <Clock4 className="h-5 w-5 text-gray-500 mr-3" />
//                     <span>{course.duration} of content</span>
//                   </li>
//                   <li className="flex items-center text-gray-700">
//                     <FileText className="h-5 w-5 text-gray-500 mr-3" />
//                     <span>{course.lessons || '0'} lessons</span>
//                   </li>
//                   <li className="flex items-center text-gray-700">
//                     <MessageCircle className="h-5 w-5 text-gray-500 mr-3" />
//                     <span>{course.discussionForum?.yes ? 'Discussion forums' : 'No discussion forums'}</span>
//                   </li>
//                   <li className="flex items-center text-gray-700">
//                     <Calendar className="h-5 w-5 text-gray-500 mr-3" />
//                     <span>{course.lifetimeAccess ? 'Lifetime access' : 'Limited time access'}</span>
//                   </li>
//                   <li className="flex items-center text-gray-700">
//                     <Laptop className="h-5 w-5 text-gray-500 mr-3" />
//                     <span>Access on {course.accessibleOn}</span>
//                   </li>
//                   {course.certificationProvided?.yes && (
//                     <li className="flex items-center text-gray-700">
//                       <Award className="h-5 w-5 text-gray-500 mr-3" />
//                       <span>Certificate of completion</span>
//                     </li>
//                   )}
//                 </ul>
//               </div>

//               {/* Coupon Code */}
//               {course.discount?.couponsAccepted && (
//                 <div className="border-t border-gray-200 pt-4 mb-6">
//                   <h3 className="font-semibold mb-3">Apply Coupon</h3>
//                   <div className="flex">
//                     <input
//                       type="text"
//                       placeholder="Enter coupon code"
//                       className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
//                     />
//                     <button className="bg-gray-200 text-gray-700 font-medium px-4 rounded-r-md hover:bg-gray-300 transition-colors">
//                       Apply
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Training Options / Enterprise */}
//               {course.enterprise?.available && (
//                 <div className="border-t border-gray-200 pt-4">
//                   <h3 className="font-semibold mb-3">For Teams & Businesses</h3>
//                   <div className="bg-gray-50 p-4 rounded-md">
//                     <div className="flex items-start">
//                       <Building className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
//                       <div>
//                         <p className="font-medium">Enterprise Training Solution</p>
//                         <p className="text-sm text-gray-600 mt-1">
//                           Get this course for your team. Special pricing available for groups.
//                         </p>
//                       </div>
//                     </div>
//                     <button className="mt-3 w-full py-2 border border-blue-500 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors">
//                       Get Enterprise Quote
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Courses Section */}
//       {course.relatedCourses && course.relatedCourses.length > 0 && (
//         <div className="bg-gray-100 py-8">
//           <div className="container mx-auto px-4 lg:px-8">
//             <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {course.relatedCourses.map((relCourse) => (
//                 <div key={relCourse._id} className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <div className="h-40 overflow-hidden">
//                     <img
//                       src={relCourse.thumbnail}
//                       alt={relCourse.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold text-lg mb-2 line-clamp-2">
//                       {relCourse.title}
//                     </h3>
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center">
//                         <Star className="h-4 w-4 text-yellow-400 mr-1" />
//                         <span className="text-sm text-gray-700">
//                           {relCourse.rating} ({relCourse.reviews} reviews)
//                         </span>
//                       </div>
//                       <div className="text-sm text-gray-600">{relCourse.duration}</div>
//                     </div>
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center">
//                         <User className="h-4 w-4 text-gray-500 mr-1" />
//                         <span className="text-sm text-gray-600">{relCourse.instructor}</span>
//                       </div>
//                       {relCourse.discount ? (
//                         <div className="flex items-center">
//                           <span className="font-bold text-lg">${relCourse.discountPrice}</span>
//                           <span className="text-sm text-gray-500 line-through ml-1">
//                             ${relCourse.price}
//                           </span>
//                         </div>
//                       ) : (
//                         <span className="font-bold text-lg">${relCourse.price}</span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseDetail;
























// import React, { useEffect, useState } from "react";
// import { useParams,Link } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import * as LucideIcons from "lucide-react";
// import {
//   Clock,
//   Award,
//   BookOpen,
//   User,
//   Star,
//   Calendar,
//   CheckCircle,
//   MessageCircle,
//   Clock4,
//   Briefcase,
//   FileText,
//   CreditCard,
//   Percent,
//   Building,
//   ChevronsRight,
//   ChevronLeft,
//   Share2,
//   Heart,
//   Loader2,
//   AlertTriangle,
//   Users,
//   Laptop,
//   DollarSign,
//   Gift,
//   GraduationCap,
// } from "lucide-react";
// import { useCart } from "../store/cart"; // Import the Cart context hook

// const CourseDetail = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("overview");
  
//   // Use the cart context
//   const {
//     isInCart,
//     isInWishlist,
//     isPurchased,
//     handleEnroll,
//     handleWishlist,
//     handleShare,
//   } = useCart();

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://myidemy.onrender.com/api/data/service/${id}`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setCourse(data.response);
//         // Scroll to top when course data is loaded
//         window.scrollTo(0, 0);
//       } catch (error) {
//         console.error("Error fetching course details:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourseDetails();
//   }, [id]);

//   // For demo purposes, using the provided JSON data
//   useEffect(() => {
//     // This is for demonstration - in a real app, you'd use the API response
//     const demoData = {
//       "_id": "67d6bf34455c6f6a3bd52fe6",
//       "service": "Data Science & Machine Learning",
//       "description": "Learn Python, data analysis, and machine learning techniques with real-world applications.",
//       "price": "₹18,999 - ₹29,999",
//       "provider": "MyiDemy",
//       "icon": "BarChart",
//       "duration": "6 months",
//       "skillLevel": "Beginner",
//       "modeOfLearning": "Self-paced",
//       "certificationProvided": {
//         "yes": true,
//         "issuingAuthority": "MyiDemy"
//       },
//       "prerequisites": "Basic statistics knowledge required",
//       "projectBasedLearning": {
//         "yes": true,
//         "numberOfProjects": 3
//       },
//       "courseOutline": [
//         "Introduction to Python",
//         "Data Analysis with Pandas",
//         "Machine Learning Algorithms",
//         "Data Visualization with Matplotlib",
//         "Capstone Project"
//       ],
//       "instructor": {
//         "name": "Jane Smith",
//         "experience": "7 years",
//         "notableProjects": "Worked with Fortune 500 companies on data projects",
//         "rating": 4.9
//       },
//       "mentorshipSupport": {
//         "yes": true,
//         "liveDoubtSolvingSessions": true
//       },
//       "discussionForum": {
//         "yes": true,
//         "communityAccess": true
//       },
//       "doubtResolutionTime": "Within 12 hours",
//       "officeHours": "Available on weekdays",
//       "careerSupport": {
//         "resumeBuilding": true,
//         "interviewPreparation": true,
//         "internships": true
//       },
//       "assignmentsAndQuizzes": {
//         "yes": true,
//         "weeklyAssignments": true,
//         "mcqTests": true
//       },
//       "installmentOptions": {
//         "yes": true,
//         "emiPlans": true
//       },
//       "discountsAndOffers": {
//         "earlyBirdDiscount": true,
//         "referralBonus": true
//       },
//       "scholarshipsAvailable": {
//         "yes": true,
//         "criteria": "Based on financial need"
//       },
//       "overallRating": 4.8,
//       "totalReviews": 156,
//       "topReviews": [
//         "The course was very informative and well-structured.",
//         "I gained practical skills that I can apply in my job."
//       ],
//       "averageSalaryOfGraduates": "₹8 LPA - ₹15 LPA",
//       "hiringPartners": ["Company F", "Company G", "Company H"],
//       "jobGuarantee": {
//         "yes": true,
//         "conditions": "Complete all projects and assessments"
//       },
//       "internshipOpportunities": {
//         "yes": true,
//         "partnerCompanies": ["Company I", "Company J"]
//       },
//       "leaderboardAndBadges": true,
//       "aiPoweredLearningRecommendations": true,
//       "interactiveCodingPlatform": true,
//       "featured": true
//     };
    
//     setCourse(demoData);
//     setLoading(false);
//   }, []);

//   const getIcon = (iconName) => {
//     const IconComponent = LucideIcons[iconName] || LucideIcons.BookOpen;
//     return <IconComponent size={24} />;
//   };

//   // Check whether the course is in cart/wishlist/purchased
//   const isCoursePurchased = course ? isPurchased(course._id) : false;
//   const isCourseInCart = course ? isInCart(course._id) : false;
//   const isCourseInWishlist = course ? isInWishlist(course._id) : false;

//   // Handlers using CartContext functions
//   const handleCourseEnroll = () => {
//     if (course) {
//       handleEnroll(course);
//     }
//   };

//   const handleCourseWishlist = () => {
//     if (course) {
//       handleWishlist(course);
//     }
//   };

//   const handleCourseShare = () => {
//     if (course) {
//       handleShare(course);
//     }
//   };

//   // Format price for display
//   const formatPrice = (price) => {
//     if (!price) return "Free";
//     return price;
//   };

//   // Extract min price for calculations
//   const getMinPrice = (price) => {
//     if (!price) return 0;
//     // Extract the first number from the price range
//     const match = price.match(/\d+/);
//     return match ? parseInt(match[0], 10) : 0;
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md">
//           <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800">
//             Loading Course Details
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Please wait while we fetch the course information...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md max-w-md w-full">
//           <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             Failed to Load Course Details
//           </h2>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
//             onClick={() => window.location.reload()}
//           >
//             <ChevronLeft className="h-4 w-4 mr-2" />
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!course) {
//     return (
//       <div className="container mx-auto p-6">
//         <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
//           <p className="font-medium">No course details available.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <ToastContainer position="top-right" autoClose={3000} />

//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white py-8">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex items-center mb-2">
//             <button
//               onClick={() => window.history.back()}
//               className="mr-4 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <div className="flex items-center">
//               <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
//                 {getIcon(course.icon)}
//               </div>
//               <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 {course.service}
//               </h1>
//             </div>
//           </div>
//           <p className="text-lg md:text-xl text-blue-100 mt-2 max-w-3xl">
//             {course.description}
//           </p>

//           <div className="flex flex-wrap items-center mt-6 gap-4">
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Star className="h-4 w-4 mr-1 text-yellow-300" />
//               <span>
//                 {course.overallRating} ({course.totalReviews} reviews)
//               </span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Clock className="h-4 w-4 mr-1" />
//               <span>{course.duration}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <Award className="h-4 w-4 mr-1" />
//               <span>{course.skillLevel}</span>
//             </div>
//             <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
//               <User className="h-4 w-4 mr-1" />
//               <span>{course.instructor.name}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
//           {/* Left Column - Course Details */}
//           <div className="lg:w-2/3">
//             {/* Tabs Navigation with Capsules */}
//             <div className="bg-white rounded-lg shadow-md mb-6">
//               <div className="flex overflow-x-auto p-3 space-x-2 border-b">
//                 <button
//                   onClick={() => setActiveTab("overview")}
//                   className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
//                     activeTab === "overview"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Overview
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("curriculum")}
//                   className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
//                     activeTab === "curriculum"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Curriculum
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("instructor")}
//                   className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
//                     activeTab === "instructor"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Instructor
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("reviews")}
//                   className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
//                     activeTab === "reviews"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Reviews ({course.totalReviews})
//                 </button>
//                 <button
//                   onClick={() => setActiveTab("career")}
//                   className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
//                     activeTab === "career"
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   }`}
//                 >
//                   Career Outcomes
//                 </button>
//               </div>

//               {/* Tab Content */}
//               <div className="p-6">
//                 {/* Overview Tab */}
//                 {activeTab === "overview" && (
//                   <div>
//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         About This Course
//                       </h3>
//                       <p className="text-gray-700">{course.description}</p>

//                       <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
//                         <p className="text-sm text-blue-800">
//                           <strong>Prerequisites:</strong> {course.prerequisites}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         Course Features
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {course.certificationProvided?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Certification</p>
//                               <p className="text-sm text-gray-600">
//                                 Issued by {course.certificationProvided.issuingAuthority}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.projectBasedLearning?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Project-Based Learning</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.projectBasedLearning.numberOfProjects} hands-on projects
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.mentorshipSupport?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Mentorship Support</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.mentorshipSupport.liveDoubtSolvingSessions
//                                   ? "Live doubt-solving sessions available"
//                                   : "Email support available"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.discussionForum?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Discussion Forum</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.discussionForum.communityAccess
//                                   ? "Access to community forums"
//                                   : "Q&A support"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.assignmentsAndQuizzes?.yes && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Assignments & Quizzes</p>
//                               <p className="text-sm text-gray-600">
//                                 {course.assignmentsAndQuizzes.weeklyAssignments
//                                   ? "Weekly assignments included"
//                                   : "Practice quizzes available"}
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.interactiveCodingPlatform && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Interactive Coding Platform</p>
//                               <p className="text-sm text-gray-600">
//                                 Hands-on coding practice environment
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                         {course.leaderboardAndBadges && (
//                           <div className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <div>
//                               <p className="font-medium">Leaderboard & Badges</p>
//                               <p className="text-sm text-gray-600">
//                                 Gamified learning experience
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">
//                         What You Will Learn
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                         {course.courseOutline?.map((outcome, index) => (
//                           <div key={index} className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                             <p className="text-gray-700">{outcome}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <h3 className="text-xl font-semibold mb-3">Course Details</h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="flex items-center p-3 bg-gray-50 rounded-md">
//                           <Clock className="h-5 w-5 text-blue-500 mr-2" />
//                           <div>
//                             <p className="text-sm text-gray-600">Duration</p>
//                             <p className="font-medium">{course.duration}</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center p-3 bg-gray-50 rounded-md">
//                           <GraduationCap className="h-5 w-5 text-blue-500 mr-2" />
//                           <div>
//                             <p className="text-sm text-gray-600">Level</p>
//                             <p className="font-medium">{course.skillLevel}</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center p-3 bg-gray-50 rounded-md">
//                           <Laptop className="h-5 w-5 text-blue-500 mr-2" />
//                           <div>
//                             <p className="text-sm text-gray-600">Mode</p>
//                             <p className="font-medium">{course.modeOfLearning}</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center p-3 bg-gray-50 rounded-md">
//                           <MessageCircle className="h-5 w-5 text-blue-500 mr-2" />
//                           <div>
//                             <p className="text-sm text-gray-600">Doubt Resolution</p>
//                             <p className="font-medium">{course.doubtResolutionTime}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Curriculum Tab */}
//                 {activeTab === "curriculum" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Course Curriculum</h3>
                    
//                     <div className="mb-4 bg-blue-50 p-4 rounded-md border border-blue-100">
//                       <p className="text-blue-800 font-medium">Course Outline</p>
//                       <p className="text-sm text-blue-700 mt-1">
//                         This course has been structured to build your skills step by step from foundational concepts to advanced applications.
//                       </p>
//                     </div>
                    
//                     {course.courseOutline?.map((section, sectionIndex) => (
//                       <div key={sectionIndex} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
//                         <div className="bg-gray-100 px-4 py-3">
//                           <h4 className="font-medium text-lg flex items-center">
//                             <span className="bg-blue-600 text-white rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">
//                               {sectionIndex + 1}
//                             </span>
//                             {section}
//                           </h4>
//                         </div>
//                         <div className="p-4 bg-white">
//                           <p className="text-gray-600 text-sm">
//                             Module content includes lectures, hands-on exercises, and practice problems.
//                           </p>
//                         </div>
//                       </div>
//                     ))}
                    
//                     <div className="mt-6 bg-yellow-50 p-4 rounded-md border border-yellow-100">
//                       <p className="flex items-center text-yellow-800 font-medium">
//                         <AlertTriangle className="h-5 w-5 mr-2" />
//                         Note
//                       </p>
//                       <p className="text-sm text-yellow-700 mt-1">
//                         The curriculum is subject to updates to ensure the content remains relevant with industry standards.
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Instructor Tab */}
//                 {activeTab === "instructor" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">About the Instructor</h3>
                    
//                     <div className="flex flex-col md:flex-row items-start gap-6 bg-gray-50 p-6 rounded-lg">
//                       <div className="flex-shrink-0">
//                         <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
//                           <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500">
//                             <User size={40} />
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="flex-1">
//                         <h4 className="text-lg font-medium">{course.instructor?.name}</h4>
//                         <p className="text-gray-600 mt-1">Data Science Instructor</p>
                        
//                         <div className="flex items-center mt-2">
//                           <Star className="h-4 w-4 text-yellow-400 mr-1" />
//                           <span className="text-sm">{course.instructor?.rating} Instructor Rating</span>
//                         </div>
                        
//                         <div className="mt-4">
//                           <p className="text-gray-700">Experience: {course.instructor?.experience}</p>
//                           <p className="text-gray-700 mt-2">{course.instructor?.notableProjects}</p>
//                         </div>
                        
//                         <div className="mt-4">
//                           <h5 className="font-medium mb-2">Office Hours</h5>
//                           <p className="text-gray-700">{course.officeHours}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Reviews Tab */}
//                 {activeTab === "reviews" && (
//                   <div>
//                     <div className="flex flex-col md:flex-row justify-between mb-6">
//                       <h3 className="text-xl font-semibold">Student Reviews</h3>
//                       <div className="flex items-center mt-2 md:mt-0">
//                         <div className="flex items-center">
//                           <Star className="h-5 w-5 text-yellow-400" />
//                           <span className="text-lg font-medium ml-1">{course.overallRating}</span>
//                         </div>
//                         <span className="text-gray-600 ml-2">
//                           ({course.totalReviews} reviews)
//                         </span>
//                       </div>
//                     </div>
                    
//                     {/* Rating Breakdown */}
//                     <div className="bg-gray-50 p-4 rounded-lg mb-6">
//                       <h4 className="font-medium mb-3">Rating Breakdown</h4>
//                       <div className="space-y-2">
//                         {[5, 4, 3, 2, 1].map((rating) => {
//                           // Calculate percentage based on overall rating
//                           const percentage = rating === Math.round(course.overallRating) 
//                             ? 70 
//                             : rating > Math.round(course.overallRating) 
//                               ? 20 
//                               : 10;
                          
//                           return (
//                             <div key={rating} className="flex items-center">
//                               <div className="w-12 text-sm">{rating} stars</div>
//                               <div className="flex-1 mx-3">
//                                 <div className="w-full bg-gray-200 rounded-full h-2">
//                                   <div
//                                     className="bg-yellow-400 h-2 rounded-full"
//                                     style={{ width: `${percentage}%` }}
//                                   ></div>
//                                 </div>
//                               </div>
//                               <div className="text-sm text-gray-600">
//                                 {percentage}%
//                               </div>
//                             </div>
//                           );
//                         })}
//                       </div>
//                     </div>
                    
//                     {/* Reviews List */}
//                     <div className="space-y-4">
//                       {course.topReviews?.map((review, index) => (
//                         <div key={index} className="border rounded-lg p-4">
//                           <div className="flex justify-between items-start">
//                             <div className="flex items-center">
//                               <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
//                                 {String.fromCharCode(65 + index)}
//                               </div>
//                               <div className="ml-3">
//                                 <h5 className="font-medium">Student {String.fromCharCode(65 + index)}</h5>
//                                 <div className="flex items-center mt-1">
//                                   {Array.from({ length: 5 }).map((_, i) => (
//                                     <Star
//                                       key={i}
//                                       className={`h-4 w-4 ${
//                                         i < 5 ? "text-yellow-400" : "text-gray-300"
//                                       }`}
//                                     />
//                                   ))}
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-sm text-gray-500">
//                               Recent
//                             </div>
//                           </div>
//                           <p className="mt-3 text-gray-700">{review}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Career Outcomes Tab */}
//                 {activeTab === "career" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Career Opportunities</h3>
                    
//                     {/* Average Salary */}
//                     <div className="bg-green-50 p-4 rounded-md border border-green-100 mb-6">
//                       <h4 className="font-medium flex items-center text-green-800">
//                         <DollarSign className="h-5 w-5 mr-2" />
//                         Average Salary Range
//                       </h4>
//                       <p className="mt-2 text-green-700 text-lg font-medium">
//                         {course.averageSalaryOfGraduates}
//                       </p>
//                       <p className="mt-1 text-sm text-green-600">
//                         Based on student outcomes after course completion
//                       </p>
//                     </div>
//                   {/* Career Support */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                     <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
//                       <h4 className="font-medium flex items-center">
//                         <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
//                         Career Support
//                       </h4>
//                       <p className="mt-2 text-gray-700 text-sm">
//                         Our career services include resume reviews, interview preparation, and job application assistance.
//                       </p>
//                     </div>
                    
//                     <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
//                       <h4 className="font-medium flex items-center">
//                         <Link className="h-5 w-5 text-blue-500 mr-2" />
//                         Industry Connections
//                       </h4>
//                       <p className="mt-2 text-gray-700 text-sm">
//                         Connect with industry professionals through networking events and mentor sessions.
//                       </p>
//                     </div>
//                   </div>

//                   {/* Job Roles */}
//                   <div className="mb-6">
//                     <h4 className="font-medium mb-3">Potential Job Roles</h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                       {course.jobRoles?.map((role, index) => (
//                         <div key={index} className="flex items-start">
//                           <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
//                           <p className="text-gray-700">{role}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Success Stories */}
//                   <div className="mb-6">
//                     <h4 className="font-medium mb-3">Success Stories</h4>
//                     <div className="space-y-4">
//                       {course.successStories?.map((story, index) => (
//                         <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
//                           <p className="text-gray-700 italic">{story}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Placement Partners */}
//                   <div>
//                     <h4 className="font-medium mb-3">Placement Partners</h4>
//                     <div className="flex flex-wrap gap-4">
//                       {course.placementPartners?.map((partner, index) => (
//                         <div key={index} className="bg-gray-100 px-4 py-2 rounded-md">
//                           <p className="text-gray-700">{partner}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   </div>
//                   )}

//                   {/* FAQs Tab */}
//                   {activeTab === "faqs" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                    
//                     <div className="space-y-4">
//                       {course.faqs?.map((faq, index) => (
//                         <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
//                           <div className="bg-gray-50 p-4 font-medium">
//                             <h4 className="flex items-center justify-between">
//                               <span>{faq.question}</span>
//                               <ChevronDown className="h-5 w-5 text-gray-500" />
//                             </h4>
//                           </div>
//                           <div className="p-4 bg-white">
//                             <p className="text-gray-700">{faq.answer}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
                    
//                     <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
//                       <p className="flex items-center text-blue-800 font-medium">
//                         <HelpCircle className="h-5 w-5 mr-2" />
//                         Still have questions?
//                       </p>
//                       <p className="text-sm text-blue-700 mt-1">
//                         Contact our support team for more information about this course.
//                       </p>
//                       <button className="mt-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
//                         <MessageSquare className="h-4 w-4 mr-2" />
//                         Contact Support
//                       </button>
//                     </div>
//                   </div>
//                   )}

//                   {/* Enrollment Tab */}
//                   {activeTab === "enrollment" && (
//                   <div>
//                     <h3 className="text-xl font-semibold mb-4">Enrollment Details</h3>
                    
//                     {/* Pricing */}
//                     <div className="bg-gray-50 p-6 rounded-lg mb-6">
//                       <h4 className="font-medium mb-3">Pricing Options</h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="border border-gray-200 rounded-lg p-4 bg-white">
//                           <h5 className="font-medium">Full Course</h5>
//                           <p className="text-2xl font-bold mt-2">{course.price}</p>
//                           <p className="text-sm text-gray-600 mt-1">One-time payment</p>
//                           <ul className="mt-3 space-y-2">
//                             <li className="flex items-start">
//                               <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//                               <span className="text-sm">Full course access</span>
//                             </li>
//                             <li className="flex items-start">
//                               <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//                               <span className="text-sm">Certificate upon completion</span>
//                             </li>
//                             <li className="flex items-start">
//                               <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//                               <span className="text-sm">Lifetime access to materials</span>
//                             </li>
//                           </ul>
//                         </div>
                        
//                         <div className="border border-blue-200 rounded-lg p-4 bg-white">
//                           <div className="flex justify-between items-center">
//                             <h5 className="font-medium">Installment Plan</h5>
//                             <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Popular</span>
//                           </div>
//                           <p className="text-2xl font-bold mt-2">{course.installmentPrice}</p>
//                           <p className="text-sm text-gray-600 mt-1">Per month for 3 months</p>
//                           <ul className="mt-3 space-y-2">
//                             <li className="flex items-start">
//                               <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//                               <span className="text-sm">All features of full course</span>
//                             </li>
//                             <li className="flex items-start">
//                               <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//                               <span className="text-sm">No additional fees</span>
//                             </li>
//                             <li className="flex items-start">
//                               <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//                               <span className="text-sm">Flexible payment schedule</span>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Upcoming Batches */}
//                     <div className="mb-6">
//                       <h4 className="font-medium mb-3">Upcoming Batches</h4>
//                       <div className="overflow-x-auto">
//                         <table className="min-w-full bg-white border border-gray-200">
//                           <thead>
//                             <tr>
//                               <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">Batch Start Date</th>
//                               <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">Schedule</th>
//                               <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">Seats Available</th>
//                               <th className="px-4 py-2 border-b text-left text-sm font-medium text-gray-700">Action</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {course.upcomingBatches?.map((batch, index) => (
//                               <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                                 <td className="px-4 py-3 border-b text-sm">{batch.startDate}</td>
//                                 <td className="px-4 py-3 border-b text-sm">{batch.schedule}</td>
//                                 <td className="px-4 py-3 border-b text-sm">{batch.seatsAvailable} seats</td>
//                                 <td className="px-4 py-3 border-b text-sm">
//                                   <button className="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-blue-600 hover:bg-blue-700">
//                                     Enroll Now
//                                   </button>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
                    
//                     {/* Refund Policy */}
//                     <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
//                       <h4 className="font-medium flex items-center text-yellow-800">
//                         <AlertCircle className="h-5 w-5 mr-2" />
//                         Refund Policy
//                       </h4>
//                       <p className="mt-2 text-sm text-yellow-700">
//                         {course.refundPolicy}
//                       </p>
//                     </div>
//                   </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// };


// export default CourseDetail;



















import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as LucideIcons from "lucide-react";
import {
  Clock,
  Award,
  BookOpen,
  User,
  Star,
  Calendar,
  CheckCircle,
  MessageCircle,
  Clock4,
  Briefcase,
  FileText,
  CreditCard,
  Percent,
  Building,
  ChevronsRight,
  ChevronLeft,
  Share2,
  Heart,
  Loader2,
  AlertTriangle,
  Users,
  Laptop,
  DollarSign,
  Gift,
  GraduationCap,
  Link,
  ChevronDown,
  HelpCircle,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { useCart } from "../store/cart";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const {
    isInCart,
    isInWishlist,
    isPurchased,
    handleEnroll,
    handleWishlist,
    handleShare,
  } = useCart();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://myidemy.onrender.com/api/data/service/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCourse(data.response);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching course details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const getIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName] || LucideIcons.BookOpen;
    return <IconComponent size={24} />;
  };

  // Check whether the course is in cart/wishlist/purchased
  const isCoursePurchased = course ? isPurchased(course._id) : false;
  const isCourseInCart = course ? isInCart(course._id) : false;
  const isCourseInWishlist = course ? isInWishlist(course._id) : false;

  // Handlers using CartContext functions
  const handleCourseEnroll = () => {
    if (course) {
      handleEnroll(course);
    }
  };

  const handleCourseWishlist = () => {
    if (course) {
      handleWishlist(course);
    }
  };

  const handleCourseShare = () => {
    if (course) {
      handleShare(course);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="text-center p-8 rounded-lg bg-white shadow-md">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">
            Loading Course Details
          </h2>
          <p className="text-gray-500 mt-2">
            Please wait while we fetch the course information...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="text-center p-8 rounded-lg bg-white shadow-md max-w-md w-full">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Failed to Load Course Details
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center mx-auto"
            onClick={() => window.location.reload()}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          <p className="font-medium">No course details available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-gray-600 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center mb-2">
            <button
              onClick={() => window.history.back()}
              className="mr-4 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center">
              <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                {getIcon(course.icon)}
              </div>
              <h1 className="text-2xl md:text-3xl text-gray-100 lg:text-4xl font-bold">
                {course.service}
              </h1>
            </div>
          </div>
          <p className="text-lg md:text-xl text-blue-100 mt-2 max-w-3xl">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center mt-6 gap-4">
            <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <Star className="h-4 w-4 mr-1 text-yellow-300" />
              <span>
                {course.overallRating} ({course.totalReviews} reviews)
              </span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <Award className="h-4 w-4 mr-1" />
              <span>{course.skillLevel}</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 px-3 py-1 rounded-full">
              <User className="h-4 w-4 mr-1" />
              <span>{course.instructor.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Course Details */}
          <div className="lg:w-2/3">
            {/* Course Images */}
            {/* {course.images && course.images.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-4">
                  <img
                    src={course.images[activeImageIndex]}
                    alt={`${course.service} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {course.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-16 w-24 flex-shrink-0 rounded-md overflow-hidden border-2 ${
                        index === activeImageIndex
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )} */}

            {/* Tabs Navigation with Capsules */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="flex overflow-x-auto p-3 space-x-2 border-b">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
                    activeTab === "overview"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
                    activeTab === "curriculum"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Curriculum
                </button>
                <button
                  onClick={() => setActiveTab("instructor")}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
                    activeTab === "instructor"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Instructor
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
                    activeTab === "reviews"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Reviews ({course.totalReviews})
                </button>
                <button
                  onClick={() => setActiveTab("career")}
                  className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap ${
                    activeTab === "career"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Career Outcomes
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">
                        About This Course
                      </h3>
                      <p className="text-gray-700">{course.description}</p>

                      <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
                        <p className="text-sm text-blue-800">
                          <strong>Prerequisites:</strong> {course.prerequisites}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">
                        Course Features
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.certificationProvided?.yes && (
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Certification</p>
                              <p className="text-sm text-gray-600">
                                Issued by {course.certificationProvided.issuingAuthority}
                              </p>
                            </div>
                          </div>
                        )}
                        {course.projectBasedLearning?.yes && (
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Project-Based Learning</p>
                              <p className="text-sm text-gray-600">
                                {course.projectBasedLearning.numberOfProjects} hands-on projects
                              </p>
                            </div>
                          </div>
                        )}
                        {course.mentorshipSupport?.yes && (
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Mentorship Support</p>
                              <p className="text-sm text-gray-600">
                                {course.mentorshipSupport.liveDoubtSolvingSessions
                                  ? "Live doubt-solving sessions available"
                                  : "Email support available"}
                              </p>
                            </div>
                          </div>
                        )}
                        {course.discussionForum?.yes && (
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Discussion Forum</p>
                              <p className="text-sm text-gray-600">
                                {course.discussionForum.communityAccess
                                  ? "Access to community forums"
                                  : "Q&A support"}
                              </p>
                            </div>
                          </div>
                        )}
                        {course.assignmentsAndQuizzes?.yes && (
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Assignments & Quizzes</p>
                              <p className="text-sm text-gray-600">
                                {course.assignmentsAndQuizzes.weeklyAssignments
                                  ? "Weekly assignments"
                                  : ""}
                                {course.assignmentsAndQuizzes.weeklyAssignments &&
                                course.assignmentsAndQuizzes.mcqTests
                                  ? " and "
                                  : ""}
                                {course.assignmentsAndQuizzes.mcqTests
                                  ? "Multiple-choice tests"
                                  : ""}
                              </p>
                            </div>
                          </div>
                        )}
                        {course.interactiveCodingPlatform && (
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Interactive Coding Platform</p>
                              <p className="text-sm text-gray-600">
                                Practice coding directly in the browser
                              </p>
                            </div>
                          </div>
                        )}
                        {course.doubtResolutionTime && (
                          <div className="flex items-start">
                            <Clock4 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Doubt Resolution</p>
                              <p className="text-sm text-gray-600">
                                {course.doubtResolutionTime}
                              </p>
                            </div>
                          </div>
                        )}
                        {course.officeHours && (
                          <div className="flex items-start">
                            <Calendar className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Office Hours</p>
                              <p className="text-sm text-gray-600">
                                {course.officeHours}
                              </p>
                            </div>
                          </div>
                        )}
                        {course.leaderboardAndBadges && (
                          <div className="flex items-start">
                            <Award className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Gamification</p>
                              <p className="text-sm text-gray-600">
                                Leaderboards and achievement badges
                              </p>
                            </div>
                          </div>
                        )}
                        {course.aiPoweredLearningRecommendations && (
                          <div className="flex items-start">
                            <Laptop className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">AI-Powered Learning</p>
                              <p className="text-sm text-gray-600">
                                Personalized recommendations
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">
                        Payment Options
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <CreditCard className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                          <div>
                            <p className="font-medium">Price</p>
                            <p className="text-sm text-gray-600">
                              {course.price}
                            </p>
                          </div>
                        </div>
                        {course.installmentOptions?.yes && (
                          <div className="flex items-start">
                            <CreditCard className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">EMI Options</p>
                              <p className="text-sm text-gray-600">
                                {course.installmentOptions.emiPlans
                                  ? "Flexible EMI plans available"
                                  : "No EMI plans"}
                              </p>
                            </div>
                          </div>
                        )}
                        {course.discountsAndOffers?.earlyBirdDiscount && (
                          <div className="flex items-start">
                            <Percent className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Early Bird Discount</p>
                              <p className="text-sm text-gray-600">
                                Enroll early for special pricing
                              </p>
                            </div>
                          </div>
                        )}
                        {course.discountsAndOffers?.referralBonus && (
                          <div className="flex items-start">
                            <Gift className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Referral Bonus</p>
                              <p className="text-sm text-gray-600">
                                Get rewards for referrals
                              </p>
                            </div>
                          </div>
                        )}
                        {course.scholarshipsAvailable?.yes && (
                          <div className="flex items-start">
                            <GraduationCap className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">Scholarships</p>
                              <p className="text-sm text-gray-600">
                                Criteria: {course.scholarshipsAvailable.criteria}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Curriculum Tab */}
                {activeTab === "curriculum" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Course Curriculum</h3>
                    <div className="space-y-4">
                      {course.courseOutline?.map((topic, index) => (
                        <div
                          key={index}
                          className="p-4 border rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 font-medium">
                                {index + 1}
                              </div>
                              <span className="font-medium">{topic}</span>
                            </div>
                            <ChevronsRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 bg-blue-50 rounded-md">
                      <h4 className="font-medium flex items-center text-blue-800">
                        <FileText className="h-5 w-5 mr-2" />
                        Learning Format
                      </h4>
                      <p className="text-blue-700 mt-2">
                        {course.modeOfLearning}
                      </p>
                    </div>
                  </div>
                )}

                {/* Instructor Tab */}
                {activeTab === "instructor" && (
                  <div>
                    <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                      <div className="bg-blue-100 rounded-full p-4 md:p-6">
                        <User className="h-12 w-12 md:h-16 md:w-16 text-blue-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {course.instructor.name}
                        </h3>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-gray-700">
                            {course.instructor.rating} Instructor Rating
                          </span>
                        </div>
                        <div className="mt-4">
                          <p className="font-medium text-gray-700">Experience</p>
                          <p className="text-gray-600 mt-1">
                            {course.instructor.experience}
                          </p>
                        </div>
                        <div className="mt-4">
                          <p className="font-medium text-gray-700">
                            Notable Projects
                          </p>
                          <p className="text-gray-600 mt-1">
                            {course.instructor.notableProjects}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === "reviews" && (
                  <div>
                    <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                      <div className="text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold">Student Reviews</h3>
                        <p className="text-gray-600 mt-1">
                          {course.totalReviews} reviews for this course
                        </p>
                      </div>
                      <div className="flex items-center bg-blue-50 px-6 py-3 rounded-lg">
                        <div className="text-4xl font-bold text-blue-600 mr-3">
                          {course.overallRating}
                        </div>
                        <div>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < Math.floor(course.overallRating)
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Average Rating
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {course.topReviews?.map((review, index) => (
                        <div key={index} className="p-4 border rounded-md">
                          <div className="flex items-start">
                            <div className="bg-gray-100 rounded-full p-2 mr-3">
                              <User className="h-5 w-5 text-gray-500" />
                            </div>
                            <div>
                              <div className="flex text-yellow-400 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4" />
                                ))}
                              </div>
                              <p className="text-gray-700">{review}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Career Outcomes Tab */}
                {activeTab === "career" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Career Outcomes</h3>

                    <div className="p-4 bg-green-50 rounded-md mb-6">
                      <h4 className="flex items-center font-medium text-green-800">
                        <DollarSign className="h-5 w-5 mr-2" />
                        Average Salary of Graduates
                      </h4>
                      <p className="text-green-700 text-lg font-semibold mt-2">
                        {course.averageSalaryOfGraduates}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {course.jobGuarantee?.yes && (
                        <div className="p-4 border rounded-md">
                          <h4 className="flex items-center font-medium">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            Job Guarantee
                          </h4>
                          <p className="text-gray-600 mt-2">
                            Conditions: {course.jobGuarantee.conditions}
                          </p>
                        </div>
                      )}

                      {course.internshipOpportunities?.yes && (
                        <div className="p-4 border rounded-md">
                          <h4 className="flex items-center font-medium">
                            <Briefcase className="h-5 w-5 text-blue-500 mr-2" />
                            Internship Opportunities
                          </h4>
                          <p className="text-gray-600 mt-2">Partner Companies:</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {course.internshipOpportunities.partnerCompanies?.map(
                              (company, index) => (
                                <span
                                  key={index}
                                  className="bg-blue-50 text-blue-700 text-sm px-2 py-1 rounded"
                                >
                                  {company}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <h4 className="flex items-center font-medium mb-3">
                        <Building className="h-5 w-5 text-gray-700 mr-2" />
                        Hiring Partners
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.hiringPartners?.map((company, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>

                    {course.careerSupport && (
                      <div>
                        <h4 className="font-medium mb-3">Career Support Services</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {course.careerSupport.resumeBuilding && (
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Resume Building</span>
                            </div>
                          )}
                          {course.careerSupport.interviewPreparation && (
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Interview Preparation</span>
                            </div>
                          )}
                          {course.careerSupport.internships && (
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span>Internship Assistance</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Enrollment Card */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-16">
              <h3 className="text-2xl font-bold">{course.price}</h3>

              <button
                onClick={handleCourseEnroll}
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium mt-6 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isCoursePurchased ? "Go to Course" : isCourseInCart ? "Added to Cart" : "Enroll Now"}
              </button>

              <div className="flex justify-between mt-4">
                <button
                  onClick={handleCourseWishlist}
                  className={`flex items-center justify-center w-1/2 mr-2 py-2 rounded-md font-medium ${
                    isCourseInWishlist
                      ? "bg-red-50 text-red-600 border border-red-200"
                      : "bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 mr-2 ${
                      isCourseInWishlist ? "fill-current" : ""
                    }`}
                  />
                  Wishlist
                </button>
                <button
                  onClick={handleCourseShare}
                  className="flex items-center justify-center w-1/2 ml-2 py-2 bg-gray-50 text-gray-700 rounded-md font-medium border border-gray-200"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <h4 className="font-medium">This course includes:</h4>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">
                    {course.duration} of course content
                  </span>
                </div>

                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Comprehensive curriculum</span>
                </div>

                {course.projectBasedLearning?.yes && (
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="text-gray-700">
                      {course.projectBasedLearning.numberOfProjects} hands-on
                      projects
                    </span>
                  </div>
                )}

                {course.certificationProvided?.yes && (
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="text-gray-700">Certificate of completion</span>
                  </div>
                )}

                {course.mentorshipSupport?.yes && (
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="text-gray-700">Mentorship support</span>
                  </div>
                )}

                {course.careerSupport?.resumeBuilding && (
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="text-gray-700">Career services</span>
                  </div>
                )}

                <div className="flex items-center">
                  <Clock4 className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">Lifetime access</span>
                </div>
              </div>

              {course.featured && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-md">
                  <p className="text-yellow-800 flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="font-medium">Featured Course</span>
                  </p>
                  <p className="text-yellow-700 text-sm mt-1">
                    This is one of our most popular and highly-rated courses!
                  </p>
                </div>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Not sure? Contact our team for more information
                </p>
                <button className="text-blue-600 text-sm font-medium hover:underline mt-1">
                  Get Course Advice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;