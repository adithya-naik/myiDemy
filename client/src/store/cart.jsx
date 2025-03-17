// client/src/store/cart.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./auth";
import { API_BASE_URL } from "../config";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { user, isLoggedIn } = useAuth();
  const userId = user?.id;

  // Load cart and wishlist items when component mounts
  useEffect(() => {
    if (isLoggedIn && userId) {
      fetchCartItems();
      fetchWishlistItems();
    }
  }, [isLoggedIn, userId]);

  const fetchCartItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/cart`);
      if (response.ok) {
        const data = await response.json();
        setCartItems(data.items);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const fetchWishlistItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/wishlist`);
      if (response.ok) {
        const data = await response.json();
        setWishlistItems(data.items);
      }
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
    }
  };

  const addToCart = async (course) => {
    if (!isLoggedIn) {
      toast.error("Please login to add items to cart");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: course._id }),
      });

      if (response.ok) {
        setCartItems([...cartItems, course]);
        toast.success("Added to cart successfully!");
      } else {
        throw new Error("Failed to add to cart");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addToWishlist = async (course) => {
    if (!isLoggedIn) {
      toast.error("Please login to add items to wishlist");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/wishlist/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: course._id }),
      });

      if (response.ok) {
        setWishlistItems([...wishlistItems, course]);
        toast.success("Added to wishlist successfully!");
      } else {
        throw new Error("Failed to add to wishlist");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeFromCart = async (courseId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/cart/${courseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCartItems(cartItems.filter(item => item._id !== courseId));
        toast.success("Removed from cart");
      }
    } catch (error) {
      toast.error("Failed to remove from cart");
    }
  };

  const removeFromWishlist = async (courseId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/wishlist/${courseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setWishlistItems(wishlistItems.filter(item => item._id !== courseId));
        toast.success("Removed from wishlist");
      }
    } catch (error) {
      toast.error("Failed to remove from wishlist");
    }
  };

  const checkout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/purchases`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      });

      if (response.ok) {
        setCartItems([]);
        toast.success("Purchase successful!");
        return true;
      }
      return false;
    } catch (error) {
      toast.error("Checkout failed");
      return false;
    }
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      wishlistItems,
      loading,
      addToCart,
      addToWishlist,
      removeFromCart,
      removeFromWishlist,
      checkout,
      isInCart,
      isInWishlist
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);