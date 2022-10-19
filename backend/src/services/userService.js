const sequilize = require('sequelize');
const db = require('../models/index');
const { User } = db.sequelize.models;
const bcrypt = require('bcrypt');
const registerUser = async (req, res) => {
    // read the data from the input fields 
    const name = req.body.name;
    const email = req.body.email;
    let password = req.body.password;
    const phone = req.body.phone;
    const role = req.body.role

    //find all users with the email repeated 

    getData = await User.findAll({
        where: { email: email }
    });
    if (getData.length) {
        return res.status(401).json('email should be unique');
    } else {
        try {
            console.log('inside else');
            // generate salt to hash password
            const salt = await bcrypt.genSalt(10)
            console.log('checking salt', salt);
            // now we set user password to hashed password
            password =  await bcrypt.hash(password, salt);
            console.log('checking password', password);
            const createUser = {
                name,
                email,
                password,
                phone,
                role
            }
            const userData = await User.create(createUser);
            return { status: "success", data: userData };
        } catch (error) {
            return { status: "error", message: "unable to add user"}
        }
    }
};
const loginUser = async (req, res) => {
    const body = req.body;
    let userDetails;
    const user = await User.findOne({ email: body.email });
    const validPassword = await bcrypt.compare(body.password, user.password);
    // console.log('checking data param', validPassword)
    if (validPassword) {
        const getUser = await User.findOne({ email: body.email });
        userDetails = [getUser.dataValues];
    } 
    return { status: 200, data: userDetails };
}
//get user service
const getUsers = async (req, res) => {
    const role = req.params.role;
    var getUser = "";
    if (role == "client" || role == "resource") {
        getUser = await User.findAll({
            where: {
                role
            }
        });
    }
    else {
        getUser = await User.findAll({});
    }
    // console.log(getUser);
    // return { status: 200, data: getUser.map(el => el.get({ plain: true })) };
    return { status: 200, data: getUser };
}
const deleteuser = async (req, res) => {
    var id = req.params.id;
    var deleteid = "";
    var getuser = "";
    getuser = await User.findAll({
        where: {
            id
        }
    });
    console.log(getuser);
    if (getuser.length != 0) {
        deleteid = await User.destroy({
            where: {
                id
            }
        })
        return { status: 200, message: "deleted id successfully"}
    }
    else
        return { status: 401, message: "id doesnt exist" }
}
const updateuser = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    var getuser = "";
    var updateusers = "";
    getuser = await User.findAll({
        where: {
            id
        }
    });
    console.log("user is " + getuser);
    console.log(req.body.name);
    console.log(req.params.id);
    if (getuser.length != 0) {
        updateusers = await User.update({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        },
            {
                where: {
                    id: req.params.id
                }
            })
        return { status: "success", data: req.body.id }
    }

    else
        return { status: "error", message: "id not found to update" }
};

module.exports = {
    registerUser,
    loginUser,
    getUsers,
    deleteuser,
    updateuser
}