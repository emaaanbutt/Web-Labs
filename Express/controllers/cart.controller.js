import Order from "../models/orders.model.js";

export const submitOrder = async (req, res) => {
  const cart = req.session.cart || [];
  const user = req.session.user;

  if (!user || cart.length === 0) {
    return res.status(400).json({ success: false, message: "Invalid checkout." });
  }

  const { firstName, lastName, username, email, address, country, state, zip, paymentMethod } = req.body;

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const order = new Order({
    user: {
      id: user._id,
      name: `${firstName} ${lastName}`,
      username,
      email,
      address,
      country,
      state,
      zip,
    },
    items: cart.map(item => ({
      description: item.description,
      price: item.price,
      quantity: item.quantity,
    })),
    total,
    paymentMethod,
    status: "Pending",
  });

  try {
    await order.save();

    req.session.cart = [];

    return res.json({ success: true });
  } catch (err) {
    console.error("Error saving order:", err);
    return res.status(500).json({ success: false, message: "Failed to place order." });
  }
};

export const addToCart = (req, res) => {
  const { product } = req.body;

  if (!req.session.cart) {
    req.session.cart = [];
  }

  // Check if the product is already in cart
  const existingItem = req.session.cart.find(
    (item) => item.productId === product.productId
  );

  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity
  } else {
    // Add new item with quantity 1
    req.session.cart.push({
      productId: product.productId,
      description: product.description,
      price: product.price,
      quantity: 1,
    });
  }

  res.status(200).json({ message: "Added to cart" });
};

export const renderCheckoutPage = (req, res) => {
  const cart = req.session.cart || [];

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  res.render("checkout", {
    layout: false,
    cart,
    total,
  });
};


