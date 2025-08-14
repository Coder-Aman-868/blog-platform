const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, { timestamps: true })

module.exports = mongoose.model("Post",postSchema)