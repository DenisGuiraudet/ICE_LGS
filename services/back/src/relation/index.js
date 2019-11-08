import { Router } from 'express';

import { TYPE } from '../../constants';


var relationRouter = Router();

relationRouter.get('/:slug', (req, res) => {
    req.mangodb.collection(TYPE.RELATION).findOne(
        {
            type: TYPE.RELATION,
            slug: req.params.slug
        },
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});

relationRouter.get('/', (req, res) => {
    req.mangodb.collection(TYPE.RELATION).find({}).toArray(
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});

relationRouter.post('/', (req, res) => {
    req.mangodb.collection(TYPE.RELATION).insertOne(
        {
            type: TYPE.RELATION,
            name: req.body.name,
            slug: req.body.slug
        },
        (err, result) => {
            if (err) throw err;
            res.send(result)
        });
});


export default relationRouter;