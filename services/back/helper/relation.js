
import { TYPES } from '../constants';

export function getRelationsFromExigence1Id(mangodb, id) {
    return new Promise(resolve => {
        mangodb.collection(TYPES.RELATION).find(
            {
                exigence_1_id: id
            }
        ).toArray(
            (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        });
};
