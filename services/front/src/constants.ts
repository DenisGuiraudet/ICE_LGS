
export const backUrl = process.env.NODE_ENV === 'production' ? 'https://ice-lgs-back.herokuapp.com' : 'http://localhost:3000';

export const docUrl = 'https://mi-git.univ-tlse2.fr/ECb/LGS/blob/master/';

export const toastPosition = {
  position: 'bottomRight',
};

export const TYPES = {
  CATEGORY: 'CATEGORY',
  EXIGENCE: 'EXIGENCE',
  RELATION: 'RELATION',
};

export const CATEGORY_TYPES = {
  BEHAVIOR: 'BEHAVIOR',
  COMPONENT: 'COMPONENT',
  COMPONENT_ACTOR: 'COMPONENT / Actor',
  CONSTRAINT: 'CONSTRAINT',
  CONSTRAINT_ASSUMPTION: 'CONSTRAINT / Assumption',
  CONSTRAINT_OBLIGATION: 'CONSTRAINT / Obligation',
  CONSTRAINT_BUSINESS_RULE: 'CONSTRAINT / Business rule',
  CONSTRAINT_ENGINEERING_DECISION: 'CONSTRAINT / Engineering decision',
  CONSTRAINT_PHYSICAL_RULE: 'CONSTRAINT / Physical rule',
  GOAL: 'GOAL',
  LACK: 'LACK',
  LIMIT: 'LIMIT',
  META_REQUIREMENT: 'META REQUIREMENT',
  META_REQUIREMENT_JUSTIFICATION: 'META REQUIREMENT / Justification',
  PRODUCT: 'PRODUCT',
  TASK: 'TASK',
};

export const RELATION_TYPES = {
  DISJOINS: 'DISJOINS',
  BELONGS: 'BELONGS',
  REPEATS: 'REPEATS',
  CONTRADICTS: 'CONTRADICTS',
  EXTENDS: 'EXTENDS',
  CONSTRAINTS: 'CONSTRAINTS',
  CHARACTERIZES: 'CHARACTERIZES',
};

export const URL_PAGES = {
  ANALOGICAL: 'analogical',
  ARCHITECTURE: 'architecture',
  CYLINDERS: 'cylinders',
  DESCRIPTION: 'description',
  ELECTRO_VALVES: 'electro-valves',
  HEALTH: 'health',
  REQS: 'reqs',
  SCENARIOS: 'scenarios',
  TIMING: 'timing',
};
