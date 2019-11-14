
import { TYPES, CATEGORY_TYPES, RELATION_TYPES } from '../constants';

export function cleanDB(mangodb) {
  return Promise.all([
      new Promise(resolve => {
        mangodb.collection(TYPES.EXIGENCE).deleteMany(
          {},
          (err, obj) => {
            if (err) throw err;
            resolve();
          });
      }),
      new Promise(resolve => {
        mangodb.collection(TYPES.RELATION).deleteMany(
          {},
          (err, obj) => {
            if (err) throw err;
            resolve();
          });
      }),
    ])
};

export function getExigencesWithRelations(mangodb) {
  return new Promise(resolve => {
    mangodb.collection(TYPES.EXIGENCE).find({}).toArray(
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
        slug: 'choux fleur',
        category: CATEGORY_TYPES.LIMIT
      },
      {
        _id: 'exigence_id_2',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_3',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_4',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_5',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_6',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_7',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_24',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_8',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_9',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_10',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_11',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_12',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_13',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_14',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_15',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_16',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_17',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_18',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_19',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_20',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_21',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_22',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
        category: CATEGORY_TYPES.TASK
      },
      {
        _id: 'exigence_id_23',
        type: TYPES.EXIGENCE,
        name: 'Oui mais Non',
        slug: 'oui mais non',
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
