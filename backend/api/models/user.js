
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://avenger:m86Ycrc7BSeFnCU@cluster0.igb3o.mongodb.net/tutorial?retryWrites=true&w=majority', {useNewUrlParser: true});
var conn =mongoose.Collection;

var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,

});

var userModel = mongoose.model('usersses', userSchema);
module.exports=userModel;
