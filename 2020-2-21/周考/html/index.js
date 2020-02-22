const express = require('express')
// const article = require('./handler/article')
const user = require('./handler/user')

const app = express()

// 静态加载
app.use(express.static('static'))

// POST参数接收
app.use(express.urlencoded({ extended: true }))

// 设置模板引擎
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/view`)

// 加载首页面
app.get('/',(req,res)=>{res.sendFile(`${__dirname}/index.html`)})
app.get('/index.html',(req,res)=>{res.sendFile(`${__dirname}/index.html`)})

// 登录页
app.get('/login.html',user.show_login).post('/login.html',user.do_login)

app.listen(3000, '127.0.0.1', () => {
    console.log('服务运行在：http://127.0.0.1:3000')
})