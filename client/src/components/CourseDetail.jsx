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
//         const response = await fetch(`http://localhost:3000/api/data/service/${id}`); // Fetch service by ID
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
  Bookmark,
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
} from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/api/data/service/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCourse(data.response);
        // Scroll to top when course data is loaded
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

  const handleEnroll = () => {
    toast.success(`Successfully enrolled in ${course.service}!`);
    // Additional enrollment logic can be added here
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.info(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.info("Course link copied to clipboard!");
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
      <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-gray py-8">
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
              <h1 className="text-2xl text-gray-800 md:text-3xl lg:text-4xl font-bold">
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
        <div className="flex flex-col lg:flex-row gap-8 min-h-screen">
          {/* Left Column - Course Details */}
          <div className="lg:w-2/3">
            {/* Course Images */}
            {course.images && course.images.length > 0 && (
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
            )}

            {/* Tabs Navigation */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="flex overflow-x-auto border-b">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
                    activeTab === "overview"
                      ? "border-b-2 border-blue-500 text-blue-700"
                      : "text-gray-600 hover:text-blue-700"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("curriculum")}
                  className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
                    activeTab === "curriculum"
                      ? "border-b-2 border-blue-500 text-blue-700"
                      : "text-gray-600 hover:text-blue-700"
                  }`}
                >
                  Curriculum
                </button>
                <button
                  onClick={() => setActiveTab("instructor")}
                  className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
                    activeTab === "instructor"
                      ? "border-b-2 border-blue-500 text-blue-700"
                      : "text-gray-600 hover:text-blue-700"
                  }`}
                >
                  Instructor
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
                    activeTab === "reviews"
                      ? "border-b-2 border-blue-500 text-blue-700"
                      : "text-gray-600 hover:text-blue-700"
                  }`}
                >
                  Reviews ({course.totalReviews})
                </button>
                <button
                  onClick={() => setActiveTab("career")}
                  className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
                    activeTab === "career"
                      ? "border-b-2 border-blue-500 text-blue-700"
                      : "text-gray-600 hover:text-blue-700"
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
                                Issued by{" "}
                                {course.certificationProvided.issuingAuthority}
                              </p>
                            </div>
                          </div>
                        )}
                        {course.projectBasedLearning?.yes && (
                          <div className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <div>
                              <p className="font-medium">
                                Project-Based Learning
                              </p>
                              <p className="text-sm text-gray-600">
                                {course.projectBasedLearning.numberOfProjects}{" "}
                                hands-on projects
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
                                {course.mentorshipSupport
                                  .liveDoubtSolvingSessions
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
                              <p className="font-medium">
                                Assignments & Quizzes
                              </p>
                              <p className="text-sm text-gray-600">
                                {course.assignmentsAndQuizzes.weeklyAssignments
                                  ? "Weekly assignments"
                                  : ""}
                                {course.assignmentsAndQuizzes
                                  .weeklyAssignments &&
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
                              <p className="font-medium">
                                Interactive Coding Platform
                              </p>
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
                                Criteria:{" "}
                                {course.scholarshipsAvailable.criteria}
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
                    <h3 className="text-xl font-semibold mb-4">
                      Course Curriculum
                    </h3>
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
                          <p className="font-medium text-gray-700">
                            Experience
                          </p>
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
                        <h3 className="text-xl font-semibold">
                          Student Reviews
                        </h3>
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
                    <h3 className="text-xl font-semibold mb-4">
                      Career Outcomes
                    </h3>

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
                          <p className="text-gray-600 mt-2">
                            Partner Companies:
                          </p>
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
                        <h4 className="font-medium mb-3">
                          Career Support Services
                        </h4>
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
            <div className="bg-white rounded-lg    self-start sticky top-16 shadow-md p-6">
              <h3 className="text-2xl font-bold">{course.price}</h3>

              <button
                onClick={handleEnroll}
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium mt-6 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Enroll Now
              </button>

              <div className="flex justify-between mt-4">
                <button
                  onClick={handleWishlist}
                  lassName={`flex items-center justify-center w-1/2 mr-2 py-2 rounded-md font-medium ${
                    isWishlisted
                      ? "bg-red-50 text-red-600 border border-red-200"
                      : "bg-gray-50 text-gray-700 border border-gray-200"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 mr-2 ${
                      isWishlisted ? "fill-current" : ""
                    }`}
                  />
                  Wishlist
                </button>
                <button
                  onClick={handleShare}
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
                  <span className="text-gray-700">
                    Comprehensive curriculum
                  </span>
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
                    <span className="text-gray-700">
                      Certificate of completion
                    </span>
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
