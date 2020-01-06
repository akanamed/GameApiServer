
const UserInfo = {
    userid: 'abc',
    password: 12345
};

exports.createUser = (req, res, next) => {
    const { userid } = req.body;
    const { password } = req.body;
    return res.json({
        message: 'success'
    });
};

exports.login = (req, res, next) => {
    const { userid } = req.body;
    const { password } = req.body;

    if (userid === undefined || password === undefined) {
        return next();
    }

    if (UserInfo.userid !== userid || UserInfo.password !== password) {
        return res.redirect('/auth/login/fail');
    }

    return res.redirect('/auth/login/success');
};

exports.success = (req, res, next) => res.json({
    message: 'success login'
});

exports.fail = (req, res, next) => res.json({
    message: 'fail login'
});
