import uuidv4 from 'uuid/v4';

import { TYPES } from '@/constants';


export function newExigence() {
  return {
    _id: uuidv4(),
    type: TYPES.EXIGENCE,
    name: '',
    url: '',
    category: null,
    relations: [],
  };
}

export function newRelation(exigenceId: String) {
  return {
    _id: uuidv4(),
    type: TYPES.RELATION,
    name: '',
    exigence_1_id: exigenceId,
    exigence_2_id: null,
  };
}
