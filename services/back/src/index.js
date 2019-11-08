const express = require('express')

import baseRouter from './base/router';
import categoryRouter from './category/router';
import exigenceRouter from './exigence/router';
import relationRouter from './relation/router';


const api = express();

api.use('/', baseRouter);
api.use('/category', categoryRouter);
api.use('/exigence', exigenceRouter);
api.use('/relation', relationRouter);


export default api;
