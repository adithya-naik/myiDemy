import Slider from "react-slick";
import { Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
  {
    name: "Jamie Smith",
    role: "Frontend Developer",
    initials: "JS",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    quote: "The React course on myidemy completely transformed my career. I went from struggling with basic JS to building complex applications in just 3 months. The instructor's approach made complex concepts easy to understand.",
  },
  {
    name: "Lisa Park",
    role: "Data Analyst",
    initials: "LP",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-600",
    quote: "The Python Data Science track was exactly what I needed to switch careers. The projects are real-world focused, and I was able to build a portfolio that helped me land a job as a data analyst within weeks of completion.",
  },
  {
    name: "Miguel Johnson",
    role: "Senior Developer",
    initials: "MJ",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    quote: "As a self-taught developer, I had many knowledge gaps. The Full Stack JavaScript course filled those gaps and gave me the confidence to apply for senior roles. The community support was amazing too!",
  },
  {
    name: "Sarah Chen",
    role: "Mobile Developer",
    initials: "SC",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    quote: "I tried many learning platforms before finding myidemy. The difference is night and day. The instructors actually care about your learning, and the hands-on projects helped me build a portfolio that employers noticed immediately.",
  },
];

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
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          What Our Students Say
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Thousands of developers have accelerated their careers with myidemy. Read their stories.
        </p>
        <div className="px-4 md:px-8">
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
        </div>
      </div>
    </section>
  );
}
