import { Router } from 'express';

import { TYPE } from '../../constants';


var exigenceRouter = Router();

exigenceRouter.get('/:slug', (req, res) => {
    req.mangodb.collection(TYPE.EXIGENCE).findOne(
        {
            type: TYPE.EXIGENCE,
            slug: req.params.slug
        },
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});

exigenceRouter.get('/', (req, res) => {
    req.mangodb.collection(TYPE.EXIGENCE).find({}).toArray(
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});

exigenceRouter.post('/', (req, res) => {
    req.mangodb.collection(TYPE.EXIGENCE).insertOne(
        {
            type: TYPE.EXIGENCE,
            name: req.body.name,
            slug: req.body.slug
        },
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});


export default exigenceRouter;