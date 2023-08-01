const User = require('../models/Users');

const UsersController = {

    async index(req, res) {
        try {
            const users = await User.findAll({ limit: 10 });
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

};

module.exports = UsersController;
