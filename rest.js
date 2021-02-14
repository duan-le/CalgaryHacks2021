var MongoClient = require(['/node_modules/mongodb']).MongoClient;
var url = "mongodb+srv://martinha:calgaryhacks2021@cluster0.c0ajt.mongodb.net/<dbname>?retryWrites=true&w=majority";

get = () => {MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("restaurants");
  var query = { type: "American" };
  dbo.collection("data").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});}

get("Japanese");


