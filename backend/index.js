const express = require("express");

const cors = require("cors");

require('dotenv').config();

const cennectDB = require('./config/db');

const app = express();

app.use(cors());

app.use(express.json());

cennectDB();

app.get("/" ,(req, res)=>{
    res.send('API is working')
});

app.use("/api/auth", require("./routes/auth"))
app.use("/api/posts", require("./routes/post"))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))