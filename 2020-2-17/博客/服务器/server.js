
const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {

    let myUrl = url.parse(req.url)

    if (req.method.toLocaleLowerCase() == 'post') {

        if(myUrl.pathname == '/login.html'){
            let params = ''
            req.on('data',(chunk)=>{
                params += chunk
            })
            req.on('end',()=>{
                let param = new URLSearchParams(params.toString())
                let username = param.get('username')
                let password = param.get('password')
                if(username == 'admin' && password == '111'){
                    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
                    fs.readFile('./html/index.html',(err,data)=>{
                        res.end(data)
                    })
                }else{
                    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
                    fs.readFile('./html/404.html',(err,data)=>{
                        res.end(data)
                    })
                }
            })
        }else{
            res.end()
        }

    }else if (req.method.toLocaleLowerCase() == 'get') {

        if(myUrl.pathname == '/favicon.ico'){
            return
        }
        
        if (myUrl.pathname == '/do_login.html') {

            let params = new URLSearchParams(myUrl.query)
            res.end(params.get('username'))

        } else {
            res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' })
            fs.readFile('./html' + myUrl.pathname, (err, data) => {
                if (err) {
                    console.log(err.message)
                    return
                }
                res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
                res.end(data)
            })
        }
    } else {
        fs.readFile('./html/404.html', (err, data) => {
            if (err) {
                console.log(err.message)
                return
            }
            res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' })
            res.end(data)
        })
    }




    

}).listen(3002, '127.0.0.1', () => {
    console.log('请访问：http://127.0.0.1:3002')
})