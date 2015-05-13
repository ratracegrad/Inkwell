var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var User = require('./user.js');
var Project = require('./project.js');

var ProjectUpvote = db.define('ProjectUpvote',
  {
    upvoter: Sequelize.INTEGER,
    projectupvoted: Sequelize.INTEGER,
 
  }
);

db.sync();

module.exports = ProjectUpvote;
