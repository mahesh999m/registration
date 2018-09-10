const MongoClient = require('mongodb').MongoClient;
var mongo = {};

MongoClient.connect("mongodb://localhost:27017/UserData", function(err, client) {
	if (err) throw err;
  const db = client.db("UserData");;
	mongo.registration = db.collection("registration");
});
module.exports = mongo;
