const User = require('../models/User');

exports.deleteUser = async (req, res, next) => {
    try {

        if (!req.params.id) {
            console.log("ID Mising")
            res.sendStatus(404).json({ err: 'ID MISSING' });
        }
        const uId = req.params.id;
        await User.destroy({ where: { id: uId } })
        return res.sendStatus(200)

    } catch (err) {
        console.log(err)
        res.sendStatus(500).json(err)
    }
};

exports.getUsers = async (req, res, next) => {
    try {

        return res.json(await User.findAll());
    }
    catch (err) {
        console.log("getting users failed", JSON.stringify(err))
        res.status(500).json({ err: err })
    }
}

exports.postAddUserDetails = async (request, response, next) => {
    try {
        if (!request.body.phoneNumber) {
            throw new Error("Phone number is required");
        }
        const name = request.body.name;
        const email = request.body.email;
        const phoneNumber = request.body.phoneNumber;
        const data = await User.create({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
        });
        console.log(data)

        response.status(201).json({ newUserDetails: data })
    } catch (err) {
        console.log(err)
        response.status(500).json({ error: err })
    }

}
