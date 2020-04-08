<template>
  <div class="item" :style="{'margin-top':top}">
    <div>
      <i class="el-icon--left" :class="icon" :style="{color:iconColor}"></i>
      <span>{{ text }}</span>
    </div>
    <i class="el-icon-arrow-right el-icon--right"></i>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    top: {
      type: String,
      default: "1.5rem"
    }
  }
};
</script>
<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: #606266;
  background-color: #fff;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-top:0.1rem solid #F2F6FC;
}
.item .el-icon--right {
  float: right;
  color: #909399;
  font-weight: 700;
  font-size: 1rem;
}

.item .el-icon--left {
  font-size: 2rem;
}
</style>