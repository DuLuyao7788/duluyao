const mysql = require('mysql')

module.exports = class DB{
    constructor(){
        this.connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: 'ok',
            database: 'user',
        })
        
        this.connection.connect()
    }
    /**
     * 查询操作
     * @param  sql 
     */
    select(sql,params=[],callback){
        let data = []
        this.connection.query(sql,params,(err,result)=>{
            if(err){
                console.log(err.message)
                return
            }
            data = result

            callback(data)
        })
        
        this.connection.end()

        return data
    }

    insert(sql,params=[]){
        let data = []
        this.connection.query(sql,(err,params,result)=>{
            if(err){
                console.log(err.message)
                return
            }
            // 插入成功后的ID
            data[0] = result.insetId
            // 受影响行数
            data[1] = result.affectedRows
            
        })
        
        this.connection.end()

        return data
    }

    update(sql,params=[]){
        let data = 0
        this.connection.query(sql,params,(err,result)=>{
            if(err){
                console.log(err.message)
                return
            }
            // 受影响行数
            data = result.affectedRows
        })
        
        connection.end()

        return data
    }

    delete(sql,params={}){
        let data = 0
        this.connection.query(sql,params,(err,result)=>{
            if(err){
                console.log(err.message)
                return
            }
            // 受影响行数
            data = result.affectedRows
        })
        
        this.connection.end()

        return data
    }
} 
