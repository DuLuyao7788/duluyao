const http =require("http")

const server =http.createServer((rep,res)=>{
   res.statusCode=200

   res.setHeader('Content-Type','text/html;charset=utf-8')
   res.end('响应结束')
}
)
server.listen(3000,'127.0.0.1',()=>{
    console.log('请访问：http://127.0.0.1:3000')
})