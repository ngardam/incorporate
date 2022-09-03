const express = require("express");
const cors = require("cors");
require('dotenv').config({path: __dirname + '/../.env'});


const corsOptions = require("./middleware/corsOptions");

console.log(process.env);

port = process.env.PORT;


app = express();

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("Route hit");
})


app.listen(port, () => {
    console.log('listening on port: ' + port) 
  })