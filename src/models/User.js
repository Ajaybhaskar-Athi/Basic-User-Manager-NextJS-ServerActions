import mongoose from 'mongoose';

const UserSchema=new mongoose.Schema({
    fName:String,
    lName:String,
    email:String,
    address:String

});

// Check if the model is already compiled before defining it
const User= mongoose.models.User || mongoose.model("User",UserSchema);

export default User; 