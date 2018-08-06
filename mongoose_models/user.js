const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: String
});

UserSchema.statistics = function(userID, newName) {
  const User = mongoose.model('user');

  return User.findById(userId)
    .then(user => {
    user.name = newName;
    return user.save();
    })
}

const User = mongoose.model('user', UserSchema);

module.exports = User;
