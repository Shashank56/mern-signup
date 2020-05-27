const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

let user = new Schema({
    username:{
        type: String
    },
    user_email: {
        type: String    
    },
    user_password:{
        type:String
    }
},
    {
        collection : 'users'
    })

user.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
user.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  

module.exports = mongoose.model('user', user);