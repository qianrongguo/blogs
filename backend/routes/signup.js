var models = require('../models');
var express = require('express');
var router = express.Router();

// router.get('/', function (req, res) {
//     res.send('注册')
// });

router.post('/', function (req, res) {
    const body = req.body;
    const username = body.username;
    const password = body.password;
    const repassword = body.repassword;

    if (password.length === 0) {
        throw new Error('密码不能为空')
    } else if (username.length === 0) {
        throw new Error('用户名不能为空')
    } else if (password !== repassword) {
        throw new Error('请确认密码')
    }

    models.SignUp.findOne({where: {username: username}})
        .then(function (resposne) {
            console.log('sss', resposne, 'llll')
            if (!resposne) {
                models.SignUp.create({
                    username: username,
                    password: password
                })
            }
        })
        .then(function (result) {
            console.log(result, 'haha')
        }).catch(() => console.log('用户名已经存在'))
});


module.exports = router;
