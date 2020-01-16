
import UserRepository from '../../models/repository/userRepository';
import passport from 'passport';

exports.createUser = async (req, res, next) => {
    try {
        const user = req.body;
        const searchUser = await UserRepository.findOne(user.userid);
        if (searchUser) {
            res.redirect('/auth/login/fail');
        } else {
            const createUser = await UserRepository.create(user);
            res.json(createUser);
        }
    } catch (error) {
        console.log('error');
        error.status = 422;
        next(error);
    }
};

exports.login = (req, res, next) => {
    const user = req.body;
    console.log('%s, %s, %O, %O', user.userid, user.password, req.user, req.session.passport);
    passport.authenticate('local', { session: false }, (err, result, info) => {
        if (err) {
            return next(err);
        }
        if (result === null || result === false) {
            return res.redirect('/auth/login/fail');
        }
        return req.login(result, (error) => {
            console.log('call req.login, %O, %O', req.user, req.session.passport);
            if (error) {
                next(error);
            }
            res.redirect('/auth/login/success');
        });
    })(req, res, next);
    /*
    UserRepository.findOne(user.userid)
        .then((searchUser) => {
            if (searchUser === null) {
                console.log('search user is null');
                return res.redirect('/auth/login/fail');
            }
            console.log(searchUser);
            req.session.user = user;
            return res.redirect('/auth/login/success');
        })
        .catch((error) => {
            console.log(error);
            res.redirect('/auth/login/fail');
        });
    */
};

exports.loginInfo = (req, res, next) => {
    console.log('call loginInfo, %O, %O', req.user, req.session.passport);
    const userInfo = req.user;
    return res.json({
        user: userInfo
    });
};

exports.success = (req, res, next) => res.json({
    message: 'success login'
});

exports.fail = (req, res, next) => res.json({
    message: 'fail login'
});

exports.logout = (req, res, next) => {
    delete req.session;
    return res.json({
        message: 'success logout'
    });
};
