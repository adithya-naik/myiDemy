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
import CourseDetail from "./components/CourseDetail";
import Cart from "./pages/Cart"

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
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App