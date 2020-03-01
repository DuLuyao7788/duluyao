/**
 * 整个程序入口文件
 */

const express = require('express')
const session = require('cookie-session')
// 创建主应用
const app = express()

// 静态资源加载
app.use(express.static('static'))

// 模板引擎配置
app.set('view engine','html')
app.set('views',`${__dirname}/views`)
app.engine('html',require('ejs').renderFile)

// POST请求参数配置
app.use(express.urlencoded({extended:true}))
// SESSION配置
app.use(session({
    keys: ['secret'],
    maxAge: 1000 * 60 * 30
}))

// 登录
app.use('/login.html', require('./router/loginRouter'))
// 首页
app.use(/\/(index)?/, require('./router/indexRouter'))
// 退出
app.get('/user/logout', (req, res) => {
    req.session.user = null
    res.render('login', { msg: '退出成功' })
})

// 服务监听
app.listen(3000)