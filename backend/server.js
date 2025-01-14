const express = require('express')
const helmet = require("helmet");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const shortenerRouter = require("./routes/shortener");
const app = express()


const port = 3000
const mongoDB = process.env.MONGODB_URI || 'mongodb://10.70.71.110:27017/url-shortener';
const allowedOrigins = ['http://localhost:4200']

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

mongoose.connect(mongoDB, {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

app.use('/shortener', shortenerRouter);
app.listen(port, () => {
    console.log('Server started on port ' + port);
});