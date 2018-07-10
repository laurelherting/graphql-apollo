const db = require('./mongoDB_connection');

const User = require('./mongoose_models/user');
const player = new User({
  name: "player"
});

player.save()
  .then( (user) => {
    console.log(user);
  });

db.connection.close();

