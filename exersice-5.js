const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

// Load HTML page
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,"muhilan.html"));
});

// Calculate BMI
app.post("/bmicalculator", function(req, res){

    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    console.log("Height:", height);
    console.log("Weight:", weight);

    var bmi = weight / (height * height);

    res.send("Your BMI is: " + bmi.toFixed(2));
});

app.listen(3000, function(){
    console.log("Server running on port 3000");
});
