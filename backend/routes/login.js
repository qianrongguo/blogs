var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
    res.send('login')
})

router.post('/', function (req, res) {
    const body = req.body;
    const username = body.username;
    const password = body.password;
    models.SignUp.findOne({where:{username:username,password:password}}).then(function (response) {
        console.log('hhhh',response,'pppppppp')
        if (response) {
            console.log('登陆成功');
            res.redirect('/blogs')
        }
    })

    // models.Login.sync({force: true}).then(() => {
    // return models.Login.create({
    //     username: username,
    //     password: password
    // }).then(() => console.log('sucess创建成功'))
    //     .catch(e => console.log('创建失败'))
    // })
});

module.exports = router;
