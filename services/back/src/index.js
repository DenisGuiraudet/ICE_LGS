const express = require('express')

import baseRouter from './base';
import categoryRouter from './category';
import exigenceRouter from './exigence';
import relationRouter from './relation';
import utilRouter from './util';


const api = express();

api.use('/', baseRouter);
api.use('/category', categoryRouter);
api.use('/exigence', exigenceRouter);
api.use('/relation', relationRouter);
api.use('/util', utilRouter);


export default api;
