'use strict';

module.exports = (sequelize, DataTypes) => {
    var SignUp = sequelize.define('SignUp', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false}
    });

    return SignUp;
};

