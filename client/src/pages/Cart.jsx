// import React, { useState, useEffect } from "react";
// import { 
//   ShoppingCart, 
//   Trash2, 
//   CreditCard, 
//   AlertCircle,
//   ChevronLeft,
//   Heart,
//   HeartOff,
//   Share2
// } from "lucide-react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Cart = () => {
//   // State to manage cart items, wishlist items, and loading state
//   const [cartItems, setCartItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Mock data for demonstration - normally this would come from an API or context
//   useEffect(() => {
//     // Simulate loading data
//     setTimeout(() => {
//       setCartItems([
//         {
//           _id: "1",
//           service: "Introduction to React",
//           description: "Learn the fundamentals of React development",
//           duration: "8 weeks",
//           skillLevel: "Beginner",
//           modeOfLearning: "Online",
//           price: "$99.99",
//           instructor: { name: "Jane Doe" }
//         },
//         {
//           _id: "2",
//           service: "Advanced JavaScript",
//           description: "Master JavaScript concepts and patterns",
//           duration: "10 weeks",
//           skillLevel: "Intermediate",
//           modeOfLearning: "Online",
//           price: "$129.99",
//           instructor: { name: "John Smith" }
//         }
//       ]);
      
//       setWishlistItems([
//         {
//           _id: "3",
//           service: "CSS Animations Masterclass",
//           description: "Create stunning web animations with CSS",
//           duration: "6 weeks",
//           skillLevel: "Intermediate",
//           modeOfLearning: "Online",
//           price: "$79.99",
//           instructor: { name: "Sarah Johnson" }
//         }
//       ]);
      
//       setLoading(false);
//     }, 1000);
//   }, []);

//   // Cart functions
//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter(item => item._id !== id));
//   };

//   const moveToWishlist = (id) => {
//     const itemToMove = cartItems.find(item => item._id === id);
//     if (itemToMove) {
//       setWishlistItems([...wishlistItems, itemToMove]);
//       removeFromCart(id);
//     }
//   };

//   const moveToCart = (id) => {
//     const itemToMove = wishlistItems.find(item => item._id === id);
//     if (itemToMove) {
//       setCartItems([...cartItems, itemToMove]);
//       setWishlistItems(wishlistItems.filter(item => item._id !== id));
//     }
//   };

//   const handleShare = (item) => {
//     // Implement share functionality
//     alert(`Sharing ${item.service}`);
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => {
//       // Extract numeric price value
//       const price = parseFloat(item.price.replace('$', ''));
//       return total + price;
//     }, 0).toFixed(2);
//   };

//   const handleCheckout = () => {
//     // Here you would typically redirect to a checkout page
//     window.location.href = "/checkout";
//   };

//   const handleContinueShopping = () => {
//     window.location.href = "/services";
//   };

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
//         <div className="text-center p-8 rounded-lg bg-white shadow-md">
//           <div className="h-12 w-12 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
//           <h2 className="text-xl font-semibold text-gray-800">Loading Cart</h2>
//           <p className="text-gray-500 mt-2">Please wait while we retrieve your cart items...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center mb-8">
//           <button 
//             onClick={handleContinueShopping}
//             className="flex items-center text-blue-600 hover:text-blue-800"
//           >
//             <ChevronLeft className="h-5 w-5 mr-1" />
//             Continue Shopping
//           </button>
//         </div>
        
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center">
//             <ShoppingCart className="h-8 w-8 mr-3" />
//             Your Cart
//           </h1>
//         </div>
        
//         {cartItems.length === 0 ? (
//           <div className="text-center p-12 bg-white rounded-lg shadow-md">
//             <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-xl font-medium text-gray-500">
//               Your cart is empty
//             </h3>
//             <p className="mt-2 text-gray-400 mb-6">Add courses to your cart to get started.</p>
//             <button
//               onClick={handleContinueShopping}
//               className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//             >
//               Browse Courses
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <div className="p-6 border-b border-gray-200">
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     Cart Items ({cartItems.length})
//                   </h2>
//                 </div>
                
//                 <div className="divide-y divide-gray-200">
//                   {cartItems.map((item) => (
//                     <div key={item._id} className="p-6 flex flex-col sm:flex-row">
//                       <div className="flex-1">
//                         <h3 className="text-lg font-semibold text-gray-800 mb-1">
//                           {item.service}
//                         </h3>
//                         <p className="text-gray-600 mb-2 line-clamp-2">
//                           {item.description}
//                         </p>
//                         <div className="flex flex-wrap gap-2 mb-4">
//                           <div className="bg-gray-100 rounded-full px-3 py-1 text-xs">
//                             {item.duration}
//                           </div>
//                           <div className="bg-gray-100 rounded-full px-3 py-1 text-xs">
//                             {item.skillLevel}
//                           </div>
//                           <div className="bg-gray-100 rounded-full px-3 py-1 text-xs">
//                             {item.modeOfLearning}
//                           </div>
//                         </div>
                        
//                         {item.instructor && (
//                           <div className="mb-4 text-sm text-gray-600">
//                             Instructor: {item.instructor.name}
//                           </div>
//                         )}
//                       </div>
                      
//                       <div className="mt-4 sm:mt-0 flex flex-col items-end justify-between">
//                         <div className="text-lg font-bold text-blue-600">
//                           {item.price}
//                         </div>
                        
//                         <div className="flex space-x-2 mt-4">
//                           <button
//                             onClick={() => handleShare(item)}
//                             className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
//                             title="Share course"
//                           >
//                             <Share2 className="h-5 w-5" />
//                           </button>
//                           <button
//                             onClick={() => moveToWishlist(item._id)}
//                             className="p-2 text-gray-500 hover:text-red-600 transition-colors"
//                             title="Move to wishlist"
//                           >
//                             <Heart className="h-5 w-5" />
//                           </button>
//                           <button
//                             onClick={() => removeFromCart(item._id)}
//                             className="p-2 text-gray-500 hover:text-red-600 transition-colors"
//                             title="Remove from cart"
//                           >
//                             <Trash2 className="h-5 w-5" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-8">
//                 <div className="p-6 border-b border-gray-200">
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     Order Summary
//                   </h2>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex justify-between mb-4">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="font-semibold">${calculateTotal()}</span>
//                   </div>
                  
//                   <div className="flex justify-between mb-4">
//                     <span className="text-gray-600">Discount</span>
//                     <span className="font-semibold">$0.00</span>
//                   </div>
                  
//                   <div className="border-t border-gray-200 my-4 pt-4">
//                     <div className="flex justify-between">
//                       <span className="text-lg font-semibold">Total</span>
//                       <span className="text-lg font-bold text-blue-600">${calculateTotal()}</span>
//                     </div>
//                   </div>
                  
//                   <button
//                     onClick={handleCheckout}
//                     className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center mt-6"
//                   >
//                     <CreditCard className="h-5 w-5 mr-2" />
//                     Proceed to Checkout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
        
//         {/* Wishlist Section */}
//         {wishlistItems.length > 0 && (
//           <div className="mt-12">
//             <div className="text-center mb-8">
//               <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center">
//                 <Heart className="h-6 w-6 mr-2" />
//                 Your Wishlist
//               </h2>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {wishlistItems.map((item) => (
//                 <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
//                   <div className="p-5">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                       {item.service}
//                     </h3>
//                     <p className="text-gray-600 mb-4 line-clamp-2">
//                       {item.description}
//                     </p>
                    
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="text-lg font-bold text-blue-600">
//                         {item.price}
//                       </div>
//                     </div>
                    
//                     <div className="flex space-x-3 mt-4">
//                       <button
//                         onClick={() => handleShare(item)}
//                         className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center"
//                       >
//                         <Share2 className="h-4 w-4 mr-2" />
//                         Share
//                       </button>
//                       <button
//                         onClick={() => moveToCart(item._id)}
//                         className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center"
//                       >
//                         <ShoppingCart className="h-4 w-4 mr-2" />
//                         Add to Cart
//                       </button>
//                     </div>
//                     <button
//                       onClick={() => moveToCart(item._id)}
//                       className="w-full mt-2 bg-white border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50 transition-colors text-sm font-medium flex items-center justify-center"
//                     >
//                       <HeartOff className="h-4 w-4 mr-2" />
//                       Remove from Wishlist
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;
















"use client"

import { useEffect } from "react"
import { ShoppingCart, Trash2, CreditCard, ChevronLeft, Heart, HeartOff, Share2, Loader2 } from "lucide-react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useCart } from "../store/cart"

const Cart = () => {
  // Use the cart context
  const {
    cartItems,
    wishlistItems,
    loading,
    removeFromCart,
    moveToWishlist,
    moveToCart,
    handleShare,
    calculateTotal,
    clearCart,
    removeFromWishlist,
  } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCheckout = () => {
    // Here you would typically redirect to a checkout page
    window.location.href = "/checkout"
  }

  const handleContinueShopping = () => {
    window.location.href = "/services"
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="text-center p-8 rounded-lg bg-white shadow-md">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Loading Cart</h2>
          <p className="text-gray-500 mt-2">Please wait while we retrieve your cart items...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <button onClick={handleContinueShopping} className="flex items-center text-blue-600 hover:text-blue-800">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Continue Shopping
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center">
            <ShoppingCart className="h-8 w-8 mr-3" />
            Your Cart
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center p-12 bg-white rounded-lg shadow-md">
            <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-500">Your cart is empty</h3>
            <p className="mt-2 text-gray-400 mb-6">Add courses to your cart to get started.</p>
            <button
              onClick={handleContinueShopping}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Browse Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">Cart Items ({cartItems.length})</h2>
                  <button onClick={clearCart} className="text-red-500 hover:text-red-700 text-sm flex items-center">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Clear Cart
                  </button>
                </div>

                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div key={item._id} className="p-6 flex flex-col sm:flex-row">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.service}</h3>
                        <p className="text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <div className="bg-gray-100 rounded-full px-3 py-1 text-xs">{item.duration}</div>
                          <div className="bg-gray-100 rounded-full px-3 py-1 text-xs">{item.skillLevel}</div>
                          <div className="bg-gray-100 rounded-full px-3 py-1 text-xs">{item.modeOfLearning}</div>
                        </div>

                        {item.instructor && (
                          <div className="mb-4 text-sm text-gray-600">Instructor: {item.instructor.name}</div>
                        )}
                      </div>

                      <div className="mt-4 sm:mt-0 flex flex-col items-end justify-between">
                        <div className="text-lg font-bold text-blue-600">{item.price}</div>

                        <div className="flex space-x-2 mt-4">
                          <button
                            onClick={() => handleShare(item)}
                            className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                            title="Share course"
                          >
                            <Share2 className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => moveToWishlist(item._id)}
                            className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                            title="Move to wishlist"
                          >
                            <Heart className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item._id)}
                            className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                            title="Remove from cart"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-8">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
                </div>

                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${calculateTotal()}</span>
                  </div>

                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-semibold">$0.00</span>
                  </div>

                  <div className="border-t border-gray-200 my-4 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-lg font-bold text-blue-600">${calculateTotal()}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center mt-6"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Wishlist Section */}
        {wishlistItems.length > 0 && (
          <div className="mt-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center justify-center">
                <Heart className="h-6 w-6 mr-2" />
                Your Wishlist
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistItems.map((item) => (
                <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.service}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-bold text-blue-600">{item.price}</div>
                    </div>

                    <div className="flex space-x-3 mt-4">
                      <button
                        onClick={() => handleShare(item)}
                        className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium flex items-center justify-center"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </button>
                      <button
                        onClick={() => moveToCart(item._id)}
                        className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item._id)}
                      className="w-full mt-2 bg-white border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50 transition-colors text-sm font-medium flex items-center justify-center"
                    >
                      <HeartOff className="h-4 w-4 mr-2" />
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

