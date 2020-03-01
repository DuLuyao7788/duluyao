/**
 * 路由的操作
 */

const loginUser = require('../model/loginModel')

module.exports = {
    get_loginuser: (req, res, next) => {
        let {username,password}=req.body
        loginUser.get_loginUser(username,password).then(results => {
            req.result=results
            next()
            
        }).catch(err=>{
            next(err)
        })
    },
    
}