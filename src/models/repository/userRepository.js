import User from '../user';

class UserRepository {
    constructor(model) {
        this.model = model;
    }

    create(object) {
        return this.model.create(object);
    }

    findOne(object) {
        return this.model.findOne({ userid: object });
    }
}

export default new UserRepository(User);
