const User = require('../Models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const size = parseInt(req.query.size);

        const skip = (page -1) * size;

        const total = await User.countDocuments();
        const users = await User.find().skip(skip).limit(size);

        res.json({
            records: users,
            total,
            page, 
            size
        });
    } catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
};
