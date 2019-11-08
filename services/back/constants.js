
export const NODE = {
    HOST: '0.0.0.0',
    PORT: 3000,
}

const MONGO_HOST = 'mongo';
const MONGO_PORT = 27017;
export const MONGO = {
    HOST: MONGO_HOST,
    PORT: MONGO_PORT,
    MONGO_DB: 'test',
    MONGO_URL: 'mongodb://' + MONGO_HOST + ':' + MONGO_PORT,
}