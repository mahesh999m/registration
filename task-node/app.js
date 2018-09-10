const express = require('express');
const app = express();
const http = require('http').Server(app);
const ObjectID = require('mongodb').ObjectID;
const mongo = require('./mongo.js');
const bodyParser = require('body-parser');
const cors = require('cors');

app.set('port', (process.env.PORT || 8500));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/registration", (req, res) => {
  mongo.registration.insert(req.body, (err, results) => {
    if (err) throw err;
    res.send({
      "results" : results["ops"]
    });
  })
});

app.get('/allUsers', (req, res) => {
  mongo.registration.find({}).toArray((err, results) => {
    if (err) throw err;
    res.send({
      "results":  results
    });
  });
});

app.post("/deleteUser", (req, res) => {
  let _id = req.body["id"];
  mongo.registration.remove({ _id: ObjectID(_id) }, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send({ "results": results });
  })
});


http.listen(app.get('port'), function () {
	console.log("Server in up on PORT : ", app.get("port"));
});
