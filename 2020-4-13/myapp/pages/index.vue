<template>
  <div class="text">
    <header>登录</header>
    <section id="from">
      <el-form class="demo-ruleForm" :model="input_user">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="input_user.name"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pwd">
          <el-input v-model="input_user.pwd" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="small" @click="login">登录</el-button>
          <a href="/register">
            <el-button type="primary" size="small">注册</el-button>
          </a>
        </el-form-item>
        <div>{{ error }}</div>
      </el-form>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  transition: 'test',
  data() {
    return {
      input_user: {
        name: '',
        pwd: ''
      },
      isError: false
    }
  },
  computed: {
    error() {
      return this.isError ? '登陆失败' : ''
    }
  },
  methods: {
    async login() {
      const { data } = await axios.get('/data/user.json')
      console.log(this.input_user.name)
      console.log(this.input_user.pwd)
      if (
        this.input_user.name === data.username &&
        this.input_user.pwd === data.password
      ) {
        console.log('登陆成功')
        this.isError = false
        this.$store.commit('setTocken', data.username)
        this.$store.commit('setUser', data)
        // 页面跳转
        this.$router.push('/welcome')
      } else {
        console.log('登陆失败')
        this.isError = true
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
