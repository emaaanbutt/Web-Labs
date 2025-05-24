import express from "express";
import mongoose from "mongoose";
import productSchema  from "../../models/products.model.js";

const mongoURI_men_prod = "mongodb://localhost:27017/men-products";
const menProdConnection = mongoose.createConnection(mongoURI_men_prod);
const MenProducts = menProdConnection.model("Product", productSchema);

let controller = express.Router();

controller.get("/admin/men-products/add", (req,res)=>{
    res.render("admin/men-products/add", {layout: false});
});

controller.post("/admin/men-products/add", async (req,res)=>{
    let data = req.body;

    let p = new MenProducts();
    p.image =  data.image;
    p.description = data.description;
    p.price = data.price;

    await p.save();
    return res.redirect("/");
});

export default controller;



