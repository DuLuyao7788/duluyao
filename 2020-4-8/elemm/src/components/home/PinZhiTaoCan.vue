<template>
 <div class="pz">
    <div class="pztc">
        <div>
             <h1>品质套餐</h1>
             <p>搭配齐全吃得好</p>
              <el-link :underline="false">立即抢购 ></el-link>
        </div>
        <div>
            <el-image src="/images/index//pinzhitaocan.png"></el-image>
        </div>
    </div>
</div>
</template>
<style scoped>
    .pz{padding: 0 10px;}
    .pztc{display: flex;justify-content: space-between;background-color: #f5f5f5;padding: 0 1.2rem;margin-top: 2rem;height: 11.6rem;}
    .pztc h1{font-size: 1.8rem;color: #333;}
    .pztc p{font-size: 1.3rem;color: #777;margin-top: -1.2rem;}
    .pztc .el-link{color: #af8260;font-size: 1.32rem;margin-top: -1.4rem;font-weight: 700;}
    .el-image{height: 25.066667vw;width: 37.6vw;margin-top: 0.8rem;}
</style>