const express = require('express')
import categoryRouter from './category/router';


const api = express();


api.use('/category', categoryRouter);


export default api;
