var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {


    // test insert
    models.Blog.create({title: "title2"})


    res.header('Content-Ty-+pe', 'application/json; charset=utf-8')
    let params = req.query;
    let title = params.title;
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

// 插卡某一偏博客的详情页面
router.get("/:blogId", function (request, response) {

    // 创建假数据
    let params = request.params;
    models.Blog.findOne({
        where: {
            id: params.blogId
        }
    }).then(function (result) {
        response.header('Content-Type', 'application/json; charset=utf-8')  //跨域
        // console.log(result)
        response.send(result)
    }).catch(function (err) {
        console.log(err)
    })

})


// 编辑博客的详情页面
router.put("/:blogId", function (request, response) {

    let body = request.body;
    let params = request.params;


    models.Blog.update(
        {title: body.title},
        {
            where: {id: params.blogId}
        }
    )
        .then(function (rowsUpdated) {
            console.log(rowsUpdated, typeof rowsUpdated)
            response.send(body)
        }).catch(function (err) {
        console.log(err)
        response.send(body)

    })

});


// 新增博客
router.post("/", function (request, response) {

    let body = request.body;

    models.Blog.create({title: body.title}).then(task => {
        console.log(task)
        response.header('Content-Type', 'application/json; charset=utf-8')
        response.sendStatus(200);
    })


});

//删除博客
router.delete("/:blogId", function (request, response) {
    let body = request.params;
    models.Blog.destroy({
        where:
            {id: body.blogId}, force: true
    })
        .then(task => {
            console.log(task)
            response.header('Content-Type', 'application/json; charset=utf-8')
            response.sendStatus(200);
        })


});

module.exports = router;
