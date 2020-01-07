
import UserRepository from '../models/repository/userRepository';

exports.createUser = (req, res, next) => {
    const user = req.body;

    UserRepository.create(user)
        .then((newUser) => {
            res.json(newUser);
        })
        .catch((error) => {
            res.status(422).json({
                error
            });
        });
};

exports.login = (req, res, next) => {
    const user = req.body;
    console.log('%s, %s', user.userid, user.password);
    UserRepository.findOne(user.userid)
        .then((searchUser) => {
            if (searchUser === null) {
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
