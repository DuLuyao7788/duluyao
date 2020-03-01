/**
 * 登录路由
 */
const express = require('express')
// 引入 文章路由操作
const loginuser = require('../handler/loginHandler')
const article = require('../handler/indexHandler')
// 创建首页子应用
const login = express()

// 加载登录页面
login.get('/',(req,res)=>{
    res.render('login',{msg:''})
   
})
//登录
login.post('/',[loginuser.get_loginuser],(req,res)=>{
    if(req.user){
        req.session.user = result
        res.redirect('/')
    }else{
        res.render('login',{msg:'用户名或密码错误'})
    }
})

module.exports = login