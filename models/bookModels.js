
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    publisherDate: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },

    format: {
        type: String,
        required: true
    },
    features: {
        type: [String],
        required: true
    }
})

const Books = mongoose.model('Books', bookSchema)
export default Books