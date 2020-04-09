<template>
    <div>

    <div class="searchadd">
    <div>
    <span>连云港</span>
    <i class="el-icon-caret-bottom bottom"></i>
    </div>
        <div class="inneraddress">
        <i class="el-icon-search el-icon--left"></i>
        <span class="sousuotext">请输入地址</span>
        </div>
    </div>
    <p class="nowtext">当前地址</p>
    <div class="nowlocation">
    <h3 class="lo">北大青鸟中博学院矿大校区</h3>
    <div>
    <i class="el-icon-aim"></i>
    <span class="relocation">重新定位</span>
    </div>
    </div>
     <p class="nowtext">收货地址</p>
    <div class="shouadd">
    <div class="shoulocation">
    <h3 class="lo">王娜</h3>
    <span class="infos">女士</span>
    <span class="infophone">152****3544</span>
    </div>
    <div class="shoutitle">南京大学金城学院</div>
    </div>
    </div>
</template>
<script>
export default {
    name:"SouSuoAddress",
    
}
</script>
<style>
.searchadd{
    padding:1rem 2rem;
    background-color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.sousuotext{
    color:#999;
    font-weight:100;
    font-size:1.5rem;
}
.el-icon-search{
    font-size:1.5rem;
    color:#999;
    font-weight:bold;
}
.inneraddress{
    padding:1rem;
    background-color:#f5f5f5;
    text-align:center;
    width:240px;
}
.bottom{
    margin-left:10px;
}
.nowlocation{
    display:flex;
    justify-content:space-between;
    background-color:#fff;
    padding:1.2rem;
    align-items:center;
}
.lo{
    font-size:18px;
}
.el-icon-aim{
    color:#2395FF;
    font-size:16px;
}
.relocation{
    color:#2395FF;
    font-size:16px;
    margin-left:0.5rem;
}
.nowtext{
    padding: 5vw 0 1.866667vw 4vw;
    color: #666;
    font-size:14px;
}
.shouadd{
    background-color:#fff;
    padding:1.2rem;
}
.shoulocation{
    display:flex;
    align-items:center;
}
.infos{
    font-size:13px;
    color:#666;
}
.infophone{
    color:#666;
    margin-left:5px;
}
.shoutitle{
    margin-left:10px;
    font-size:14px;
    color:#666;
}
</style>