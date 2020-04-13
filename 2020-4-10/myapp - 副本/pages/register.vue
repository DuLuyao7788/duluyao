<template>
  <div class="page">
    <header>注册</header>
    <section id="from">
      <el-form class="demo-ruleForm">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input v-model="cpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button id="reg" type="primary" size="small">注册</el-button>
          <a href="/">
            <el-button type="primary" size="small">登录</el-button>
          </a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      pwd: '',
      cpwd: ''
    }
  },
  mounted() {},
  methods: {
    regist(name, pwd) {
      this.$store.commit('regist', { username: name, userpwd: pwd })
      alert('注册完成')
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style scoped>
.page {
  margin-left: 300px;
  width: 400px;
}
</style>
