/**
 * 后台管理 - 添加管理
 */
const express = require('express')
const addarticle = require('../model/addModel')
const articleApp = express()

articleApp.get('/add',(req,res,next)=>{
    res.render('admin/article/add')
})
articleApp.post('/add',(req,res,next)=>{
    let title=req.body.title
    let content=req.body.content
    addarticle.add_article(title,content).then(results => {
        if(results==1){
            res.render('admin/article/add')
        }else{
            res.render('admin/article/add')
        }
    }).catch(err => {
        next(err)
    })
})

module.exports = articleApp