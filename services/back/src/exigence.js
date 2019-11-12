import { Router } from 'express';

import { getExigenceFromId } from '../helper/exigence';
import { TYPES } from '../constants';


var exigenceRouter = Router();

exigenceRouter.get('/all', (req, res) => {
    req.mangodb.collection(TYPES.EXIGENCE).find({}).toArray(
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});

exigenceRouter.get('/:id', (req, res) => {
    res.send(getExigenceFromId(req, req.params.id));
});

exigenceRouter.post('/new', (req, res) => {
    req.mangodb.collection(TYPES.EXIGENCE).insertOne(
        {
            type: TYPES.EXIGENCE,
            name: req.body.name,
            slug: req.body.slug // TODO: do it here from name
        },
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});


export default exigenceRouter;