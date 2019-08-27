// using express module
let express = require('express'),
    app= express();

let bodyParser = require('body-parser'),
    path = require('path'),
   
    
    cors = require('cors');
   
//User Routes
let userRoutes = require('./routes/orders');
// App using
app.use(cors());
app.use("/", express.static(__dirname + "/"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRoutes);


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// server is running on port 4000
const port = process.env.PORT || 4000;
app.listen(port, function() {
  console.log("Listening on port " + port);
});
