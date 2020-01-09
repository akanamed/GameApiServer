import session from 'express-session';
import conMongoDBStore from 'connect-mongodb-session';

const MongoDBStore = conMongoDBStore(session);
const uriString = `mongodb://${process.env.MONGODB_SESSION_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}?connectTimeoutMS=5000`;
const mongoStore = new MongoDBStore(
    {
        uri: uriString,
        databaseName: process.env.MONGODB_NAME,
        collection: process.env.MONGODB_COLLECTION
    },
    (error) => {
        if (error) {
            console.log('%O', error);
        }
    }
);

mongoStore.on('error', (error) => {
    if (error) {
        console.log('%O', error);
    }
});

export { mongoStore, session };
