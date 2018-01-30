var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://krisna:krisna@mongokrisna:27017/sampledb");
var timeSchema = new mongoose.Schema({
    time: {type: Date, default: Date.now}
});
var User = mongoose.model("User", timeSchema);

app.get("/", (req, res) => {
    var myData = new User();
    myData.save()
        .then(item => {
            res.send("Save time to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
