var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ma-app");
  var myobj = { name : "tomato", quantity: "5 GMS", processing: "PUREE", file :"./filesystem/Recipes/ChickenBiryani.json"};
  dbo.collection("variants-configuration").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});