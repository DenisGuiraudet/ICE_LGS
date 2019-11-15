import uuidv4 from 'uuid/v4';

import { TYPES } from '@/constants';


export function newExigence() {
  return {
    _id: uuidv4(),
    type: TYPES.EXIGENCE,
    name: 'exigence.name',
    slug: 'exigence.name',
    category: null,
    relations: []
  };
};

export function newRelation(exigence_1_id: String) {
  return {
    _id: uuidv4(),
    type: TYPES.RELATION,
    name: '',
    exigence_1_id,
    exigence_2_id: null
  };
};
