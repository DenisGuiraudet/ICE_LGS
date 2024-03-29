
import { TYPES } from '../constants';

export function getExigenceFromId(mangodb, id) {
    return new Promise(resolve => {
        mangodb.collection(TYPES.EXIGENCE).findOne(
            {
                _id: id
            },
            (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        });
};
