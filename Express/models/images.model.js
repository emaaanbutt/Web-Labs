import mongoose, { model } from 'mongoose';

const productSchema = new mongoose.Schema({
    image: String,
});

export default productSchema;