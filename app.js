const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const corse = require('cors');
require('dotenv/config');

app.use(corse());           
app.use(bodyParser.json());


const postRouter = require('./routes/posts');
app.use('/posts', postRouter);


mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('DB connected');
    }
)

app.use("/", require("./routes/userRoute"));

app.listen(5000);