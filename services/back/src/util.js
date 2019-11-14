import { Router } from 'express';

import { getExigenceFromId } from '../helper/exigence';
import { cleanDB } from '../helper/util';
import { TYPES } from '../constants';


var utilRouter = Router();


// VIEW

utilRouter.get('/exigences_with_category', (req, res) => {
    req.mangodb.collection(TYPES.EXIGENCE).find({}).toArray(
        (err, result) => {
            if (err) throw err;

            let newResult = [];

            for (const key in result) {
                let exigence = result[key];
                newResult.push([
                    exigence,
                    {
                        type: TYPES.CATEGORY,
                        name: exigence.category
                    }
                ])
            }

            res.send({
                title: '*',
                types: [ TYPES.EXIGENCE, TYPES.CATEGORY ],
                data: newResult
            });
        });
});

utilRouter.get('/exigences_from_category_name/:name', (req, res) => {
    req.mangodb.collection(TYPES.EXIGENCE).find(
        {
            category: req.params.name
        }
    ).toArray(
        (err, result) => {
            if (err) throw err;

            let newResult = [];

            for (const key in result) {
                let exigence = result[key];
                newResult.push([ exigence ]);
            }

            res.send({
                title: `${TYPES.CATEGORY}: ${req.params.name}`,
                types: [ TYPES.EXIGENCE ],
                data: newResult
            });
        });
});

utilRouter.get('/relations_from_exigence/:id', (req, res) => {

    let newResult = [];

    Promise.all([
        new Promise(resolve => {
            req.mangodb.collection(TYPES.RELATION).find(
                {
                    exigence_1_id: req.params.id
                }
            ).toArray(
                async (err, result) => {
                    if (err) throw err;
        
                    for (const key in result) {
                        let relation = result[key];
        
                        newResult.push([
                            await getExigenceFromId(req, relation.exigence_1_id),
                            relation,
                            await getExigenceFromId(req, relation.exigence_2_id)
                        ])
                    }

                    resolve();
                });
        }),
        new Promise(resolve => {
            req.mangodb.collection(TYPES.RELATION).find(
                {
                    exigence_2_id: req.params.id
                }
            ).toArray(
                async (err, result) => {
                    if (err) throw err;
        
                    for (const key in result) {
                        let relation = result[key];
        
                        newResult.push([
                            await getExigenceFromId(req, relation.exigence_1_id),
                            relation,
                            await getExigenceFromId(req, relation.exigence_2_id)
                        ])
                    }

                    resolve();
                });
        }),
        getExigenceFromId(req, req.params.id)
    ]).then(result => {
        res.send({
            title: `${TYPES.EXIGENCE}: ${result[2].name}`,
            types: [ TYPES.EXIGENCE, TYPES.RELATION, TYPES.EXIGENCE ],
            data: newResult
        });
    })

});

utilRouter.get('/relations_exigences_from_relation_name/:name', (req, res) => {
    req.mangodb.collection(TYPES.RELATION).find(
        {
            name: req.params.name
        }
    ).toArray(
        async (err, result) => {
            if (err) throw err;

            let newResult = [];

            for (const key in result) {
                let relation = result[key];

                newResult.push([
                    await getExigenceFromId(req, relation.exigence_1_id),
                    await getExigenceFromId(req, relation.exigence_2_id)
                ])
            }

            res.send({
                title: `${TYPES.RELATION}: ${req.params.name}`,
                types: [ TYPES.EXIGENCE, TYPES.EXIGENCE ],
                data: newResult
            });
        });
});


// EDIT

utilRouter.get('/editon', (req, res) => {
    req.mangodb.collection(TYPES.EXIGENCE).find({}).toArray(
        (err, result) => {
            if (err) throw err;

            let newResult = [];

            for (const key in result) {
                let exigence = result[key];

                req.mangodb.collection(TYPES.RELATION).find(
                        {
                            exigence_1_id: exigence._id
                        }
                    ).toArray(
                        (err, resultRelation) => {
                            if (err) throw err;

                            exigence.relations = resultRelation;
                        });

                newResult.push(exigence);
            }

            res.send(newResult);
        });
});

utilRouter.post('/editon', (req, res) => {

    // LOCAL NEW OBJECTS
    let newExigenceList = [];
    let newRelationList = [];

    for (const key in req.body.exigences) {
        let exigence = req.body.exigences[key];

        newExigenceList.push({
            _id: exigence._id,
            type: TYPES.EXIGENCE,
            name: exigence.name,
            slug: exigence.name,
            category: exigence.category
        });

        for (const keyRelation in exigence.relations) {
            let relation = exigence.relations[keyRelation];

            newRelationList.push({
                _id: relation._id,
                type: TYPES.RELATION,
                name: relation.name,
                exigence_1_id: exigence._id,
                exigence_2_id: relation.exigence_2_id
            })
        }

    }

    // DELETE
    cleanDB(req.mangodb);

    // PUSH NEW OBJECTS
    req.mangodb.collection(TYPES.EXIGENCE).insertMany(
        newExigenceList,
        (err, result) => {
            if (err) throw err;
        });

    req.mangodb.collection(TYPES.RELATION).insertMany(
        newRelationList,
        (err, result) => {
            if (err) throw err;
        });

});


export default utilRouter;