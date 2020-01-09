
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
module.exports = () => {
    const uriString = `mongodb://${process.env.MONGODB_SESSION_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`;
    function connect() {
        mongoose.connect(uriString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => {
                console.log('connect mongodb');
            },
            (err) => {
                console.log(err);
            });
    }
    connect();
};
