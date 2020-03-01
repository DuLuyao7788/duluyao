const mysql = require('mysql')
const ejs = require('ejs')
exports.get_list = (req,res,next)=>{
    const connection=mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'ok',
        database: 'user'
    
    })
    let sql = 'SELECT id, title, content, creation FROM article ' 
    var str=""
    connection.query(sql,(err,results)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log(results)
     res.render('index',{str:results})
    })
    // next()
}

exports.show_index = (req,res)=>{
    res.render('index')
}