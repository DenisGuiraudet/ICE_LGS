import { Router } from 'express';

import { CATEGORY_TYPES } from '../../constants';


var categoryRouter = Router();

categoryRouter.get('/types', (req, res) => {
    res.send(CATEGORY_TYPES);
});


export default categoryRouter;