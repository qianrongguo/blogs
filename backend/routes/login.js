var models = require('../models');
var express = require('express');
var router = express.Router();
var config = require('../config');
var jwt = require('jsonwebtoken');


router.get('/', function (req, res) {
    res.send('login')
})

router.post('/', function (req, res,next) {
    const body = req.body;
    const username = body.username;
    const password = body.password;
    models.SignUp.findOne({where:{username:username,password:password}}).then(function (response) {
        if (response) {
            const user = {
                username: body.userName
            };
            const token =jwt.sign(user, config.JWT_SECRET, {
                expiresIn: 60 * 2
            }) ;
            console.log(token,'pppppppp');
            // res.localStorage.setItem('token', token);
            // res.cookie('Authrization',token);
            res.setHeader('token',token);
            res.status(200).send(token)

        }else {
            res.status(401).json({
                error:{
                    message:'Wrong username or password'
                }
            })
        }

    })

});

module.exports = router;
