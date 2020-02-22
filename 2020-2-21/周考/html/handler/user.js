const db=require('./db')

let show_login = (req,res)=>{
    res.render('login')
}

let do_login = (req,res)=>{
    if(req.body.username == 'admin' && req.body.password == '111') {
        res.render('index')
    }else{
        res.render('login')
    }
   
}

exports.show_login = show_login
exports.do_login = do_login