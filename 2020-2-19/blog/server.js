// 引入 node_modules 里面的第三方模块
const mime = require('mime')

const http = require('http')
const fs = require('fs')
const url = require('url')

const ejs = require('ejs')

http.createServer((req, res) => {

    let pathname = url.parse(req.url).pathname

    if (req.method.toLocaleLowerCase() == 'get') {


        let _mime = mime.getType(pathname)

        if (pathname == '/favicon.ico') {
            return
        }else if (pathname == '/') {
            res.writeHead(302, { 'location': '/index.html' })
            res.end()
        }else if(pathname == '/index.html'){

            // const DB = require('./db')
            // let db = new DB()
            // let sql = 'SELECT `id`,`title`,`content`,`time` FROM `article`'

            // db.select(sql,[],(result)=>{
            //     ejs.renderFile('./templates/home/index.ejs',{'rmtj':result},(err,str)=>{
            //         if(err){
            //             console.log(err.message)
            //             return
            //         }
            //         res.end(str)
            //     })
            // })
            res.writeHead(302, { 'location': '/index.html' })
            res.end()
        }else{
            res.writeHead(200, { 'Content-Type': _mime + ';charset=utf-8' })

            fs.readFile('./html' + pathname, (err, data) => {
                if (err) {
                    console.log(err.message)
                    return
                }
                res.end(data)
            })
        }

    }else if(req.method.toLocaleLowerCase() == 'post'){
        if(pathname == '/login.html'){
            let params = ''
            req.on('data',(chunk)=>{
                params += chunk
            })
            req.on('end',()=>{
                let param = new URLSearchParams(params.toString())
                if(!param.has('username') || !param.get('username')){
                    console.log('请输入账号')
                    ejs.renderFile('./templates/error.ejs',{title:'登录失败',message:'账号不能为空'},(err,str)=>{
                        if(err){
                            console.log(err.message)
                            return
                        }
                        res.end(str)
                    })
                }
                if(!param.has('password') || !param.get('password')){
                    console.log('请输入密码')
                    ejs.renderFile('./templates/error.ejs',{title:'登录失败',message:'请输入密码'},(err,str)=>{
                        if(err){
                            console.log(err.message)
                            return
                        }
                        res.end(str)
                    })
                }
                let username = param.get('username')
                let password = param.get('password')

                console.log(username,password)
                const User = require('./user')
                const user = new User()
                if(user.login(username,password)){
                    res.writeHead(302,{'location':'/index.html'})
                    res.end()
                }else{
                    res.writeHead(302,{'location':'/login.html'})
                    res.end()
                }
            })
        }
    }

}).listen(3003, '127.0.0.1', () => {
    console.log('服务运行在：http://127.0.0.1:3003')
})