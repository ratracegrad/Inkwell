var Sequelize = require('sequelize');

// Here you replace someUsername and somePassword with your prefered mysql
// username and password.  If you would like to use something other than mysql,
// go for it.  Check out Sequelize's docs for more info:
// http://sequelize.readthedocs.org/en/latest/

if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
  var sequelize = new Sequelize('websteamcmd', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });
}


module.exports = sequelize;
