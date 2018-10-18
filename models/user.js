const mongoose = require('mongoose');

// Define collection and schema for Users
var userSchema = mongoose.Schema({
  name: {
    type: String
  },
  password: {
    type: String
  }
},{
    collection: 'user'
});
var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
}
//module.exports = mongoose.model('User', userSchema);