import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Faq from "react-faq-component";
import {
  ChevronRight,
  Award,
  Users,
  Video,
  Globe,
  Star,
  BookOpen,
} from "lucide-react";
import Testimonials from "../components/Testimonials";
import GreetingCard from "../components/GreetingCard";
import { useAuth } from "../store/auth";
// Import slider CSS
// Note: You'll need to install these packages:
// npm install react-slick slick-carousel react-faq-component

const Home = () => {
  const { userData } = useAuth();
  const [greetName, setGreetName] = useState();
  useEffect(() => {
    if (userData && userData.username) {
      setGreetName(userData.username);
    }
  }, [[userData]]);
  // Settings for testimonial slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // FAQ data
  const faqData = {
    title: "Frequently Asked Questions",
    rows: [
      {
        title: "What kinds of courses does myidemy offer?",
        content:
          "myidemy offers comprehensive courses on web development, app development, and various programming languages like JavaScript, Python, React, Node.js, and more. Our catalog is constantly expanding to cover the latest technologies and frameworks.",
      },
      {
        title: "How long do I have access to a course after purchasing?",
        content:
          "Once you purchase a course, you have lifetime access to all course materials, including any future updates. You can learn at your own pace and revisit the content whenever you need a refresher.",
      },
      {
        title: "Are there any prerequisites for taking your courses?",
        content:
          "Each course has its own prerequisites clearly listed on the course page. While some beginner courses require no prior knowledge, more advanced courses might require familiarity with certain technologies or concepts.",
      },
      {
        title: "Do you offer certificates upon course completion?",
        content:
          "Yes, upon successful completion of any course, you'll receive a certificate of completion that you can add to your resume or LinkedIn profile to showcase your newly acquired skills.",
      },
      {
        title: "What's your refund policy?",
        content:
          "We offer a 30-day money-back guarantee for all courses. If you're unsatisfied with your purchase for any reason, you can request a full refund within 30 days of enrollment.",
      },
    ],
  };

  // FAQ styles
  const faqStyles = {
    bgColor: "transparent",
    titleTextColor: "#1e40af",
    rowTitleColor: "#1e3a8a",
    rowContentColor: "#4b5563",
    arrowColor: "#3b82f6",
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <GreetingCard name={greetName} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Master Modern Development Skills with{" "}
              <span className="text-blue-600">myiDemy</span>
            </h1>
            <p className="text-lg text-gray-600">
              Accelerate your career with expert-led courses in web development,
              app creation, and programming. Join thousands of successful
              developers who have transformed their careers with our hands-on
              approach.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/services"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors flex items-center"
              >
                Explore Courses <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-blue-500 w-16 h-16 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-500 w-24 h-24 rounded-full opacity-20"></div>
              <img
                src="home.png"
                alt="Learning platform"
                className="rounded-lg  relative z-10 max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Trusted by Developers Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                300+
              </h3>
              <p className="text-gray-600 text-center">Expert-led courses</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-indigo-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-100 rounded-full mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                50,000+
              </h3>
              <p className="text-gray-600 text-center">Active students</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-purple-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="p-3 bg-purple-100 rounded-full mb-4">
                <Video className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                10,000+
              </h3>
              <p className="text-gray-600 text-center">Hours of content</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-100 rounded-full mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                180+
              </h3>
              <p className="text-gray-600 text-center">
                Countries with students
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join over 50,000 students already learning with myidemy. Get started
            today and take your first step toward mastering in-demand
            development skills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
            >
              Browse Courses
            </Link>
            {!userData && (

              <>
                <Link
                  to="/register"
                  className="px-8 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-900 transition-colors flex items-center justify-center"
                >
                  Sign Up Free <Award className="ml-2 w-5 h-5" />
                </Link>
              </>
            )}
          </div>
          <p className="text-blue-200 mt-6">
            No credit card required. Start with free lessons today.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <Faq
              data={faqData}
              styles={faqStyles}
              config={{
                animate: true,
                tabFocus: true,
                expandIcon: "+",
                collapseIcon: "-",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
