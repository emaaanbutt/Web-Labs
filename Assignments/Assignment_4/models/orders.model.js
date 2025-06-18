import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    username: String,
    email: String,
    address: String,
    country: String,
    state: String,
    zip: String,
  },
  items: [
    {
      description: String,
      price: Number,
      quantity: Number,
    }
  ],
  total: Number,
  paymentMethod: String,
  status: {
    type: String,
    default: "Pending",
  },
}, {
  timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
