import express from "express";
import { addToCart, renderCheckoutPage, submitOrder } from "../controllers/cart.controller.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";
import { renderMyOrdersPage } from "../controllers/order.controller.js";

const router = express.Router();

router.get("/my-orders", renderMyOrdersPage);
router.post('/add-to-cart', isLoggedIn, addToCart);        
router.get('/checkout', isLoggedIn, renderCheckoutPage);   
router.post('/checkout', isLoggedIn, submitOrder);         

export default router;