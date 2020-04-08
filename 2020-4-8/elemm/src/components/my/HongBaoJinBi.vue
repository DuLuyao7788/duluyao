<template>
  <div class="hbjb">
    <el-row>
      <el-col :span="12">
        <h3>
          <span>0</span>
          <small>个</small>
        </h3>
        <div class="title">红包</div>
      </el-col>
      <el-col :span="12">
        <h3>
          <span>0</span>
          <small>个</small>
        </h3>
        <div class="title">金币</div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.hbjb {
  text-align: center;
  background: #fff;
}
.hbjb h3 {
  font-size: 3rem;
  margin: 0;
}
.hbjb h3 small {
  font-size: 1.5rem;
}
.hbjb .el-col {
  padding: 2rem 0;
}
.hbjb .el-col:first-child {
  color: #f56c6c;
  border-right: 1px solid #ebeef5;
}
.hbjb .el-col:last-child {
  color: #67c23a;
}
.hbjb .el-col .title{
    color:#606266;
    font-weight: 700;
}
</style>