const express = require('express');
const connect = require('./config/db');
require('dotenv').config()
const app = express();
const router = require('./routes/userRoutes')


//CONNECT MONGODB DATABASE
connect();
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use('/', router);
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Your app is running at ' + PORT)
});