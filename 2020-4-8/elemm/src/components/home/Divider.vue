<template>
  <div class="divider">
    <el-row>
      <el-col :span="14" :offset="5">
        <el-divider>{{text}}</el-divider>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  }
};
</script>