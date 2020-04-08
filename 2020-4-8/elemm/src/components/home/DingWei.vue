<template>
  <div class="ding-wei">
    <i class="el-icon-location-outline el-icon--left"></i>
    <span>{{ weiZhi }}</span>
    <i class="el-icon-caret-bottom el-icon--right"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weiZhi: "正在识别地址..."
    };
  },
  mounted() {
    setTimeout(()=>{
        this.weiZhi = "徐州市淮海路107号"
    },1000)   
  }
};
</script>
<style scoped>
.ding-wei {
  font-size: 1.8rem;
  font-weight: 700;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  padding:1rem 2rem 0 2rem;
}

.ding-wei .el-icon--left {
  font-weight: 700;
}

.ding-wei .el-icon--right {
  font-size: 1rem;
  display: inline-flex;
  vertical-align: middle;
  margin-top: -0.5rem;
}
</style>