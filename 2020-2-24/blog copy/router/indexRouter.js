/**
 * 首页路由
 */

const express = require('express')
// 引入 文章路由操作
const article = require('../handler/indexHandler')

// 创建首页子应用
const index = express()

// 加载首页面
index.get('/',[article.get_list],article.index)

module.exports = index