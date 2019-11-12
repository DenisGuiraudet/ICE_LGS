import { Router } from 'express';

import { getExigenceFromId } from '../../helper/exigence';
import { TYPES } from '../../constants';


var utilRouter = Router();

utilRouter.get('/exigences_with_category', (req, res) => {
    req.mangodb.collection(TYPES.EXIGENCE).find({}).toArray(
        (err, result) => {
            if (err) throw err;

            let newResult = [];

            for (const key in result) {
                let exigence = result[key];
                newResult.push([
                    result,
                    {
                        name: result.category
                    }
                ])
            }

            res.send({
                types: [ TYPES.EXIGENCE, TYPES.CATEGORY ],
                data: newResult
            });
        });
});

utilRouter.get('/exigences_from_category/:name', (req, res) => {
    req.mangodb.collection(TYPES.EXIGENCE).find(
        {
            category: req.params.name
        }
    ).toArray(
        (err, result) => {
            if (err) throw err;
            res.send({
                types: [ TYPES.EXIGENCE ],
                data: result
            });
        });
});

utilRouter.get('/relations_from_exigence/:id', (req, res) => {

    let newResult = [];

    req.mangodb.collection(TYPES.RELATION).find(
        {
            exigence_1_id: req.params.id
        }
    ).toArray(
        (err, result) => {
            if (err) throw err;

            for (const key in result) {
                let relation = result[key];

                newResult.push([
                    getExigenceFromId(req, relation.exigence_1_id),
                    getExigenceFromId(req, relation.exigence_2_id)
                ])
            }
        });

    req.mangodb.collection(TYPES.RELATION).find(
        {
            exigence_2_id: req.params.id
        }
    ).toArray(
        (err, result) => {
            if (err) throw err;

            for (const key in result) {
                let relation = result[key];

                newResult.push([
                    getExigenceFromId(req, relation.exigence_1_id),
                    getExigenceFromId(req, relation.exigence_2_id)
                ])
            }
        });

    res.send({
        types: [ TYPES.EXIGENCE, TYPES.EXIGENCE ],
        data: newResult
    });
});

utilRouter.get('/relations_exigences_from_relation_name/:name', (req, res) => {
    req.mangodb.collection(TYPES.RELATION).find(
        {
            name: req.params.name
        }
    ).toArray(
        (err, result) => {
            if (err) throw err;

            for (const key in result) {
                let relation = result[key];

                let newResult = [];

                newResult.push([
                    getExigenceFromId(req, relation.exigence_1_id),
                    relation,
                    getExigenceFromId(req, relation.exigence_2_id)
                ])
            }

            res.send({
                types: [ TYPES.EXIGENCE, TYPES.RELATION, TYPES.EXIGENCE ],
                data: newResult
            });
        });
});


export default utilRouter;