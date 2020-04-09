<template>
    <div class="orders">
        <el-row>
        <el-col><el-image :src="orderimg" class="orderimg"></el-image></el-col>
        </el-row>
        <el-row>
        <el-col class="tip">
        {{tip}}
        </el-col>
        </el-row>
        <el-row>
        <el-col class="searchorder">
        {{searchorder}}
        <i class="el-icon-arrow-down down"></i>
        </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:"OrderMain",
    data(){
        return{
            tip:"近三个月无外卖订单记录",
            searchorder:"查看三个月前的外卖订单",
            orderimg:"//fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png"
        }
    }
}
</script>
<style>
.orders{
    text-align:center;
    margin-top:60px;
    
}
.orderimg{
    width:210px;
    height:160px;
}
.tip{
    font-size:20px;
    color:#6a6a6a;
    margin:15px 0px 15px 0px;
}
.searchorder{
    color:#999999;
}
.down{
    color:#999;
    font-size:10px;
}
</style>