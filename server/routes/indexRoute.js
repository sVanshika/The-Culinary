const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

require('../db/connection');
const User = require('../models/userSchema'); 

router.get('/', (req, res)=>{
    res.send("Home from router.js");
})

// using ASYNC / AWAIT
router.post('/register', async (req, res) => {

    try{
        const {name, email, password, confirmPassword} = req.body.user;

        if(!name || !email || !password || !confirmPassword){
            console.log("Please fill the credentials completely!");
            return res.status(400).json({error: "Please fill the credentials completely!"});
        }
        const userExist = await User.findOne({email: email});

        if(userExist) {
            console.log("Email already exits");
            return res.status(400).json({error: "Email already exits"});
        }
        else if(password != confirmPassword){
            console.log("Passwords does not match");
            return res.status(400).json({error: "Passwords does not match"});    
        }
        else{
            const user = new User({name, email, password, confirmPassword});

            const newUser = await user.save();
            console.log(`User registered sucessfully! \n${newUser}`);

            sendEmail(newUser);

            res.status(201).json({message: "User registered successfully!"});

        }

        
    } catch (err) {
        console.log(err);
    }

});

function sendEmail(user){
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '007vanshikasharma@gmail.com',
                pass: 'vans(11*12)'
            }
        });
    
        const mailOptions = {
            from: '007vanshikasharma@gmail.com',
            to: user.email,
            subject: 'Welcome to The Culinary family!',
            html: `
                <h2>Hello</h2>
                <p>Welcome to <strong>The Culinary</strong>!</p>
                <p>Let's cook some mouth-watering delicacies and enjoy ourselves.</p>

            `
        };
    
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        
    } catch (error) {
        console.log("mail error ", error);
    }
}
     



module.exports = router;