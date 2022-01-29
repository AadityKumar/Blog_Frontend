
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://avenger:m86Ycrc7BSeFnCU@cluster0.igb3o.mongodb.net/tutorial?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var conn =mongoose.Collection;

var userSchema =new mongoose.Schema({
  name: {type:String, 
    required: true 
       },
  email:  {
    type:String, 
    required: true,
    index: {
        unique: true, 
    },
    match:/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  },
  password:  {
    type:String, 
    required: true
},
role:  {
  type:String, 
  required: true
},
date:{
  type: Date, 
  default: Date.now }
});


var userModel = mongoose.model('usersses', userSchema);
module.exports=userModel;
