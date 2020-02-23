exports.get_list = (req,res,next)=>{
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
    console.log('博文列表')
    next()
}

exports.show_index = (req,res)=>{
    res.render('index')
}