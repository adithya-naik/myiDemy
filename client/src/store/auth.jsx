import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const authorizationToken = `Bearer ${token}`;
  const storeTokenInLS = (Token) => {
    setToken(Token);
    return localStorage.setItem("token", Token);
  };

  // logout the user

  const isLoggedIn = !!token;
  console.log("User Status : ", isLoggedIn);
  const logoutUser = () => {
    setToken("");
    setUserData(null);
    localStorage.removeItem("token");
  };

  // get the current user details from the database
  const getUserDetails = async () => {
    if (!token) {
      console.log("No token found. User is not authenticated.");
      return;
    }

    try {
      const response = await fetch(
        "https://myidemy.onrender.com/api/auth/getUserDetails",
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log("User data from server:", data);
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [token]); // Added token dependency

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        logoutUser,
        isLoggedIn,
        userData,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Usage:
export const useAuth = () => {
  return useContext(AuthContext);
};

// Example usage:
