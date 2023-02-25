const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'safetyApp';

let db;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected successfully to MongoDB server');
    db = client.db(dbName);
  }
});

module.exports = () => {
  return db;
};
