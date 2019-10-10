const User = require('../model/User');

module.exports = {

    async session(req, res){

        const { email, password } = req.headers;        

        let user = await User.findOne({ email });

        if (user) {

            if (user.password === password) {

                return res.json(user);

            } else {

                return res.status(500).json({message: 'Ooops, Wrong password =['})

            }

        }

        user = await User.create({ email, password });

        return res.json(user);

    }

}