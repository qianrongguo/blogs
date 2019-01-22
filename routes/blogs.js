var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log("request")
    res.header('Content-Type', 'application/json; charset=utf-8')
// res.send({hello:"world"})
//     return


    // console.log(models.Blog)
    // 插入测试数据
    // for (i = 0; i < 20; i++) {
    //     models.Blog.create({
    //         title: i,
    //         content: "这个是博客内容",
    //         author: " 作者"
    //     });
    // }
    let params = req.query;
    let title = params.title;
    console.log(title)
    if (title !== undefined) {
        models.Blog.findAll({
            raw: true, where: {
                title: title,
            }
        }).then(function (blogs) {
            res.header('Content-Type', 'application/json; charset=utf-8')
            res.send(JSON.stringify(blogs))
        });
        return

    } else {
        models.Blog.findAll({
            raw: true,
        }).then(function (blogs) {
            res.header('Content-Type', 'application/json; charset=utf-8')
            res.send(JSON.stringify(blogs))
        });
        return

    }


});

module.exports = router;
