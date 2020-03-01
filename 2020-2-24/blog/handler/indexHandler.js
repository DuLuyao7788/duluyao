/**
 * 文章路由的操作
 */

const Article = require('../model/articleModel')


module.exports = {
    // 获取列表
    get_list: (req, res, next) => {
        Article.get_list().then(results => {
            req.articles = results
            next()
        })
    }
}