// client/src/pages/Cart.jsx
import React from "react";
import { useCart } from "../store/cart";
import { toast } from "react-toastify";
import { Trash2, Heart } from "lucide-react";

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    addToWishlist, 
    checkout 
  } = useCart();

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    
    const success = await checkout();
    if (success) {
      toast.success("Purchase successful!");
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div key={item._id} className="border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.service}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => addToWishlist(item)}
                    className="p-2 text-gray-600 hover:text-red-500"
                  >
                    <Heart size={20} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="p-2 text-gray-600 hover:text-red-500"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold">${calculateTotal()}</span>
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;