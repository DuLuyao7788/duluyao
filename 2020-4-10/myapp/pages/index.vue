<template>
  <div class="text">
    <header>登录</header>
    <section id="from">
      <el-form class="demo-ruleForm">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="name"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pwd">
          <el-input v-model="pwd" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="small" @click="login">登录</el-button>
          <a href="/register">
            <el-button type="primary" size="small">注册</el-button>
          </a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
export default {
  transition: 'test',
  data() {
    return {
      name: '',
      pwd: ''
    }
  },
  methods: {
    login(name, pwd) {
      const user = this.$store.state.user
      if (user.username === name && user.password === pwd) {
        this.$router.push({ path: '/welcome' })
      } else {
        alert('登录失败')
      }
    }
  }
}
</script>
<style scoped>
.text {
  margin-left: 300px;
  width: 400px;
}
</style>
