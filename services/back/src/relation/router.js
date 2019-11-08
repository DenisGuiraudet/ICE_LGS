import { Router } from 'express';


var relation = require('./index');

var relationRouter = Router();

relationRouter.get('/:id', relation.getRelation);


export default relationRouter;