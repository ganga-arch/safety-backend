const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const Post = require("./app/models/postModel");

const corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/safetyApp", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});


app.get('/', function(req, res){
  console.log('Requessssssssssssssssssss', req)
  res.send({"name":"rajasekar"});
});

app.post("/feedback", async function (req, res) {

  try {
    var nameSchem = new Post({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      mobileNumber: req.body.mobileNumber,
      message: req.body.message,
  });
  nameSchem.save().then((result)=>{
    res.send({"message":"suceessfully saved","id": result._id})
  }).catch((err)=> {
    console.log(err);
    res.send(err)
  });


  } catch (error) {
    res.send(500,'Not Found')
  }

});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});