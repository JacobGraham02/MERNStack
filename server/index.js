import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const MONGODB_URL = "mongodb+srv://jacobdgraham02:6sCqbxeqCDZPksh@cluster0.roy5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000; // Give the application the decision on which port to run the application on

mongoose.connect(MONGODB_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
});

const app = express();

app.use(bodyParser.json({limit: "20mb", extended: true})); // Limits the JSON image data to no larger than 20 megabytes
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors()); 