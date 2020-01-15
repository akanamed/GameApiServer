import mongoose from 'mongoose';

// 영문자, 숫자조합만 허용. 4~12 길이 제한
function NameAlphabeticValidator(val) {
    return val.match('^[a-zA-Z0-9+]{4,12}$');
}

function StringLengthValidator(val) {
    if (val.length <= 4) { return null; }
    return val;
}

const userSchema = new mongoose.Schema({
    userid: {
        type: String,
        validate: {
            validator: NameAlphabeticValidator,
            msg: 'user id is not allow text'
        }
    },
    password: {
        type: String,
        validate: {
            validator: StringLengthValidator,
            msg: 'password is short, at least 4characters'
        }
    }
});

const User = mongoose.model('User', userSchema);
export default User;
