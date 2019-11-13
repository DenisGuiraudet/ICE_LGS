'use strict'

const express = require('express')
const MongoClient = require('mongodb').MongoClient

import { cleanDB, addFakeData } from './helper/util'
// const { NODE, MONGO } = require('./constants')
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

    // Make our mangodb accessible to our router
    app.use((req,res,next) => {
      req.mangodb = client.db(MONGO.DB)
      next()
    });

    // TODO: Remove - Init fake data on init
    app.use((req,res,next) => {
      cleanDB(req)
      addFakeData(req)
      next()
    });

    app.use('/', api)

    app.listen(NODE.PORT, NODE.HOST, () => {
      console.log(`Running on http://${NODE.HOST}:${NODE.PORT}`)
    });

  })
