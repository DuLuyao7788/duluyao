/**
 * 整个程序入口文件
 */

const express = require('express')
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
// 文章模块(http://localhots:3000/article)
app.use('/article', require('./router/articleRouter'))
// 文章分类模块
app.use('/category', require('./router/categroyRouter'))
// // 404页面
// app.use((req,res)=>{
//     console.log(404)
//     res.render('404')
// })

// 服务监听
app.listen(3000)