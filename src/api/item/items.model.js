import mongoose from 'mongoose';

// define schema for a single item
const ItemSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Name is required'],
        minlength: 2,
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        minlength: 10,
        maxlength: 16,
        unique: true,
    },
    city: {
        type: String,
    },
    age: { 
        type: Number,
        required: [true, 'Age is required'],
    },
    brand: {
        type: Number,
        default: 1,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    conversion: {
        type: Boolean,
    },
});

// creating collection for items
export default mongoose.model('item', ItemSchema);