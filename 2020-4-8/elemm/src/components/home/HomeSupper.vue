<template>
    <div class="vip">
        <div class="vip0">
        <el-image :src="imgvip" class="imgvip"></el-image>
        <h3>超级会员</h3>
        <p class="sale">每月领20元红包</p>
        </div>
        <div>
        <p class="limit">限时6元开通 ></p>
        </div>
    </div>
</template>
<script>
export default {
    name:"HomeSupper",
    data(){
        return{
            imgvip:'/images/index/huangguan.jpeg',
        }
    }
}
</script>
<style>
.vip{
    background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
    padding:1rem;
    width:335px;
    margin-left:10px;
    margin-top:5px;
    display:flex;
    justify-content:space-between;
    text-align:center;
}
.vip0{
    display:flex;
}
.imgvip{
    width:20px;
    height:20px;
}
h3{
    margin:0px;
    font-size:14px;
    margin-left:10px;
    margin-right:10px;
}
.sale{
    margin:2px 0px 2px 10px;
    color:#644f1b;
}
.limit{
    color:#644f1b;
    margin:2px 0px 2px 10px;
}
</style>