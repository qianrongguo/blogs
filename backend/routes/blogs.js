var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log("request")
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
    // for (let i=0;i<5;i++){
    //     models.Blog.create({
    //         title: "test"
    //     })
    // }

    let params = request.params;
    models.Blog.findOne({
        where: {
            id: params.blogId
        }
    }).then(function (result) {
        response.header('Content-Type', 'application/json; charset=utf-8')
        console.log(result)
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
    let params = request.params;


    // for (let i=0;i<5;i++){
    //     models.Blog.create({
    //         title: "test"
    //     })
    // }


    models.Blog.create({title: body.title}).then(task => {
        // you can now access the newly created task via the variable task
        console.log(task)
        response.header('Content-Type', 'application/json; charset=utf-8')
        response.sendStatus(200);
    })



});


module.exports = router;
