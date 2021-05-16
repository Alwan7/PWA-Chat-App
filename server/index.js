// Number 1 ve install and require all this from package.json
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotEnv = require('dotenv'); // // DotENV for secret URL key 
const morgan = require('morgan'); // HTTP request logger middleware for node.js (login middleware)
const PORT = 8080;
var cors = require('cors')


// number 14 get or require users and aouth from routes file
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
// Number 27 require users posts from routes file 
const postRoute = require('./routes/posts');
const allPost = require('./routes/posts');

// number 2 .ENV 
dotEnv.config(); // as a config 


//Connect to Mongo
// number 4 Connect to mongoDB Atlas 
mongoose
.connect(process.env.MONGO_URL , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => console.log('MongoDB is Connected'))
.catch(err => console.log(err));

// Middleware // number 5 use middleware 
app.use(express.json());
app.use(morgan('common'));
app.use(cors()) // Use this after the variable declaration
// Number 15 Use router file
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

// Number 28 Use router Post File
app.use('/api/posts', postRoute);
app.use('/api/posts/story/all', allPost);


// number 3 create PORT 
app.listen(PORT, () => {
    console.log(`This app listening at http://localhost:${PORT}`);
})