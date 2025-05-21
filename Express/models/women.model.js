import mongoose, { model } from 'mongoose';

let productSchema = new mongoose.Schema({
    image: String,
});

let Product = mongoose.model("Women-products", productSchema);

export default Product;