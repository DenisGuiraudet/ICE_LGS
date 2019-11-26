
export const NODE = {
    HOST: '0.0.0.0',
    PORT: process.env.PORT || 3000,
}

const MONGO_HOST = 'mongo';
const MONGO_PORT = 27017;
// https://cloud.mongodb.com/v2/5ddc475b9ccf64b2e0a66687#clusters
const MONGO_WWW_URL = 'mongodb+srv://root:root@cluster0-shj60.azure.mongodb.net/test?retryWrites=true&w=majority';
export const MONGO = {
    HOST: MONGO_HOST,
    PORT: MONGO_PORT,
    DB: 'LGS',
    URL: process.env.NODE_ENV === 'production' ? MONGO_WWW_URL : 'mongodb://' + MONGO_HOST + ':' + MONGO_PORT,
}

export const TYPES = {
    CATEGORY: 'CATEGORY',
    EXIGENCE: 'EXIGENCE',
    RELATION: 'RELATION',
}

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
}

export const RELATION_TYPES = {
    DISJOINS: 'DISJOINS',
    BELONGS: 'BELONGS',
    REPEATS: 'REPEATS',
    CONTRADICTS: 'CONTRADICTS',
    EXTENDS: 'EXTENDS',
    CONSTRAINTS: 'CONSTRAINTS',
    CHARACTERIZES: 'CHARACTERIZES',
}
