'use strict'

const express = require('express')
const MongoClient = require('mongodb').MongoClient

const { NODE, MONGO } = require('./constants')
import api from './src/index.js'


const app = express()

MongoClient.connect(
  MONGO.URL, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, client) => {
    if (err) return console.log(err)
    // Storing a reference to the database so you can use it later
    console.log(`Connected MongoDB: ${MONGO.URL}`)
    console.log(`Database: ${MONGO.DB}`)

    // make our mangodb accessible to our router
    app.use(function(req,res,next){
      req.mangodb = client.db(MONGO.DB)
      next()
    });

    app.use('/', api)

    app.listen(NODE.PORT, NODE.HOST, () => {
      console.log(`Running on http://${NODE.HOST}:${NODE.PORT}`)
    });

  })
