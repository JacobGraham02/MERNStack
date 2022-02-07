import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

const MONGODB_URL = "mongodb+srv://jacobdgraham02:6sCqbxeqCDZPksh@cluster0.roy5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000; // Give the application the decision on which port to run the application on

const app = express();

app.use(bodyParser.json({limit: "20mb", extended: true})); // Limits the JSON image data to no larger than 20 megabytes
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors()); 

// We have the next 2 properties (useNewUrlParses, useUnifiedToplogy) set to true to avoid errors in the console. A promise will be returned because this is a function. 
// If the promise is resolved, .then() callback functions will be resolved. Else, an catch() callback function will be called.
mongoose.connect(MONGODB_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Connection is established and running on port ${PORT}`);
    });
}).catch((error) => {
    console.log(error.message);
})
;

// mongoose.set('useFindAndModify', false);