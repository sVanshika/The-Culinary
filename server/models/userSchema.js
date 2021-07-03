const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    email:{
        type:String, 
        required:true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword:{
        type: String,
        required: true
    },
    tokens:[
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
    
})  


//password hashing

userSchema.pre('save', async function(next){
    //console.log("outsdide");
    if(this.isModified('password')) {
        //console.log("inside");
        this.password = await bcrypt.hashSync(this.password, 12);
        this.confirmPassword = await bcrypt.hashSync(this.confirmPassword, 12);
    }
    next();
});

//Token
userSchema.methods.generateAuthToken = async function (){
    try{
        let jwtToken = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: jwtToken});
        await this.save();
        return jwtToken;
    } catch(err){
        console.log(err);
    }

}

const User = mongoose.model('users', userSchema);
module.exports = User;