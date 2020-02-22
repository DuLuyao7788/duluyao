const DB = require('./db')

module.exports = class User{
    login(username,password){
        let sql = 'SELECT `password` FROM `user` WHERE `username` = ? and `password` = ? '
        const db = new DB()
        let result = db.select(sql,[username,password])
        console.log(result)
        if(password == result[0].password){
            return true
        }else{
            return false
        }
    }
}