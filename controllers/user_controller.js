const findAllUsers = async (req, res) => {
    res.status(200).json({
        description: 'All users is here'
    });
};

const findUsersById = async (req, res) => {
    const idUser = req.params.id;
    console.log(idUser); 
    res.status(200).json({
        description: 'An user who has the id ${req.params.id}'
    });
};

const updateUsersById = async (req, res) => {
    res.status(200).json({
        description: 'Update user with id ${req.params.id}'
    });
};

const addUsers = async (req, res) => {
    res.status(200).json({
        description: 'Add user in the database'
    });
};

const changeStatusUsers = async (req, res) => {
    res.status(200).json({
        description: 'change user status to 0 for delete user'
    });
};

module.exports = {
    findAllUsers,
    findUsersById,
    addUsers, 
    updateUsersById, 
    changeStatusUsers
};