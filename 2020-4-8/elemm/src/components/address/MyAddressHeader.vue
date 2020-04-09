<template>
    <div class="addresstop">
        <i :class="{active:active==1}" class="el-icon-arrow-left left" @click="to('/')"></i>
        <div class="shouhuo">选择收货地址</div>
        <div class="add">新增地址</div>
    </div>
</template>
<script>
export default {
    name:"MyAddressHeader",
    props:{
        active:{
            default:1
        }
    },
    methods: {
        to(router){
            this.$router.push({path:router})
        }
    },
}
</script>
<style>
.addresstop{
    background-image: linear-gradient(90deg,#0af,#0085ff);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
}
.left{
    font-size:30px;
    color:#fff;
}
.shouhuo{
    font-size:20px;
    color:#fff;
}
.add{
    font-size:18px;
    color:#fff;
}
.active{
    color:#0089DC;
}
</style>