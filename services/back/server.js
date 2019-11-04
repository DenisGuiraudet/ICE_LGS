'use strict'

const express = require('express')
const MongoClient = require('mongodb').MongoClient

// Constants
const NODE_HOST = '0.0.0.0'
const NODE_PORT = 3000

const MONGO_HOST = 'mongo'
const MONGO_PORT = 27017
const MONGO_DB = 'test'
const MONGO_URL = 'mongodb://' + MONGO_HOST + ':' + MONGO_PORT

// MONGO
let db = null;

MongoClient.connect(
  MONGO_URL, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, client) => {
    if (err) return console.log(err)
    // Storing a reference to the database so you can use it later
    db = client.db(MONGO_DB)
    console.log(`Connected MongoDB: ${MONGO_URL}`)
    console.log(`Database: ${MONGO_DB}`)
  })

// App
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

// predicate the router with a check and bail out when needed
router.use((req, res, next) => {
  if (!req.headers['x-auth']) return next('router')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello world\n')
})

app.get('/user/:id', (req, res) => {
  /*db.user.insertOne({
    id: req.params.id
  })
  console.warn(db.user.find({}))*/
  res.send(`User Info ${req.params.id}`)
})

// use the router and 401 anything falling through
app.use('/admin', router, (req, res) => {
  res.sendStatus(401)
})

app.listen(NODE_PORT, NODE_HOST)
console.log(`Running on http://${NODE_HOST}:${NODE_PORT}`)

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

// mount the router on the app
app.use('/', router)
