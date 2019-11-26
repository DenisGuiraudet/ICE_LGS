import { Router } from 'express';
import { isEmpty } from 'underscore';

import { getExigenceFromId } from '../helper/exigence';
import { cleanDB, getExigencesWithRelations } from '../helper/util';
import { TYPES } from '../constants';


var utilRouter = Router();

utilRouter.get('/test', (req, res) => {
    res.send('test');
});


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
                            await getExigenceFromId(req.mangodb, relation.exigence_1_id),
                            relation,
                            await getExigenceFromId(req.mangodb, relation.exigence_2_id)
                        ])
                    }

                    resolve(newResult);
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
                            await getExigenceFromId(req.mangodb, relation.exigence_1_id),
                            relation,
                            await getExigenceFromId(req.mangodb, relation.exigence_2_id)
                        ])
                    }

                    resolve(newResult);
                });
        }),
        getExigenceFromId(req.mangodb, req.params.id)
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
                    await getExigenceFromId(req.mangodb, relation.exigence_1_id),
                    await getExigenceFromId(req.mangodb, relation.exigence_2_id)
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
    getExigencesWithRelations(req.mangodb).then(result => {
        res.send(result);
    });
});

utilRouter.post('/editon', (req, res) => {

    // LOCAL NEW OBJECTS
    let newExigenceList = [];
    let newRelationList = [];

    for (const key in req.body) {
        let exigence = req.body[key];

        if (
            !isEmpty(exigence._id)
            && !isEmpty(exigence.name)
            && !isEmpty(exigence.url)
            && !isEmpty(exigence.line)
            && !isEmpty(exigence.category)
        ) {
            newExigenceList.push({
                _id: exigence._id,
                type: TYPES.EXIGENCE,
                name: exigence.name,
                url: exigence.url,
                line: exigence.line,
                category: exigence.category
            });
        }

        for (const keyRelation in exigence.relations) {
            let relation = exigence.relations[keyRelation];

            if (
                !isEmpty(relation._id)
                && !isEmpty(relation.name)
                && !isEmpty(relation.exigence_2_id)
            ) {
                newRelationList.push({
                    _id: relation._id,
                    type: TYPES.RELATION,
                    name: relation.name,
                    exigence_1_id: exigence._id,
                    exigence_2_id: relation.exigence_2_id
                })
            }
        }

    }

    // DELETE
    cleanDB(req.mangodb).then(() => {
        // PUSH NEW OBJECTS
        if (isEmpty(newExigenceList)) {
            res.send([]);
        }
        req.mangodb.collection(TYPES.EXIGENCE).insertMany(
            newExigenceList,
            (err, result) => {
                if (err) throw err;

                if (isEmpty(newRelationList)) {
                    getExigencesWithRelations(req.mangodb).then(result => {
                        res.send(result);
                    });
                } else {
                    req.mangodb.collection(TYPES.RELATION).insertMany(
                        newRelationList,
                        (err, result) => {
                            if (err) throw err;
    
                            getExigencesWithRelations(req.mangodb).then(result => {
                                res.send(result);
                            });
                        });
                }
            });
    });

});


export default utilRouter;