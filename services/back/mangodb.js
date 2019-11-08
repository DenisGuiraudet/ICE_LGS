const MongoClient = require('mongodb').MongoClient

const { MONGO } = require('./constants')


var mangodb = null;
/*
MongoClient.connect(
  MONGO.URL, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, client) => {
    if (err) return console.log(err)
    // Storing a reference to the database so you can use it later
    mangodb = client.db(MONGO.DB)
    console.log(`Connected MongoDB: ${MONGO.URL}`)
    console.log(`Database: ${MONGO.DB}`)
  })
*/

export default mangodb;
