// import { createContext, useContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useAuth } from "../store/auth"; // Import Auth context

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Get user from authentication context
//   const { user } = useAuth() || {}; // Fallback to empty object if context not available
//   const userId = user?.id || "guest"; // Use user ID or "guest" for non-authenticated users

//   // Load cart and wishlist from localStorage on initial render
//   useEffect(() => {
//     const loadStoredData = () => {
//       try {
//         // Use user-specific keys for storage
//         const storedCart = localStorage.getItem(`courseCart_${userId}`);
//         const storedWishlist = localStorage.getItem(`courseWishlist_${userId}`);
        
//         if (storedCart) {
//           setCartItems(JSON.parse(storedCart));
//         }
        
//         if (storedWishlist) {
//           setWishlistItems(JSON.parse(storedWishlist));
//         }
//       } catch (error) {
//         console.error("Error loading data from localStorage:", error);
//         // Reset to empty arrays if there's an error parsing the data
//         setCartItems([]);
//         setWishlistItems([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadStoredData();
//   }, [userId]); // Re-run when userId changes (user logs in/out)

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     if (!loading) {
//       try {
//         localStorage.setItem(`courseCart_${userId}`, JSON.stringify(cartItems));
//       } catch (error) {
//         console.error("Error saving cart to localStorage:", error);
//       }
//     }
//   }, [cartItems, loading, userId]);

//   // Save wishlist to localStorage whenever it changes
//   useEffect(() => {
//     if (!loading) {
//       try {
//         localStorage.setItem(`courseWishlist_${userId}`, JSON.stringify(wishlistItems));
//       } catch (error) {
//         console.error("Error saving wishlist to localStorage:", error);
//       }
//     }
//   }, [wishlistItems, loading, userId]);

//   // Check if a service is in cart
//   const isInCart = (serviceId) => {
//     return cartItems.some(item => item._id === serviceId);
//   };

//   // Check if a service is in wishlist
//   const isInWishlist = (serviceId) => {
//     return wishlistItems.some(item => item._id === serviceId);
//   };

//   // Add service to cart
//   const addToCart = (service) => {
//     if (!isInCart(service._id)) {
//       const courseWithUserId = {
//         ...service,
//         userId: userId // Add user ID to the course data
//       };
//       setCartItems(prevItems => [...prevItems, courseWithUserId]);
//       toast.success(`${service.service} added to cart!`);
//       return true;
//     }
//     return false;
//   };

//   // Remove service from cart
//   const removeFromCart = (serviceId) => {
//     setCartItems(prevItems => prevItems.filter(item => item._id !== serviceId));
//     toast.info("Course removed from cart");
//   };

//   // Enroll in a service (add to cart if not already there)
//   const handleEnroll = (service) => {
//     if (!isInCart(service._id)) {
//       addToCart(service);
//       return false; // Not already in cart
//     }
//     return true; // Already in cart
//   };

//   // Toggle wishlist status for a service
//   const handleWishlist = (service) => {
//     if (isInWishlist(service._id)) {
//       // Remove from wishlist
//       setWishlistItems(prevItems => prevItems.filter(item => item._id !== service._id));
//       toast.info("Removed from wishlist");
//       return false; // No longer in wishlist
//     } else {
//       // Add to wishlist with user ID
//       const courseWithUserId = {
//         ...service,
//         userId: userId, // Add user ID to the course data
//         addedAt: new Date().toISOString() // Track when it was added
//       };
//       setWishlistItems(prevItems => [...prevItems, courseWithUserId]);
//       toast.info("Added to wishlist");
//       return true; // Now in wishlist
//     }
//   };

//   // Share a service (copy course URL to clipboard)
//   const handleShare = (service) => {
//     const courseUrl = `${window.location.origin}/course/${service._id}`;
//     navigator.clipboard.writeText(courseUrl);
//     toast.info("Course link copied to clipboard!");
//   };

//   // Move a service from cart to wishlist
//   const moveToWishlist = (serviceId) => {
//     const service = cartItems.find(item => item._id === serviceId);
//     if (service) {
//       removeFromCart(serviceId);
//       if (!isInWishlist(serviceId)) {
//         const courseWithUserId = {
//           ...service,
//           userId: userId,
//           addedAt: new Date().toISOString()
//         };
//         setWishlistItems(prevItems => [...prevItems, courseWithUserId]);
//       }
//       toast.info("Course moved to wishlist");
//     }
//   };

//   // Move a service from wishlist to cart
//   const moveToCart = (serviceId) => {
//     const service = wishlistItems.find(item => item._id === serviceId);
//     if (service) {
//       setWishlistItems(prevItems => prevItems.filter(item => item._id !== serviceId));
//       if (!isInCart(serviceId)) {
//         setCartItems(prevItems => [...prevItems, service]);
//       }
//       toast.info("Course moved to cart");
//     }
//   };

//   // Clear cart
//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem(`courseCart_${userId}`);
//     toast.info("Cart cleared");
//   };

//   // Clear wishlist
//   const clearWishlist = () => {
//     setWishlistItems([]);
//     localStorage.removeItem(`courseWishlist_${userId}`);
//     toast.info("Wishlist cleared");
//   };

//   // Calculate total price of items in cart
//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       // Convert price string to number, handling currency symbols
//       const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
//       return total + price;
//     }, 0).toFixed(2);
//   };

//   // Sync wishlist with backend (can be implemented if you have an API)
//   const syncWithServer = async () => {
//     if (!user) return; // Only sync for authenticated users
    
//     try {
//       // Example implementation - adjust based on your API
//       // const response = await fetch('/api/user/wishlist', {
//       //   method: 'POST',
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       //   body: JSON.stringify({ wishlistItems, userId: user.id }),
//       // });
//       // 
//       // if (!response.ok) throw new Error('Failed to sync wishlist');
//       // toast.success('Wishlist synced with your account');
//     } catch (error) {
//       console.error('Error syncing wishlist:', error);
//       toast.error('Failed to sync wishlist with server');
//     }
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         wishlistItems,
//         isInCart,
//         isInWishlist,
//         addToCart,
//         removeFromCart,
//         handleEnroll,
//         handleWishlist,
//         handleShare,
//         moveToWishlist,
//         moveToCart,
//         clearCart,
//         clearWishlist,
//         calculateTotal,
//         loading,
//         syncWithServer
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook for using the cart context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };





























// import { createContext, useContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useAuth } from "../store/auth"; // Import Auth context

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const [purchasedItems, setPurchasedItems] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Get user from authentication context
//   const { user } = useAuth() || {}; // Fallback to empty object if context not available
//   const userId = user?.id || "guest"; // Use user ID or "guest" for non-authenticated users
  
//   // API base URL
//   const API_BASE_URL = "https://myidemy.onrender.com"; //  backend URL

//   // Load cart, wishlist, and purchased items from API and localStorage on initial render
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         if (userId !== "guest") {
//           // For authenticated users, fetch from API first
//           await fetchUserData();
//         } else {
//           // For non-authenticated users, load from localStorage
//           loadFromLocalStorage();
//         }
//       } catch (error) {
//         console.error("Error loading user data:", error);
//         // Fallback to localStorage if API fails
//         loadFromLocalStorage();
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [userId]); // Re-run when userId changes (user logs in/out)

//   // Fetch user data from API
//   const fetchUserData = async () => {
//     try {
//       // Fetch cart items
//       const cartResponse = await fetch(`${API_BASE_URL}/users/${userId}/cart`, {
//         headers: {
//           "Authorization": `Bearer ${user?.token}`
//         }
//       });
      
//       // Fetch wishlist items
//       const wishlistResponse = await fetch(`${API_BASE_URL}/users/${userId}/wishlist`, {
//         headers: {
//           "Authorization": `Bearer ${user?.token}`
//         }
//       });
      
//       // Fetch purchased items
//       const purchasedResponse = await fetch(`${API_BASE_URL}/users/${userId}/purchases`, {
//         headers: {
//           "Authorization": `Bearer ${user?.token}`
//         }
//       });

//       if (cartResponse.ok) {
//         const cartData = await cartResponse.json();
//         setCartItems(cartData.items || []);
//       }
      
//       if (wishlistResponse.ok) {
//         const wishlistData = await wishlistResponse.json();
//         setWishlistItems(wishlistData.items || []);
//       }
      
//       if (purchasedResponse.ok) {
//         const purchasedData = await purchasedResponse.json();
//         setPurchasedItems(purchasedData.items || []);
//       }
//     } catch (error) {
//       console.error("Error fetching user data from API:", error);
//       // Fallback to localStorage
//       loadFromLocalStorage();
//     }
//   };

//   // Load data from localStorage
//   const loadFromLocalStorage = () => {
//     try {
//       // Use user-specific keys for storage
//       const storedCart = localStorage.getItem(`courseCart_${userId}`);
//       const storedWishlist = localStorage.getItem(`courseWishlist_${userId}`);
//       const storedPurchases = localStorage.getItem(`coursePurchases_${userId}`);
      
//       if (storedCart) {
//         setCartItems(JSON.parse(storedCart));
//       }
      
//       if (storedWishlist) {
//         setWishlistItems(JSON.parse(storedWishlist));
//       }
      
//       if (storedPurchases) {
//         setPurchasedItems(JSON.parse(storedPurchases));
//       }
//     } catch (error) {
//       console.error("Error loading data from localStorage:", error);
//       // Reset to empty arrays if there's an error parsing the data
//       setCartItems([]);
//       setWishlistItems([]);
//       setPurchasedItems([]);
//     }
//   };

//   // Save cart to localStorage and API
//   useEffect(() => {
//     if (!loading) {
//       saveCartData();
//     }
//   }, [cartItems, loading]);

//   // Save wishlist to localStorage and API
//   useEffect(() => {
//     if (!loading) {
//       saveWishlistData();
//     }
//   }, [wishlistItems, loading]);

//   // Save purchases to localStorage
//   useEffect(() => {
//     if (!loading) {
//       try {
//         localStorage.setItem(`coursePurchases_${userId}`, JSON.stringify(purchasedItems));
//       } catch (error) {
//         console.error("Error saving purchases to localStorage:", error);
//       }
//     }
//   }, [purchasedItems, loading, userId]);

//   // Save cart data to localStorage and API
//   const saveCartData = async () => {
//     try {
//       // Save to localStorage
//       localStorage.setItem(`courseCart_${userId}`, JSON.stringify(cartItems));
      
//       // Save to API if user is authenticated
//       if (userId !== "guest") {
//         await fetch(`${API_BASE_URL}/users/${userId}/cart`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${user?.token}`
//           },
//           body: JSON.stringify({ items: cartItems })
//         });
//       }
//     } catch (error) {
//       console.error("Error saving cart data:", error);
//     }
//   };

//   // Save wishlist data to localStorage and API
//   const saveWishlistData = async () => {
//     try {
//       // Save to localStorage
//       localStorage.setItem(`courseWishlist_${userId}`, JSON.stringify(wishlistItems));
      
//       // Save to API if user is authenticated
//       if (userId !== "guest") {
//         await fetch(`${API_BASE_URL}/users/${userId}/wishlist`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${user?.token}`
//           },
//           body: JSON.stringify({ items: wishlistItems })
//         });
//       }
//     } catch (error) {
//       console.error("Error saving wishlist data:", error);
//     }
//   };

//   // Check if a service is in cart
//   const isInCart = (serviceId) => {
//     return cartItems.some(item => item._id === serviceId);
//   };

//   // Check if a service is in wishlist
//   const isInWishlist = (serviceId) => {
//     return wishlistItems.some(item => item._id === serviceId);
//   };

//   // Check if a service is purchased
//   const isPurchased = (serviceId) => {
//     return purchasedItems.some(item => item._id === serviceId);
//   };

//   // Add service to cart
//   const addToCart = async (service) => {
//     if (isPurchased(service._id)) {
//       toast.info("You already own this course");
//       return false;
//     }

//     if (!isInCart(service._id)) {
//       const courseWithUserId = {
//         ...service,
//         userId: userId,
//         addedAt: new Date().toISOString()
//       };
      
//       setCartItems(prevItems => [...prevItems, courseWithUserId]);
      
//       // If user is authenticated, also add to API
//       if (userId !== "guest") {
//         try {
//           await fetch(`${API_BASE_URL}/users/${userId}/cart/add`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${user?.token}`
//             },
//             body: JSON.stringify({ serviceId: service._id })
//           });
//         } catch (error) {
//           console.error("Error adding to cart via API:", error);
//         }
//       }
      
//       toast.success(`${service.service} added to cart!`);
//       return true;
//     }
//     return false;
//   };

//   // Remove service from cart
//   const removeFromCart = async (serviceId) => {
//     setCartItems(prevItems => prevItems.filter(item => item._id !== serviceId));
    
//     // If user is authenticated, also remove from API
//     if (userId !== "guest") {
//       try {
//         await fetch(`${API_BASE_URL}/users/${userId}/cart/remove`, {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${user?.token}`
//           },
//           body: JSON.stringify({ serviceId })
//         });
//       } catch (error) {
//         console.error("Error removing from cart via API:", error);
//       }
//     }
    
//     toast.info("Course removed from cart");
//   };

//   // Purchase courses in cart
//   const purchaseCourses = async () => {
//     if (cartItems.length === 0) {
//       toast.error("Your cart is empty");
//       return false;
//     }

//     try {
//       // If user is authenticated, make API call
//       if (userId !== "guest") {
//         const response = await fetch(`${API_BASE_URL}/users/${userId}/purchases`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${user?.token}`
//           },
//           body: JSON.stringify({ items: cartItems })
//         });
        
//         if (!response.ok) {
//           throw new Error("Failed to process purchase");
//         }
//       }
      
//       // Add cart items to purchased items
//       setPurchasedItems(prev => [...prev, ...cartItems]);
      
//       // Clear cart after purchase
//       setCartItems([]);
//       localStorage.removeItem(`courseCart_${userId}`);
      
//       toast.success("Purchase successful! Enjoy your courses.");
//       return true;
//     } catch (error) {
//       console.error("Error processing purchase:", error);
//       toast.error("Failed to process purchase. Please try again.");
//       return false;
//     }
//   };

//   // Enroll in a service (add to cart if not already there)
//   const handleEnroll = (service) => {
//     if (isPurchased(service._id)) {
//       toast.info("You already own this course");
//       return true; // Already purchased
//     }
    
//     if (!isInCart(service._id)) {
//       addToCart(service);
//       return false; // Not already in cart
//     }
//     return true; // Already in cart
//   };

//   // Toggle wishlist status for a service
//   const handleWishlist = async (service) => {
//     if (isInWishlist(service._id)) {
//       // Remove from wishlist
//       setWishlistItems(prevItems => prevItems.filter(item => item._id !== service._id));
      
//       // If user is authenticated, also remove from API
//       if (userId !== "guest") {
//         try {
//           await fetch(`${API_BASE_URL}/users/${userId}/wishlist/remove`, {
//             method: "DELETE",
//             headers: {
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${user?.token}`
//             },
//             body: JSON.stringify({ serviceId: service._id })
//           });
//         } catch (error) {
//           console.error("Error removing from wishlist via API:", error);
//         }
//       }
      
//       toast.info("Removed from wishlist");
//       return false; // No longer in wishlist
//     } else {
//       // Add to wishlist with user ID
//       const courseWithUserId = {
//         ...service,
//         userId: userId,
//         addedAt: new Date().toISOString()
//       };
      
//       setWishlistItems(prevItems => [...prevItems, courseWithUserId]);
      
//       // If user is authenticated, also add to API
//       if (userId !== "guest") {
//         try {
//           await fetch(`${API_BASE_URL}/users/${userId}/wishlist/add`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${user?.token}`
//             },
//             body: JSON.stringify({ serviceId: service._id })
//           });
//         } catch (error) {
//           console.error("Error adding to wishlist via API:", error);
//         }
//       }
      
//       toast.info("Added to wishlist");
//       return true; // Now in wishlist
//     }
//   };

//   // Share a service (copy course URL to clipboard)
//   const handleShare = (service) => {
//     const courseUrl = `${window.location.origin}/course/${service._id}`;
//     navigator.clipboard.writeText(courseUrl);
//     toast.info("Course link copied to clipboard!");
//   };

//   // Move a service from cart to wishlist
//   const moveToWishlist = async (serviceId) => {
//     const service = cartItems.find(item => item._id === serviceId);
//     if (service) {
//       await removeFromCart(serviceId);
//       if (!isInWishlist(serviceId)) {
//         await handleWishlist(service);
//       }
//       toast.info("Course moved to wishlist");
//     }
//   };

//   // Move a service from wishlist to cart
//   const moveToCart = async (serviceId) => {
//     const service = wishlistItems.find(item => item._id === serviceId);
//     if (service) {
//       // Remove from wishlist
//       setWishlistItems(prevItems => prevItems.filter(item => item._id !== serviceId));
      
//       // If user is authenticated, also remove from API
//       if (userId !== "guest") {
//         try {
//           await fetch(`${API_BASE_URL}/users/${userId}/wishlist/remove`, {
//             method: "DELETE",
//             headers: {
//               "Content-Type": "application/json",
//               "Authorization": `Bearer ${user?.token}`
//             },
//             body: JSON.stringify({ serviceId })
//           });
//         } catch (error) {
//           console.error("Error removing from wishlist via API:", error);
//         }
//       }
      
//       // Add to cart if not already there
//       if (!isInCart(serviceId)) {
//         await addToCart(service);
//       }
      
//       toast.info("Course moved to cart");
//     }
//   };

//   // Clear cart
//   const clearCart = async () => {
//     setCartItems([]);
//     localStorage.removeItem(`courseCart_${userId}`);
    
//     // If user is authenticated, also clear from API
//     if (userId !== "guest") {
//       try {
//         await fetch(`${API_BASE_URL}/users/${userId}/cart`, {
//           method: "DELETE",
//           headers: {
//             "Authorization": `Bearer ${user?.token}`
//           }
//         });
//       } catch (error) {
//         console.error("Error clearing cart via API:", error);
//       }
//     }
    
//     toast.info("Cart cleared");
//   };

//   // Clear wishlist
//   const clearWishlist = async () => {
//     setWishlistItems([]);
//     localStorage.removeItem(`courseWishlist_${userId}`);
    
//     // If user is authenticated, also clear from API
//     if (userId !== "guest") {
//       try {
//         await fetch(`${API_BASE_URL}/users/${userId}/wishlist`, {
//           method: "DELETE",
//           headers: {
//             "Authorization": `Bearer ${user?.token}`
//           }
//         });
//       } catch (error) {
//         console.error("Error clearing wishlist via API:", error);
//       }
//     }
    
//     toast.info("Wishlist cleared");
//   };

//   // Calculate total price of items in cart
//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       // Convert price string to number, handling currency symbols
//       const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
//       return total + price;
//     }, 0).toFixed(2);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         wishlistItems,
//         purchasedItems,
//         isInCart,
//         isInWishlist,
//         isPurchased,
//         addToCart,
//         removeFromCart,
//         purchaseCourses,
//         handleEnroll,
//         handleWishlist,
//         handleShare,
//         moveToWishlist,
//         moveToCart,
//         clearCart,
//         clearWishlist,
//         calculateTotal,
//         loading
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook to use cart context
// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };













import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth"; // Import Auth context

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]); // New state for enrolled courses
  const [loading, setLoading] = useState(true);
  
  // Get user from authentication context
  const { user } = useAuth() || {}; // Fallback to empty object if context not available
  const userId = user?.id || "guest"; // Use user ID or "guest" for non-authenticated users
  
  // API base URL
  const API_BASE_URL = "http://localhost:3000"; //  backend URL

  // Load cart, wishlist, purchased items, and enrolled courses from API and localStorage on initial render
  useEffect(() => {
    const loadData = async () => {
      try {
        if (userId !== "guest") {
          // For authenticated users, fetch from API first
          await fetchUserData();
          await fetchEnrolledCourses(); // Fetch enrolled courses
        } else {
          // For non-authenticated users, load from localStorage
          loadFromLocalStorage();
        }
      } catch (error) {
        console.error("Error loading user data:", error);
        // Fallback to localStorage if API fails
        loadFromLocalStorage();
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [userId]); // Re-run when userId changes (user logs in/out)

  // Fetch user data from API
  const fetchUserData = async () => {
    try {
      // Fetch cart items
      const cartResponse = await fetch(`${API_BASE_URL}/users/${userId}/cart`, {
        headers: {
          "Authorization": `Bearer ${user?.token}`
        }
      });
      
      // Fetch wishlist items
      const wishlistResponse = await fetch(`${API_BASE_URL}/users/${userId}/wishlist`, {
        headers: {
          "Authorization": `Bearer ${user?.token}`
        }
      });
      
      // Fetch purchased items
      const purchasedResponse = await fetch(`${API_BASE_URL}/users/${userId}/purchases`, {
        headers: {
          "Authorization": `Bearer ${user?.token}`
        }
      });

      if (cartResponse.ok) {
        const cartData = await cartResponse.json();
        setCartItems(cartData.items || []);
      }
      
      if (wishlistResponse.ok) {
        const wishlistData = await wishlistResponse.json();
        setWishlistItems(wishlistData.items || []);
      }
      
      if (purchasedResponse.ok) {
        const purchasedData = await purchasedResponse.json();
        setPurchasedItems(purchasedData.items || []);
      }
    } catch (error) {
      console.error("Error fetching user data from API:", error);
      // Fallback to localStorage
      loadFromLocalStorage();
    }
  };

  // Fetch enrolled courses for the user
  const fetchEnrolledCourses = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/enrolled-courses`, {
        headers: {
          "Authorization": `Bearer ${user?.token}`
        }
      });

      if (response.ok) {
        const enrolledCoursesData = await response.json();
        setEnrolledCourses(enrolledCoursesData);
      } else {
        throw new Error("Failed to fetch enrolled courses");
      }
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  // Load data from localStorage
  const loadFromLocalStorage = () => {
    try {
      // Use user-specific keys for storage
      const storedCart = localStorage.getItem(`courseCart_${userId}`);
      const storedWishlist = localStorage.getItem(`courseWishlist_${userId}`);
      const storedPurchases = localStorage.getItem(`coursePurchases_${userId}`);
      
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
      
      if (storedWishlist) {
        setWishlistItems(JSON.parse(storedWishlist));
      }
      
      if (storedPurchases) {
        setPurchasedItems(JSON.parse(storedPurchases));
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      // Reset to empty arrays if there's an error parsing the data
      setCartItems([]);
      setWishlistItems([]);
      setPurchasedItems([]);
    }
  };

  // Save cart to localStorage and API
  useEffect(() => {
    if (!loading) {
      saveCartData();
    }
  }, [cartItems, loading]);

  // Save wishlist to localStorage and API
  useEffect(() => {
    if (!loading) {
      saveWishlistData();
    }
  }, [wishlistItems, loading]);

  // Save purchases to localStorage
  useEffect(() => {
    if (!loading) {
      try {
        localStorage.setItem(`coursePurchases_${userId}`, JSON.stringify(purchasedItems));
      } catch (error) {
        console.error("Error saving purchases to localStorage:", error);
      }
    }
  }, [purchasedItems, loading, userId]);

  // Save cart data to localStorage and API
  const saveCartData = async () => {
    try {
      // Save to localStorage
      localStorage.setItem(`courseCart_${userId}`, JSON.stringify(cartItems));
      
      // Save to API if user is authenticated
      if (userId !== "guest") {
        await fetch(`${API_BASE_URL}/users/${userId}/cart`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user?.token}`
          },
          body: JSON.stringify({ items: cartItems }) // Ensure the body matches the expected structure
        });
      }
    } catch (error) {
      console.error("Error saving cart data:", error);
    }
  };

  // Save wishlist data to localStorage and API
  const saveWishlistData = async () => {
    try {
      // Save to localStorage
      localStorage.setItem(`courseWishlist_${userId}`, JSON.stringify(wishlistItems));
      
      // Save to API if user is authenticated
      if (userId !== "guest") {
        await fetch(`${API_BASE_URL}/users/${userId}/wishlist`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user?.token}`
          },
          body: JSON.stringify({ items: wishlistItems }) // Ensure the body matches the expected structure
        });
      }
    } catch (error) {
      console.error("Error saving wishlist data:", error);
    }
  };

  // Check if a service is in cart
  const isInCart = (serviceId) => {
    return cartItems.some(item => item._id === serviceId);
  };

  // Check if a service is in wishlist
  const isInWishlist = (serviceId) => {
    return wishlistItems.some(item => item._id === serviceId);
  };

  // Check if a service is purchased
  const isPurchased = (serviceId) => {
    return purchasedItems.some(item => item._id === serviceId);
  };

  // Add service to cart
  const addToCart = async (service) => {
    if (isPurchased(service._id)) {
      toast.info("You already own this course");
      return false;
    }

    if (!isInCart(service._id)) {
      const courseWithUserId = {
        ...service,
        userId: userId,
        addedAt: new Date().toISOString()
      };
      
      setCartItems(prevItems => [...prevItems, courseWithUserId]);
      
      // If user is authenticated, also add to API
      if (userId !== "guest") {
        try {
          await fetch(`${API_BASE_URL}/users/${userId}/cart/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${user?.token}`
            },
            body: JSON.stringify({ productId: service._id }) // Ensure the body matches the expected structure
          });
        } catch (error) {
          console.error("Error adding to cart via API:", error);
        }
      }
      
      toast.success(`${service.service} added to cart!`);
      return true;
    }
    return false;
  };

  // Remove service from cart
  const removeFromCart = async (serviceId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== serviceId));
    
    // If user is authenticated, also remove from API
    if (userId !== "guest") {
      try {
        await fetch(`${API_BASE_URL}/users/${userId}/cart/remove`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user?.token}`
          },
          body: JSON.stringify({ productId: serviceId }) // Ensure the body matches the expected structure
        });
      } catch (error) {
        console.error("Error removing from cart via API:", error);
      }
    }
    
    toast.info("Course removed from cart");
  };

  // Purchase courses in cart
  const purchaseCourses = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return false;
    }

    try {
      // If user is authenticated, make API call
      if (userId !== "guest") {
        const response = await fetch(`${API_BASE_URL}/users/${userId}/purchases`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user?.token}`
          },
          body: JSON.stringify({ items: cartItems.map(item => ({ productId: item._id, quantity: 1 })) }) // Ensure the body matches the expected structure
        });
        
        if (!response.ok) {
          throw new Error("Failed to process purchase");
        }
      }
      
      // Add cart items to purchased items
      setPurchasedItems(prev => [...prev, ...cartItems]);
      
      // Clear cart after purchase
      setCartItems([]);
      localStorage.removeItem(`courseCart_${userId}`);
      
      toast.success("Purchase successful! Enjoy your courses.");
      return true;
    } catch (error) {
      console.error("Error processing purchase:", error);
      toast.error("Failed to process purchase. Please try again.");
      return false;
    }
  };

  // Enroll in a service (add to cart if not already there)
  const handleEnroll = (service) => {
    if (isPurchased(service._id)) {
      toast.info("You already own this course");
      return true; // Already purchased
    }
    
    if (!isInCart(service._id)) {
      addToCart(service);
      return false; // Not already in cart
    }
    return true; // Already in cart
  };

  // Toggle wishlist status for a service
  const handleWishlist = async (service) => {
    if (isInWishlist(service._id)) {
      // Remove from wishlist
      setWishlistItems(prevItems => prevItems.filter(item => item._id !== service._id));
      
      // If user is authenticated, also remove from API
      if (userId !== "guest") {
        try {
          await fetch(`${API_BASE_URL}/users/${userId}/wishlist/remove`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${user?.token}`
            },
            body: JSON.stringify({ productId: service._id }) // Ensure the body matches the expected structure
          });
        } catch (error) {
          console.error("Error removing from wishlist via API:", error);
        }
      }
      
      toast.info("Removed from wishlist");
      return false; // No longer in wishlist
    } else {
      // Add to wishlist with user ID
      const courseWithUserId = {
        ...service,
        userId: userId,
        addedAt: new Date().toISOString()
      };
      
      setWishlistItems(prevItems => [...prevItems, courseWithUserId]);
      
      // If user is authenticated, also add to API
      if (userId !== "guest") {
        try {
          await fetch(`${API_BASE_URL}/users/${userId}/wishlist/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${user?.token}`
            },
            body: JSON.stringify({ productId: service._id }) // Ensure the body matches the expected structure
          });
        } catch (error) {
          console.error("Error adding to wishlist via API:", error);
        }
      }
      
      toast.info("Added to wishlist");
      return true; // Now in wishlist
    }
  };

  // Share a service (copy course URL to clipboard)
  const handleShare = (service) => {
    const courseUrl = `${window.location.origin}/course/${service._id}`;
    navigator.clipboard.writeText(courseUrl);
    toast.info("Course link copied to clipboard!");
  };

  // Move a service from cart to wishlist
  const moveToWishlist = async (serviceId) => {
    const service = cartItems.find(item => item._id === serviceId);
    if (service) {
      await removeFromCart(serviceId);
      if (!isInWishlist(serviceId)) {
        await handleWishlist(service);
      }
      toast.info("Course moved to wishlist");
    }
  };

  // Move a service from wishlist to cart
  const moveToCart = async (serviceId) => {
    const service = wishlistItems.find(item => item._id === serviceId);
    if (service) {
      // Remove from wishlist
      setWishlistItems(prevItems => prevItems.filter(item => item._id !== serviceId));
      
      // If user is authenticated, also remove from API
      if (userId !== "guest") {
        try {
          await fetch(`${API_BASE_URL}/users/${userId}/wishlist/remove`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${user?.token}`
            },
            body: JSON.stringify({ productId: serviceId }) // Ensure the body matches the expected structure
          });
        } catch (error) {
          console.error("Error removing from wishlist via API:", error);
        }
      }
      
      // Add to cart if not already there
      if (!isInCart(serviceId)) {
        await addToCart(service);
      }
      
      toast.info("Course moved to cart");
    }
  };

  // Clear cart
  const clearCart = async () => {
    setCartItems([]);
    localStorage.removeItem(`courseCart_${userId}`);
    
    // If user is authenticated, also clear from API
    if (userId !== "guest") {
      try {
        await fetch(`${API_BASE_URL}/users/${userId}/cart`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${user?.token}`
          }
        });
      } catch (error) {
        console.error("Error clearing cart via API:", error);
      }
    }
    
    toast.info("Cart cleared");
  };

  // Clear wishlist
  const clearWishlist = async () => {
    setWishlistItems([]);
    localStorage.removeItem(`courseWishlist_${userId}`);
    
    // If user is authenticated, also clear from API
    if (userId !== "guest") {
      try {
        await fetch(`${API_BASE_URL}/users/${userId}/wishlist`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${user?.token}`
          }
        });
      } catch (error){
        console.error("Error clearing wishlist via API:", error);
      }
    }

    
    toast.info("Wishlist cleared");
  };

  // Calculate total price of items in cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Convert price string to number, handling currency symbols
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        purchasedItems,
        enrolledCourses, // Include enrolled courses in the context
        isInCart,
        isInWishlist,
        isPurchased,
        addToCart,
        removeFromCart,
        purchaseCourses,
        handleEnroll,
        handleWishlist,
        handleShare,
        moveToWishlist,
        moveToCart,
        clearCart,
        clearWishlist,
        calculateTotal,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};