import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;
import UserRepository from '../models/repository/userRepository';

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        console.log('serializeUser');
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        console.log('deserializeUser');
        done(null, user);
    });

    passport.use(new LocalStrategy({
        usernameField: 'userid',
        passwordField: 'password'
    }, (userid, password, done) => UserRepository.findOne(userid)
        .then((resultUser) => {
            if (resultUser === null) {
                console.log('resultUser');
                return done(null, false);
            }
            return done(null, resultUser);
        })
        .catch((err) => done(err))));
};
