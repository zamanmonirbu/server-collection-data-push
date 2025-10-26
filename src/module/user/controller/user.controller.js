const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../../config/envConfig');



exports.createUser = async(req, res) => {
    const {name,email,password} = req.body;
    try {

        const hasPassword = await bcrypt.hash(password,10);

        const user = new User({
            name,
            email,
            password: hasPassword  
        });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.loginUser = async(req, res) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }


        const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });


        res.status(200).json({ message: 'Login successful' , accessToken: token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getUsers = async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(404).json({ message: 'Users not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
