import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const Logout = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();

    // Redirect to login page after logout
    navigate("/login");
  }, [logoutUser]); // Empty dependency array ensures it runs only once on mount

  return <p>Logging out...</p>;
};

export default Logout;
