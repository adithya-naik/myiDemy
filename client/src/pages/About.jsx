import React from "react";
import {Link} from "react-router-dom"
import { BookOpen, Award, Users, Globe, Target, Zap } from "lucide-react";
import Team from "../components/Team";

export default function About() {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About myiDemy
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Transforming careers through accessible, high-quality tech
              education since 2018
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>250+ Courses</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>100,000+ Students</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>170+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-8">
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Story
          </h2>
          <div className=" mx-auto text-gray-600">
            <p className="p-2">
              myidemy began with a simple mission: to make high-quality tech
              education accessible to everyone, regardless of their background
              or location. Founded in 2018 by a team of industry professionals
              frustrated with the gap between traditional education and industry
              needs, we set out to create a platform where real-world skills
              took center stage.
            </p>
            <p className="p-2">
              What started as a small collection of programming courses has
              grown into a comprehensive platform offering everything from web
              development and data science to mobile app development and cloud
              computing. Our growth has been driven by our unwavering commitment
              to student success and our belief that education should be both
              practical and affordable.
            </p>
            <p className="p-2">
              Today, myidemy is proud to have helped over 100,000 students
              worldwide transform their careers and achieve their professional
              goals. As we continue to grow, our founding mission remains the
              same: to break down barriers to tech education and empower the
              next generation of digital innovators.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Practical Learning
              </h3>
              <p className="text-gray-600">
                We believe in learning by doing. Every course is built around
                real-world projects that build your portfolio and prepare you
                for industry challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quality First
              </h3>
              <p className="text-gray-600">
                We never compromise on quality. Our rigorous instructor vetting
                process and course development standards ensure you get the best
                educational experience possible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Career Focused
              </h3>
              <p className="text-gray-600">
                Everything we do is designed with your career growth in mind.
                Our curriculum is constantly updated to align with industry
                demands and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <Team />
      {/* Stats */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-blue-200">Expert-Led Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100k+</div>
              <div className="text-blue-200">Students Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-blue-200">Completion Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-200">Average Course Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of learners and gain the skills you need to succeed
          in today's tech industry.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
