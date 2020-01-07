
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
module.exports = () => {
    function connect() {
        mongoose.connect('mongodb://localhost:27017/testdb', {
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
