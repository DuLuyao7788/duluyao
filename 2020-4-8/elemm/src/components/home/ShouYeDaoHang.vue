<template>
  <div class="sydh">
    <el-row>
      <el-col v-for="(item,i) in sydh" :key="i" :span="4" :offset="(i!=0 && i!= 5) ? 1 : 0">
        <el-image :src="item.img">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <div>{{ item.title }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    sydh: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.sydh{
  padding: 2rem;
}
.el-col {
  text-align: center;
  padding-bottom: 0.5rem;
  color: #606266;
}
</style>