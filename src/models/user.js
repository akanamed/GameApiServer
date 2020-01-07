import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userid: { type: String },
    password: { type: String }
});

const User = mongoose.model('User', userSchema);
export default User;
