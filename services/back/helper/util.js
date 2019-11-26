import { getRelationsFromExigence1Id } from '../helper/relation';
import { TYPES, CATEGORY_TYPES, RELATION_TYPES } from '../constants';

export function cleanDB(mangodb) {
  return Promise.all([
    new Promise(resolve => {
      mangodb.collection(TYPES.EXIGENCE).deleteMany(
        {},
        (err, result) => {
          if (err) throw err;
          resolve(result);
        });
    }),
    new Promise(resolve => {
      mangodb.collection(TYPES.RELATION).deleteMany(
        {},
        (err, result) => {
          if (err) throw err;
          resolve(result);
        });
    }),
  ]);
};

export function getExigencesWithRelations(mangodb) {
  return new Promise(resolve => {
    mangodb.collection(TYPES.EXIGENCE).find({}).sort({url: 1, line: 1}).toArray(
      async (err, result) => {
          if (err) throw err;

          let newResult = [];

          for (const key in result) {
              let exigence = result[key];

              exigence.relations = await getRelationsFromExigence1Id(mangodb, exigence._id);

              newResult.push(exigence);
          }

          resolve(newResult);
      });
  })
};

export function addFakeData(mangodb) {
  mangodb.collection(TYPES.EXIGENCE).insertMany(
    [
      {
        _id: 'exigence_id_1',
        type: TYPES.EXIGENCE,
        name: 'Choux Fleur',
        url: '/',
        category: CATEGORY_TYPES.LIMIT
      },
      {
        _id: 'exigence_id_2',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        url: '/',
        category: CATEGORY_TYPES.TASK
      }
    ],
    (err, result) => {
      if (err) throw err;
    });

  mangodb.collection(TYPES.RELATION).insertMany(
    [
      {
        _id: 'relation_id_1',
        type: TYPES.RELATION,
        name: RELATION_TYPES.DISJOINS,
        exigence_1_id: 'exigence_id_1',
        exigence_2_id: 'exigence_id_2'
      }
    ],
    (err, result) => {
      if (err) throw err;
    });
};
