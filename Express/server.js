import express from "express";
import expressLayouts from 'express-ejs-layouts';
import mongoose from 'mongoose';
import imageSchema from "./models/images.model.js";
import productSchema  from "./models/products.model.js";

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

app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/checkout", (req,res) => {
    res.render("checkout",  {layout: false});
});

app.get("/women", async (req,res)=>{
    let products = await WomenImages.find();
    res.render("women", {products});
});

app.get("/men", async (req,res)=>{
    let products = await MenImages.find();
    res.render("men", {products});
});

app.get("/men-products", async (req,res) => {
    let products = await MenProducts.find();
    res.render("men-products", {products});
});


app.get("/login", (req, res)=>{
    res.render("login");
});

app.get("/register", (req, res)=>{
    res.render("register");
});

app.get("/admin", (req,res)=>{
    res.render("admin", {layout:false});
});

// app.get("/cv", (req,res)=> {
//     res.render("cv", {layout: false});
// });

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}.`);
});