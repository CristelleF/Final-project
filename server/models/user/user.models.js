    
const mongoose= require("mongoose");
const UserSchema= require("./user.schema");
const UserModel= mongoose.model("UserModel", UserSchema)

//Create new user into MongoDB
UserModel.createUser=(user)=>{
return UserModel.create(user);
}

// Find user by Credentials
UserModel.findUserByCredentials=(username,password)=> {
    return UserModel.findOne({username:username, password:password})
}

//Find user by username
UserModel.findUserByUsername=(username)=>{
    return UserModel.findOne({username:username});
}
//Find user by id
UserModel.findUserById=(uid)=>{
    return UserModel.findById(uid);
}
//Update user
UserModel.updateUser=(user)=>{
    return UserModel.updateOne({_id:user._id}, user);
}
//Find all users
UserModel.findAllUsers=()=>{
    return UserModel.find();
}
//Delete user
UserModel.deleteUser=(id)=>{
    return UserModel.deleteOne({_id: id});
}
module.export=UserModel;