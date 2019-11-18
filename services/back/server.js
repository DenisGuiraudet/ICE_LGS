'use strict'

const express = require('express')
const MongoClient = require('mongodb').MongoClient

import { cleanDB, addFakeData } from './helper/util'
import { NODE, MONGO } from './constants'
import api from './src'


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

    const mongodb = client.db(MONGO.DB)

    // Fake data
    /*
    cleanDB(mongodb).then(() => {
      addFakeData(mongodb)
    })
    */

    app.use(express.json())

    // Make our mangodb accessible to our router
    app.use((req,res,next) => {
      req.mangodb = mongodb
      next()
    });

    app.use('/', api)

    app.listen(NODE.PORT, NODE.HOST, () => {
      console.log(`Running on http://${NODE.HOST}:${NODE.PORT}`)
    });

  })
