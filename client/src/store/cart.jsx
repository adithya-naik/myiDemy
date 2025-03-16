import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth"; // Import Auth context

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Get user from authentication context
  const { user } = useAuth() || {}; // Fallback to empty object if context not available
  const userId = user?.id || "guest"; // Use user ID or "guest" for non-authenticated users

  // Load cart and wishlist from localStorage on initial render
  useEffect(() => {
    const loadStoredData = () => {
      try {
        // Use user-specific keys for storage
        const storedCart = localStorage.getItem(`courseCart_${userId}`);
        const storedWishlist = localStorage.getItem(`courseWishlist_${userId}`);
        
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
        
        if (storedWishlist) {
          setWishlistItems(JSON.parse(storedWishlist));
        }
      } catch (error) {
        console.error("Error loading data from localStorage:", error);
        // Reset to empty arrays if there's an error parsing the data
        setCartItems([]);
        setWishlistItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadStoredData();
  }, [userId]); // Re-run when userId changes (user logs in/out)

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      try {
        localStorage.setItem(`courseCart_${userId}`, JSON.stringify(cartItems));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    }
  }, [cartItems, loading, userId]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      try {
        localStorage.setItem(`courseWishlist_${userId}`, JSON.stringify(wishlistItems));
      } catch (error) {
        console.error("Error saving wishlist to localStorage:", error);
      }
    }
  }, [wishlistItems, loading, userId]);

  // Check if a service is in cart
  const isInCart = (serviceId) => {
    return cartItems.some(item => item._id === serviceId);
  };

  // Check if a service is in wishlist
  const isInWishlist = (serviceId) => {
    return wishlistItems.some(item => item._id === serviceId);
  };

  // Add service to cart
  const addToCart = (service) => {
    if (!isInCart(service._id)) {
      const courseWithUserId = {
        ...service,
        userId: userId // Add user ID to the course data
      };
      setCartItems(prevItems => [...prevItems, courseWithUserId]);
      toast.success(`${service.service} added to cart!`);
      return true;
    }
    return false;
  };

  // Remove service from cart
  const removeFromCart = (serviceId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== serviceId));
    toast.info("Course removed from cart");
  };

  // Enroll in a service (add to cart if not already there)
  const handleEnroll = (service) => {
    if (!isInCart(service._id)) {
      addToCart(service);
      return false; // Not already in cart
    }
    return true; // Already in cart
  };

  // Toggle wishlist status for a service
  const handleWishlist = (service) => {
    if (isInWishlist(service._id)) {
      // Remove from wishlist
      setWishlistItems(prevItems => prevItems.filter(item => item._id !== service._id));
      toast.info("Removed from wishlist");
      return false; // No longer in wishlist
    } else {
      // Add to wishlist with user ID
      const courseWithUserId = {
        ...service,
        userId: userId, // Add user ID to the course data
        addedAt: new Date().toISOString() // Track when it was added
      };
      setWishlistItems(prevItems => [...prevItems, courseWithUserId]);
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
  const moveToWishlist = (serviceId) => {
    const service = cartItems.find(item => item._id === serviceId);
    if (service) {
      removeFromCart(serviceId);
      if (!isInWishlist(serviceId)) {
        const courseWithUserId = {
          ...service,
          userId: userId,
          addedAt: new Date().toISOString()
        };
        setWishlistItems(prevItems => [...prevItems, courseWithUserId]);
      }
      toast.info("Course moved to wishlist");
    }
  };

  // Move a service from wishlist to cart
  const moveToCart = (serviceId) => {
    const service = wishlistItems.find(item => item._id === serviceId);
    if (service) {
      setWishlistItems(prevItems => prevItems.filter(item => item._id !== serviceId));
      if (!isInCart(serviceId)) {
        setCartItems(prevItems => [...prevItems, service]);
      }
      toast.info("Course moved to cart");
    }
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem(`courseCart_${userId}`);
    toast.info("Cart cleared");
  };

  // Clear wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem(`courseWishlist_${userId}`);
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

  // Sync wishlist with backend (can be implemented if you have an API)
  const syncWithServer = async () => {
    if (!user) return; // Only sync for authenticated users
    
    try {
      // Example implementation - adjust based on your API
      // const response = await fetch('/api/user/wishlist', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ wishlistItems, userId: user.id }),
      // });
      // 
      // if (!response.ok) throw new Error('Failed to sync wishlist');
      // toast.success('Wishlist synced with your account');
    } catch (error) {
      console.error('Error syncing wishlist:', error);
      toast.error('Failed to sync wishlist with server');
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        isInCart,
        isInWishlist,
        addToCart,
        removeFromCart,
        handleEnroll,
        handleWishlist,
        handleShare,
        moveToWishlist,
        moveToCart,
        clearCart,
        clearWishlist,
        calculateTotal,
        loading,
        syncWithServer
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};