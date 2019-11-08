'use strict'

const express = require('express')

//import mangodb from './mangodb'
const { NODE } = require('./constants')
import api from './src/index.js'


// app
const app = express()

// make our mangodb accessible to our router
/*
app.use(function(req,res,next){
  req.mangodb = mangodb;
  next();
});
*/

app.use('/', api);

app.listen(NODE.PORT, NODE.HOST, () => {
  console.log(`Running on http://${NODE.HOST}:${NODE.PORT}`)
});
