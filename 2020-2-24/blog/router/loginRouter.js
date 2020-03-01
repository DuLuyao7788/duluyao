/**
 * 登录路由
 */
const express = require('express')
// 引入 文章路由操作
const loginuser = require('../model/loginModel')
// 创建首页子应用
const login = express()

// 加载登录页
login.get('/', (req, res) => {
    res.render('login',{msg:''})
})

login.post('/', (req, res, next) => {
    let { username, password } = req.body
    loginuser.get_loginUser(username, password).then(results => {
        if(results!=''){
            // session存储（key=value）
            req.session.user = JSON.stringify(results)
            console.log(req.session.user)
            res.redirect('/')
        }else{
            res.render('login',{msg:'登录失败！用户名或密码错误'})
        }
    }).catch(err => {
        next(err)
    })
})

module.exports = login