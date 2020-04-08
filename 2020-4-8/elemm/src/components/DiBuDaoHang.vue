<template>
  <div class="dbdh">
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <div :class="{active:active==1}" @click="$router.push({ path: '/' })">
          <i class="el-icon-eleme"></i>
          <div>首页</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div :class="{active:active==2}" @click="$router.push({ path: '/find' })">
          <i class="el-icon-discover"></i>
          <div>发现</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div :class="{active:active==3}" @click="$router.push({ path: '/order' })">
          <i class="el-icon-document"></i>
          <div>订单</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div :class="{active:active==4}" @click="$router.push({ path: '/my' })">
          <i class="el-icon-user"></i>
          <div>我的</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      default: 1
    }
  }
};
</script>

<style scoped>
.dbdh {
  text-align: center;
  color: #606266;
  border-top: 0.1rem solid #dcdfe6;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 1rem;
  background-color: #fff;
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
}
.dbdh i {
  font-size: 2.5rem;
}

.dbdh .el-col {
  text-align: center;
}
.active {
  color: #409eff;
}
</style>