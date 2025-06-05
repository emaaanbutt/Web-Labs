import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const MenProducts = mongoose.models.MenProducts || mongoose.model("MenProducts", userSchema);
export default MenProducts;