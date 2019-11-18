const express = require('express');
const app = express();
const PORT = 3000;

let myController = require('./controller/myController.js');
let bodyParser = require('body-parser');
let cors = require('cors');
let useragent = require('express-useragent');

const mongoose = require('mongoose');
mongoose.connect('mongodb://174.138.6.207/lineapp',  { useNewUrlParser: true });

//TODO Delete cors and config the server.
app.use(cors());
//Add to req the device the user uses.
app.use(useragent.express());
app.use(bodyParser.json({limit: '1mb', extended: true}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '1mb'
}));

//Catch json format is bad.
app.use(function(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).json(new Error("Bad json format.", 400));
    } else if (req.body === undefined){
        res.status(400).json("No data received.");
    }
});



app.use('/entity', myController);

app.listen(PORT);
console.log("Server is running and listening on port " + PORT);
