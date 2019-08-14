var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


function addVariant(ingredientVariant) {
  MongoClient.connect(url, {
    useNewUrlParser: true
  }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("ma-app");
    // var myobj = {
    //   name: "tomato",
    //   quantity: "5 GMS",
    //   processing: "PUREE",
    //   file: ["./filesystem/Recipes/VegBiryani.json"]
    // };

    dbo.collection("variants-configuration").update({
        name: ingredientVariant.name,
        quantity: ingredientVariant.quantity,
        processing: ingredientVariant.processing
      }, {
        $addToSet: {
          file: ingredientVariant.file
        }
      }, {
        upsert: true,
        safe: false
      },
      function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("file added");
        }
        db.close();
      }
    );
  });
}
// { $push: { <field1>: <value1>, ... } }

module.exports = {
  addVariant
}