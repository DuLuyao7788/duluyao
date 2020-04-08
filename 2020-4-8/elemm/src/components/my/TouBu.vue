<template>
  <div class="tou-bu">
    <el-row type="flex" align="middle" justify="space-between">
      <el-col :span="6">
        <el-avatar :size="60" src="/images/index/tou.jpg"></el-avatar>
      </el-col>
      <el-col :span="18" class="right">
        <div class="phone">
          <h3>31353f62368</h3>
          <div>
            <i class="el-icon-mobile-phone el-icon--left"></i>
            <span>153****2363</span>
          </div>
        </div>
        <div>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.tou-bu {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  padding: 2rem;
}
.tou-bu .right{
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 3rem;
}

.tou-bu h3{
    font-size:2rem;
    margin: 0;
}
</style>