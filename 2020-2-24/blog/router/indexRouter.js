/**
 * 首页路由
 */

const express = require('express')
// 引入 文章路由操作
const article = require('../handler/indexHandler')
const auth = require('../handler/auth')

// 创建首页子应用
const index = express()


// 加载首页面
index.get('/', [article.get_list,auth.getUser], (req, res) => {
    let {articles,user} = req
    res.render('index', {str:articles,user:user})
})

module.exports = index