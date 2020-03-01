/**
 * 文章模型
 */
const Model = require('./Model')
module.exports = class Login extends Model {
    /**
     * 获取登录用户
     * @param {integ} num 获取的数量
     * @returns {Promise}
     */
    static get_loginUser(username,password) {
        return new Promise((resolve, reject) => {
            this.query('SELECT 	userid,username FROM USER WHERE username=? AND PASSWORD=?',[username,password])
            .then(results => {
                resolve(results[0])
            }).catch(err => {
                console.log('登录失败：' + err.message)
                reject(err)
            })
        })
    }
}