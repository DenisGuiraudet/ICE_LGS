'use strict'

const express = require('express')

//import mangodb from './mangodb'
const {
  NODE
} = require('./constants')
//import api from './src/index.js'

// app
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

// make our mangodb accessible to our router
/*app.use(function(req,res,next){
    req.mangodb = mangodb;
    next();
});*/

app.get('/', (req, res) => {
  res.send('Hello world\n')
})

//app.use('/api/v1', api);
app.get('/user/:id', (req, res) => {
  res.send(`User Info ${req.params.id}`)
})

// use the router and 401 anything falling through
app.use('/admin', router, (req, res) => {
  res.sendStatus(401)
})

app.listen(NODE.PORT, NODE.HOST, () => {
  console.log(`Running on http://${NODE.HOST}:${NODE.PORT}`)
});

// mount the router on the app
app.use('/', router)