var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://martinha:calgaryhacks2021@cluster0.c0ajt.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(url);

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("restaurant");
  var myobj = { type: "American" };
  dbo.collection("customers").findOne(myobj, function(err, res) {
    if (err) throw err;
    console.log(myobj);
    db.close();
  });
});