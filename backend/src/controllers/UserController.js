const User = require('../model/User');

module.exports = {

    async index(req, res){

        const { user_id } = req.params;

        const user = await User.findOne({_id: user_id});

        if (user) {

            res.json(user);

        }

    },

    async newContact(req, res){

        const { email } = req.body;
        const { user_id } = req.headers;        

        let user = await User.findOne({ _id: user_id }).populate('contacts');

        if (user) {
            
            const contact = await User.findOne({ email });
            let exists = false;

            if (contact) {

                if (user.contacts.length > 0) {
                    user.contacts.map(ucontact => {

                        if (ucontact._id.toString() == contact._id.toString()) {
                            exists = true;
                        }

                    });

                    if (!exists) {

                        user.contacts = [...user.contacts, contact._id];
    
                        await user.save();
                    }

                } else {

                    user.contacts = [...user.contacts, contact._id];


                    await user.save();
                }


            }

            // user.contacts = [...user.contacts, contact._id];
            // user.save();
            user = await User.findOne({ _id: user_id }).populate('contacts');
            res.json(user);

        }else{
            console.log('nop');
        }

    },

    async session(req, res){

        const { email, password } = req.headers;        

        let user = await User.findOne({ email }).populate('contacts');

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