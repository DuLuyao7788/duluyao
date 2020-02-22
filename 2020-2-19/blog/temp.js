const http = require('http')
const ejs = require('ejs')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'})

    ejs.renderFile('./templates/error.ejs',{'title':'登录错误','message':'用户名或密码错误'},(err,str)=>{
        if(err){
            console.log(err.message)
            return
        }

        res.end(str)
    })

}).listen(3000,'127.0.0.1', () => {
    console.log('服务运行在：http://127.0.0.1:3000')
})