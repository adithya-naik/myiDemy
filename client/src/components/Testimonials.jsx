import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://myidemy.onrender.com/api/testimonials/getAll")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data.response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
        setError('Failed to fetch testimonials');
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          What Our Students Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Thousands of developers have accelerated their careers with myidemy. Read their stories.
        </p>
        <div className="px-4 min-h-14 md:px-8">
          {testimonials.length > 0 ? (
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                    <div className="flex items-center text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="fill-current w-5 h-5" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className={`${testimonial.bgColor} rounded-full w-12 h-12 flex items-center justify-center ${testimonial.textColor} font-bold mr-4`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="text-center text-gray-600">No testimonials available</p>
          )}
        </div>
      </div>
    </section>
  );
}