const User = require('../models/Users');

const UsersController = {

    index: async function (req, res, next) {
        try {
            const users = await User.findAll({ limit: 10 });
            res.json(users);
          } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    },

    
};

module.exports = UsersController;