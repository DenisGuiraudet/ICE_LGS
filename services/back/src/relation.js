import { Router } from 'express';

import { TYPES, RELATION_TYPES } from '../constants';


var relationRouter = Router();

relationRouter.get('/types', (req, res) => {
    res.send(RELATION_TYPES);
});

relationRouter.get('/all', (req, res) => {
    req.mangodb.collection(TYPES.RELATION).find({}).toArray(
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});

relationRouter.get('/:id', (req, res) => {
    req.mangodb.collection(TYPES.RELATION).findOne(
        {
            _id: req.params.id
        },
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});

relationRouter.post('/new', (req, res) => {
    req.mangodb.collection(TYPES.RELATION).insertOne(
        {
            type: TYPES.RELATION,
            name: req.body.name,
            exigence_1_id: req.body.exigence_1_id,
            exigence_2_id: req.body.exigence_2_id
        },
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});


export default relationRouter;