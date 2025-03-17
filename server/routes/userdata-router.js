const express = require('express');
const router = express.Router();
const Product = require("../models/service-schema");
const Cart = require('../models/cart-schema');
const Wishlist = require('../models/wishlist-schema');
const Purchase = require('../models/Purchase-schema');

// Middleware to check if userId is provided
const checkUserId = (req, res, next) => {
  if (!req.params.userId) {
    return res.status(400).json({ message: 'User  ID is required' });
  }
  next();
};

// Add a new product
router.post('/products', async (req, res) => {
  const { title, description, price, imageUrl } = req.body;

  try {
    const newProduct = new Product({ title, description, price, imageUrl });
    await newProduct.save(); // Save to Product schema
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
});

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch from Product schema
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// Get a single product by ID
router.get('/products/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await Product.findById(productId); // Fetch from Product schema
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
});

// Update a product
router.put('/products/:productId', async (req, res) => {
  const { productId } = req.params;
  const { title, description, price, imageUrl } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { title, description, price, imageUrl },
      { new: true } // Return the updated document
    );
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
});

// Delete a product
router.delete('/products/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId); // Delete from Product schema
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
});

// Add product to cart
router.post('/users/:userId/cart/add', checkUserId, async (req, res) => {
  const { productId } = req.body;
  const userId = req.params.userId;

  try {
    const cart = await Cart.findOne({ userId }); // Check Cart schema
    if (!cart) {
      const newCart = new Cart({ userId, items: [{ productId, quantity: 1 }] });
      await newCart.save(); // Save to Cart schema
      return res.status(201).json(newCart);
    }

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1; // Increment quantity
    } else {
      cart.items.push({ productId, quantity: 1 }); // Add new item
    }

    await cart.save(); // Save updated cart
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to cart', error });
  }
});

// Remove product from cart
router.delete('/users/:userId/cart/remove', checkUserId, async (req, res) => {
  const { productId } = req.body;
  const userId = req.params.userId;

  try {
    const cart = await Cart.findOne({ userId }); // Check Cart schema
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId.toString() !== productId); // Remove item
    await cart.save(); // Save updated cart
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from cart', error });
  }
});

// Add product to wishlist
router.post('/users/:userId/wishlist/add', checkUserId, async (req, res) => {
  const { productId } = req.body;
  const userId = req.params.userId;

  try {
    const wishlist = await Wishlist.findOne({ userId }); // Check Wishlist schema
    if (!wishlist) {
      const newWishlist = new Wishlist({ userId, items: [{ productId }] });
      await newWishlist.save(); // Save to Wishlist schema
      return res.status(201).json(newWishlist);
    }

    if (!wishlist.items.some(item => item.productId.toString() === productId)) {
      wishlist.items.push({ productId });
      await wishlist.save(); // Save updated wishlist
    }

    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product to wishlist', error });
  }
});

// Remove product from wishlist
router.delete('/users/:userId/wishlist/remove', checkUserId, async (req, res) => {
  const { productId } = req.body;
  const userId = req.params.userId;

  try {
    const wishlist = await Wishlist.findOne({ userId }); // Check Wishlist schema
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });

    wishlist.items = wishlist.items.filter(item => item.productId.toString() !== productId); // Remove item
    await wishlist.save(); // Save updated wishlist
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from wishlist', error });
  }
});

// Purchase products
router.post('/users/:userId/purchases', checkUserId, async (req, res) => {
  const userId = req.params.userId;
  const { items } = req.body; // Expecting an array of { productId, quantity }

  try {
    const purchase = new Purchase({ userId, items });
    await purchase.save(); // Save to Purchase schema

    // Optionally, clear the cart after purchase
    await Cart.findOneAndDelete({ userId }); // Clear cart

    res.status(201).json(purchase);
  } catch (error) {
    res.status(500).json({ message: 'Error processing purchase', error });
  }
});

// Get enrolled courses for a user
router.get('/users/:userId/enrolled-courses', checkUserId, async (req, res) => {
  const userId = req.params.userId;

  try {
    const purchases = await Purchase.find({ userId }).populate('items.productId'); // Fetch purchases and populate product details
    const enrolledCourses = purchases.flatMap(purchase => purchase.items.map(item => item.productId));
    
    res.json(enrolledCourses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enrolled courses', error });
  }
});

module.exports = router;