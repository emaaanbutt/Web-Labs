import express from "express";
import expressLayouts from 'express-ejs-layouts';
import mongoose from 'mongoose';
import Product from "./models/women.model.js";

const port = 4000;
const app = express();
const mongoURI = "mongodb://localhost:27017/women-db";


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
    let products = await Product.find();
    res.render("women", {products});
});

app.get("/men", (req,res)=>{
    res.render("men");
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

mongoose.connect(mongoURI)
  .then(() => console.log("✅ Connected to local MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));


app.listen(port, ()=>{
    console.log(`Server listening at port ${port}.`);
});