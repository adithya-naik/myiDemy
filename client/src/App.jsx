import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Logout from "./pages/Logout"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"
import ScrollToTop from "./components/ScrollToTop"
import { PrivacyPolicy, TermsOfService, CookiePolicy } from './components/PolicyComponents';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App