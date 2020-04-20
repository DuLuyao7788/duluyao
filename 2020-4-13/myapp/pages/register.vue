<template>
  <div class="page">
    <header>注册</header>
    <section id="from">
      <el-form class="demo-ruleForm" :model="input_user">
        <el-form-item label="昵称" prop="name">
          <el-input v-model="input_user.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="input_user.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="input_user.pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input v-model="input_user.cpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button id="reg" type="primary" size="small" @click="regist">
            注册
          </el-button>
          <a href="/">
            <el-button type="primary" size="small">登录</el-button>
          </a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      input_user: { name: '', email: '', pwd: '', cpwd: '' }
    }
  },
  mounted() {},
  methods: {
    async regist() {
      await axios.get('/data/user.json', {
        username: this.input_user.name,
        password: this.input_user.pwd
      })

      // if (this.input_user.name === data.username) {
      //   alert('该用户存在')
      // } else {
      //   this.$store.commit('regist', {
      //     username: this.input_user.name,
      //     password: this.input_user.pwd
      //   })
      alert('注册完成')
      this.$router.push({ path: '/' })
      // }
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
