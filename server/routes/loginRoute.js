const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/connection');
const User = require('../models/userSchema');

router.get('/login', (req, res) => {
    res.send("login");
})

router.post('/login', async (req, res) => {

    try{
        const {email, password} = req.body;

        if(!email || !password){
            console.log("Field empty");
            return res.status(422).json({error: "Invalid credentials!"});
        }

        //find email in the database
        const userLogin = await User.findOne({email});
        //console.log(userLogin);

        if(userLogin){
            //console.log("email found");
            const passwordCheck = bcrypt.compareSync(password, userLogin.password);
            
            //token
            const token = await userLogin.generateAuthToken();
            console.log(token);

            //token in cookies
            res.cookie("jwtToken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if(!passwordCheck){
                console.log("Password error", passwordCheck);
                return res.status(422).json({error: "Invalid credentials!"});
            }
            else{
                console.log(`Login successful ${email}`);
                return res.status(200).json({message:"Login successful!"});
            }
        }
        else{
            return res.status(422).json({error: "Invalid credentials!"});
        }

    } catch(err){
        console.log(err);
    }
});

module.exports = router;