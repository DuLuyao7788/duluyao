/**
 * 文章路由的操作
 */

const Article = require('../model/articleModel')


let page_data = {}

module.exports = {
    // 获取列表
    get_list: (req, res, next) => {
        Article.get_list().then(results => {
            page_data.articles = results
            next()
        })
    },
    // 加载首页
    index: (req, res) => {
        res.render('index', {str: page_data.articles })
    }
}