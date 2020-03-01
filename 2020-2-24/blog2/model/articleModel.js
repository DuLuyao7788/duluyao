/**
 * 文章模型
 */
const Model = require('./Model')
module.exports = class Article extends Model {

    /**
     * 获取文章列表
     */
    static get_list() {
        return new Promise((resolve, reject) => {
            this.query('SELECT id, title, content,creation FROM article').then(results => {
                resolve(results)
            }).catch(err => {
                console.log('获取文章列表失败：' + err.message)
            })
        })
    }
}