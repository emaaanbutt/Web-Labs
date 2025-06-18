import express from "express";
import expressLayouts from 'express-ejs-layouts';
import mongoose from 'mongoose';

import cartRoutes from './routes/cart.routes.js';
import imageSchema from "./models/images.model.js";
import productSchema  from "./models/products.model.js";
import contactRoutes from './routes/contact.routes.js';

import adminProductsController from './controllers/admin/admin.products.controller.js';

import session from "express-session";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const port = 4000;
const app = express();
const mongoURI_women = "mongodb://localhost:27017/women-db";
const mongoURI_men = "mongodb://localhost:27017/men-db";
const mongoURI_men_prod = "mongodb://localhost:27017/men-products";

const womenConnection =  mongoose.createConnection(mongoURI_women);
const menConnection = mongoose.createConnection(mongoURI_men);
const menProdConnection = mongoose.createConnection(mongoURI_men_prod);

const WomenImages = womenConnection.model("Product", imageSchema);
const MenImages =  menConnection.model("Product", imageSchema);
const MenProducts = menProdConnection.model("Product", productSchema);

app.use(express.static("public"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.use("/", adminProductsController);
app.use("/", authRoutes);
app.use('/', cartRoutes);
app.use('/', contactRoutes);

app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/women", async (req,res)=>{
    let products = await WomenImages.find();
    res.render("women",{products});
});

app.get("/men", async (req,res)=>{
    let products = await MenImages.find();
    res.render("men", {products});
});

app.get("/men-products", async (req,res) => {
    let products = await MenProducts.find();
    res.render("men-products", {products});
});

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  })
  .catch((err) => console.error("MongoDB error:", err));

// app.get("/cv", (req,res)=> {
//     res.render("cv", {layout: false});
// });

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}.`);
});