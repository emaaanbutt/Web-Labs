import Order from "../models/orders.model.js";

export const renderMyOrdersPage = async (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  try {
    const userId = req.session.user._id;

    const orders = await Order.find({ "user.id": userId }).sort({ createdAt: -1 });

    res.render("my-orders", {
      layout: "layout", // or false if no layout
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("Something went wrong.");
  }
};
