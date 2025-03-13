// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
  
//   return null; // This component doesn't render anything
// }







import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ 
  threshold = 300, 
  smooth = true, 
  backgroundColor = "#4f46e5",
  iconColor = "white",
  size = "md", 
  position = "bottom-right" 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Handle scroll event
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > threshold);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto"
    });
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Position classes
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-center": "bottom-6 left-1/2 transform -translate-x-1/2"
  };

  // Size classes
  const sizeClasses = {
    "sm": "p-2",
    "md": "p-3",
    "lg": "p-4"
  };

  const buttonStyle = { backgroundColor, color: iconColor };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={buttonStyle}
          className={`fixed ${positionClasses[position]} ${sizeClasses[size]} rounded-full shadow-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-50`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
