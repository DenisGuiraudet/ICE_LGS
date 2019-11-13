
import { TYPES } from '../constants';

export function getExigenceFromId(req, id) {
    return new Promise(resolve => {
        req.mangodb.collection(TYPES.EXIGENCE).findOne(
            {
                _id: id
            },
            (err, result) => {
                if (err) throw err;
                resolve(result);
            });
        });
};
