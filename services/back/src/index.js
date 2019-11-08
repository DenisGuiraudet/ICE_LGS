const express = require('express')

import baseRouter from './base';
import categoryRouter from './category';
import exigenceRouter from './exigence';
import relationRouter from './relation';


const api = express();

api.use('/', baseRouter);
api.use('/category', categoryRouter);
api.use('/exigence', exigenceRouter);
api.use('/relation', relationRouter);


export default api;
