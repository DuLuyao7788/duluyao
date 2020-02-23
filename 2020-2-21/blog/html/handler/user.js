
const mysql = require('mysql')

let show_login = (req,res)=>{
    res.render('login')
}

let do_login = (req,res)=>{
  //数据库
const connection=mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'ok',
    database: 'user'

})
let sql = 'SELECT count(1) FROM `user`  WHERE `username` = ? and `password` = ?' 
connection.query(sql,[req.body.username,req.body.password],(err,results)=>{
    if(err){
        console.log(err.message)
        return
    }
      if(results=1){
        res.render('index')
      }else{
        res.render('login')
      }
    })
}

exports.show_login = show_login
exports.do_login = do_login