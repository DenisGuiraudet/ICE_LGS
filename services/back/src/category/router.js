import { Router } from 'express';

var category = require('./index');

var categoryRouter = Router();

categoryRouter.get('/:id', category.getCategory);

export default categoryRouter;