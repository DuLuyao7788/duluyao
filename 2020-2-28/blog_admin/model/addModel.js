/**
 * 文章模型
 */
const Model = require('./Model')
module.exports = class Add extends Model {
    /**
     *文章添加
     */
    static add_article(title,content) {
        return new Promise((resolve, reject) => {
            this.query('INSERT INTO article (title, content, creation )VALUES(?,?,NOW())',[title,content])
            .then(results => {
                resolve(results)
            }).catch(err => {
                reject(err)
                console.log('添加失败：' + err.message)
            })
        })
    }
}