'use strict';

module.exports = (sequelize, DataTypes) => {
    var Blog = sequelize.define('Blog', {
        title: DataTypes.STRING
    }, {
        content: DataTypes.STRING
    }, {
        author: DataTypes.STRING
    });

    return Blog;
};


