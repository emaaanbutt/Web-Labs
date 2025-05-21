import express from "express";
import expressLayouts from 'express-ejs-layouts';
import mongoose from 'mongoose';
import productSchema from "./models/images.model.js";

const port = 4000;
const app = express();
const mongoURI_women = "mongodb://localhost:27017/women-db";
const mongoURI_men = "mongodb://localhost:27017/men-db";

const womenConnection =  mongoose.createConnection(mongoURI_women);
const menConnection = mongoose.createConnection(mongoURI_men);

const WomenProduct = womenConnection.model("Product", productSchema);
const MenProduct =  menConnection.model("Product", productSchema);


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
    let products = await WomenProduct.find();
    res.render("women", {products});
});

app.get("/men", async (req,res)=>{
    let products = await MenProduct.find();
    res.render("men", {products});
});

app.get("/login", (req, res)=>{
    res.render("login");
});

app.get("/register", (req, res)=>{
    res.render("register");
});

// app.get("/cv", (req,res)=> {
//     res.render("cv", {layout: false});
// });

// mongoose.connect(mongoURI_women)
//   .then(() => console.log("✅ Connected to local MongoDB"))
//   .catch(err => console.error("❌ MongoDB connection error:", err));




app.listen(port, ()=>{
    console.log(`Server listening at port ${port}.`);
});