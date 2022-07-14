const mongoose=require("mongoose") ;

const bcrypt =require("bcryptjs");

const userschema=mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },password:{
        type:String,
        require:true,
    },
    type:{
        type:String,
       
    }
},{
    timestamps:true
})

// Login
userschema.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
  };

// Register
userschema.pre("save", async function (next) {
    if (!this.isModified("password") ) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });

const User=mongoose.model('User',userschema);
module.exports= User;