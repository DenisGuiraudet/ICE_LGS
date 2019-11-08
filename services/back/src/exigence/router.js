import { Router } from 'express';


var exigence = require('./index');

var exigenceRouter = Router();

exigenceRouter.get('/:id', exigence.getExigence);


export default exigenceRouter;