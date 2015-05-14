var Sequelize = require('sequelize');

// Here you replace someUsername and somePassword with your prefered mysql
// username and password.  If you would like to use something other than mysql,
// go for it.  Check out Sequelize's docs for more info:
// http://sequelize.readthedocs.org/en/latest/

var sequelize = new Sequelize('d2evge8hbplo49', 'uocrcyaynwlxdj', 'SbC7NE7Qph_ca3FZYtFOgSWsXu', {
  host: 'postgres://uocrcyaynwlxdj:SbC7NE7Qph_ca3FZYtFOgSWsXu@ec2-107-20-152-139.compute-1.amazonaws.com:5432/d2evge8hbplo49',
  dialect: 'postgres'
});

module.exports = sequelize;
