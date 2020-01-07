import session from 'express-session';
import conMongoDBStore from 'connect-mongodb-session';

const MongoDBStore = conMongoDBStore(session);

const mongoStore = new MongoDBStore(
    {
        uri: 'mongodb://localhost:27017/testdb?connectTimeoutMS=5000',
        databaseName: 'testdb',
        collection: 'sessions'
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
