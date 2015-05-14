var Sequelize = require('sequelize');

// Here you replace someUsername and somePassword with your prefered mysql
// username and password.  If you would like to use something other than mysql,
// go for it.  Check out Sequelize's docs for more info:
// http://sequelize.readthedocs.org/en/latest/

var sequelize = new Sequelize('d82ki0tje0if63', 'gycipvjtlneoii', 'afg8aTp2Na94knzoBIvvq6Oorj', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
