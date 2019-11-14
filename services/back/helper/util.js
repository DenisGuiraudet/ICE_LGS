
import { TYPES, CATEGORY_TYPES, RELATION_TYPES } from '../constants';

export function cleanDB(mangodb) {
  mangodb.collection(TYPES.EXIGENCE).deleteMany(
    {},
    (err, obj) => {
      if (err) throw err;
    });

mangodb.collection(TYPES.RELATION).deleteMany(
    {},
    (err, obj) => {
      if (err) throw err;
    });
};

export function addFakeData(mangodb) {
  mangodb.collection(TYPES.EXIGENCE).insertMany(
    [
      {
        _id: 'exigence_id_1',
        type: TYPES.EXIGENCE,
        name: 'Choux Fleur',
        slug: 'choux fleur',
        category: CATEGORY_TYPES.LIMIT
      },
      {
        _id: 'exigence_id_2',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      }
    ],
    (err, result) => {
      if (err) throw err;
      console.log(result)
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
      console.log(result)
    });
};
