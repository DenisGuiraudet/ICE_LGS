import { Router } from 'express';

import { TYPE } from '../../constants';


var categoryRouter = Router();

categoryRouter.get('/:slug', (req, res) => {
    req.mangodb.collection(TYPE.CATEGORY).findOne(
        {
            type: TYPE.CATEGORY,
            slug: req.params.slug
        },
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});

categoryRouter.get('/', (req, res) => {
    req.mangodb.collection(TYPE.CATEGORY).find({}).toArray(
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});

categoryRouter.post('/', (req, res) => {
    req.mangodb.collection(TYPE.CATEGORY).insertOne(
        {
            type: TYPE.CATEGORY,
            name: req.body.name,
            slug: req.body.slug
        },
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});


export default categoryRouter;