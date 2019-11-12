
import { TYPES } from '../../constants';

export function getExigenceFromId(req, id) {
    req.mangodb.collection(TYPES.EXIGENCE).findOne(
        {
            _id: id
        },
        (err, result) => {
            if (err) throw err;
            return result;
        });
};
