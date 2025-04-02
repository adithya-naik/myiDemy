// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Services from "./pages/Services";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Logout from "./pages/Logout";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import NotFound from "./components/NotFound";
// import ScrollToTop from "./components/ScrollToTop";
// import {
//   PrivacyPolicy,
//   TermsOfService,
//   CookiePolicy,
// } from "./components/PolicyComponents";
// import AdminLayout from "./components/layouts/AdminLayout";
// import AdminUsers from "./pages/AdminUsers";
// import AdminContacts from "./pages/AdminContacts";
// import AdminServices from "./pages/AdminServices";
// import EditUser from "./components/EditUser";
// import AdminTeamMembers from "./pages/AdminTeamMembers";
// import AdminTestimonials from "./pages/AdminTestimonials ";

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//        <div className="min-h-screen">
//        <ScrollToTop />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-of-service" element={<TermsOfService />} />
//           <Route path="/cookie-policy" element={<CookiePolicy />} />
//           <Route path="*" element={<NotFound />} />

//           <Route path="/admin" element={<AdminLayout />}>
//             <Route path="users" element={<AdminUsers />} />
//             <Route path="/admin/users/:id/edit" element={<EditUser />} />
            
//             <Route path="contacts" element={<AdminContacts />} />
//             <Route path="services" element={<AdminServices />} />
//             <Route path="team" element={<AdminTeamMembers />} />
//             <Route path="testimonials" element={<AdminTestimonials />} />
//           </Route>
//         </Routes>
//        </div>
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import {
  PrivacyPolicy,
  TermsOfService,
  CookiePolicy,
} from "./components/PolicyComponents";
import AdminLayout from "./components/layouts/AdminLayout";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminServices from "./pages/AdminServices";
import EditUser from "./components/EditUser";
import AdminTeamMembers from "./pages/AdminTeamMembers";
import AdminTestimonials from "./pages/AdminTestimonials ";
import { useAuth } from "./store/auth"; // Make sure to import your useAuth hook

function App() {
  const { isLoggedIn, userData } = useAuth();
  
  // Check if user is admin
  const isAdmin = userData && userData.isAdmin === true;

  // Protected route component for admin access
  const AdminRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    
    if (!isAdmin) {
      return <Navigate to="/" />;
    }
    
    return children;
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* Admin Routes - Only accessible if user is admin */}
          <Route path="/admin" element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }>
            <Route index element={<Navigate to="/admin/users" />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="users/:id" element={<EditUser />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="team" element={<AdminTeamMembers />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
          </Route>
          
          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;