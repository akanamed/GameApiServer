import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;
import UserRepository from '../models/repository/userRepository';

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        console.log('serializeUser:%O', user);
        done(null, user.userid);
    });
    passport.deserializeUser((id, done) => {
        console.log('deserializeUser: %O', id);
        done(null, id);
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
            console.log('call localstrategy');
            return done(null, { userid: resultUser.userid });
        })
        .catch((err) => done(err))));
};
