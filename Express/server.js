import express from "express";
import expressLayouts from 'express-ejs-layouts';
import mongoose from 'mongoose';
import imageSchema from "./models/images.model.js";
import productSchema  from "./models/products.model.js";
import adminProductsController from './controllers/admin/admin.products.controller.js';

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

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use("/", adminProductsController);

app.get("/", (req,res)=>{
    res.render("index", { layout: 'layouts/layout1' });
});

app.get("/checkout", (req,res) => {
    res.render("checkout",  {layout: false});
});

app.get("/women", async (req,res)=>{
    let products = await WomenImages.find();
    res.render("women",{ layout: 'layouts/layout1', products});
});

app.get("/men", async (req,res)=>{
    let products = await MenImages.find();
    res.render("men", {layout: 'layouts/layout1', products});
});

app.get("/men-products", async (req,res) => {
    let products = await MenProducts.find();
    res.render("men-products", {layout: 'layouts/layout1', products});
});

app.get("/login", (req, res)=>{
    res.render("login", {layout: 'layouts/layout1'});
});

app.get("/register", (req, res)=>{
    res.render("register", {layout: 'layouts/layout1'});
});

// app.get("/cv", (req,res)=> {
//     res.render("cv", {layout: false});
// });

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}.`);
});