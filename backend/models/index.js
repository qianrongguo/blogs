'use strict';

let fs = require('fs');
let path = require('path');
let Sequelize = require('sequelize');
let basename = path.basename(__filename);
let password = process.env.PASSWORD;
console.log(password,"----")
// password = "123456"
let db = {};


let sequelize = new Sequelize("test", "root", password, {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    define: {
        paranoid: true
    }
});


fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        let model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
        console.log(db)
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.sync()
module.exports = db;
