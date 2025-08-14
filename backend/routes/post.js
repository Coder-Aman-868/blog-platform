const express = require("express")
const Post = require('../models/Post')
const auth = require("../middleware/auth")
const multer = require("multer")


const upload = multer({ dest: "uploads/" })

const router = express.Router();

router.post("/", auth, upload.single('image'), async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.title,
            image: req.file?.filename || "",
            author: req.user.id
        })
        await newPost.save()
        res.json(newPost)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.get("/", async (req, res) => {
    const posts = await Post.find().populate("author", "username")
    res.json(posts)
})

router.put("/:id", auth, async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) return res.status(404).json({ message: "Not found" })

    if (post.author.toString() !== req.user.id)
        return res.status(403).json({ message: "Not allowed" });

    post.title = req.body.title || post.title
    post.content = req.body.content || post.content;

    await post.save()
    res.json(post)
})


router.delete("/:id", auth, async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Not found" });

    if (post.author.toString() !== req.user.id)
        return res.status(403).json({ message: "Not allowed" });

    await post.remove()
    res.json({message:"Post Deleted"})
});

module.exports = router