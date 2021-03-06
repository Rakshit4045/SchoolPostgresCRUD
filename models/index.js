const dbConfig = require("../config/db.config.js");

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: '0'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.schools = require("./school.model.js")(sequelize, Sequelize);

module.exports = db;