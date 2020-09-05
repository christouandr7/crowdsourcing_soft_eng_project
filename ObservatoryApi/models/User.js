var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var UserSchema = new Schema( {
  username:  { type:String,required: true,unique:true},
  email:  { type:String,required: true,unique:true},
  password:  { type:String,required: true},
  firstname:  { type:String,required: true},
  lastname:  { type:String,required: true},
  date_of_birth:  { type:Date,required: true},
  gender:  { type:String,required: true},
  phone_num:  { type:String,required: true},
  admin: {type:Boolean ,default:false},
  token: {type:String}
});
module.exports = mongoose.model('User',UserSchema);

var User =mongoose.model('User',UserSchema);
//get products

module.exports= {
    async getUsers() {
      const users = await User.find({},{password:0});
      return users;
    },
    async getUserById(id){
      const user = await User.findById(id,{password:0});
      return user;
    },
    async addUser(userobj){
     const user = await User.create(userobj);
     return user;
    },
    async deleteUser(id){
      const user = await User.deleteOne({_id:id});
      return user;
    },
    async findUser(username){
      const user = await User.findOne({ username: username });
      return user;
    },
    async addJWT(id,token){
      const user= await User.findOneAndUpdate({_id:id},{$set: {"token": token}},{new:true});
      return user;
    },
    async removeJWT(id){
      const user= await User.findOneAndUpdate({_id:id},{$set: {"token": null}},{new:true});
      return user;
    },
    async updateUserfields(id,user){
      if(user.password!=null){
      user.password=bcrypt.hashSync(user.password, 8);}
      const users= await User.findOneAndUpdate({_id:id},{$set : user },{new:true});
      return users;
    }
}
