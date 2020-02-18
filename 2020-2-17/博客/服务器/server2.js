// 引入 http 模块
const http = require('http')
// 引入 url 模块
const url = require('url')
// 引入 fs 模块
const fs = require('fs')

http.createServer((req, res) => {

    let myUrl = url.parse(req.url)

    let urlPathName = myUrl.pathname

    let base = './html'

    console.log(urlPathName)

    // 动态路由
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    fs.readFile(base+urlPathName, (err, data) => {
        // 读取文件失败操作
        if (err) {
            console.log(`读取页面失败：${err.message}`)
            return
        }

        res.end(data)
    })

    
}).listen(3003, '127.0.0.1', () => {
    console.log('请访问：http://127.0.0.1:3003')
})