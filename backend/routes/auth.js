const express = require('express')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const user = require('../models/User')

const router = express.Router()


router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new user({ username, email, password: hashedPassword })

        await newUser.save()

        res.json({ message: "User registered" })
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

router.post('login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await user.findOne({ email })
        if (!user) return res.status(400).json({ message: "user not found" })

        const isMatch = await isMatch.bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ message: "Invalid password" })

        const token = jwt.sign({ id: user_id }, process.env.JWT_SECRET, {expiresIn:"id"})

        res.json({token,user})
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
})

module.exports = router;