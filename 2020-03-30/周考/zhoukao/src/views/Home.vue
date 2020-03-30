<template>
  <div class="home">
    <el-container>
      <header class="cardName">
        <h4>待办列表</h4>
      </header>
      <el-main class="card-body">
        <el-row type="flex" justify="space-between" v-for="(item,index) in info" :key="index">
          <el-col :span="12">
            <el-checkbox id="checkbox" disabled v-model="item.state"></el-checkbox>
            <label for="checkbox">{{index+1}}-{{item.title}}</label>
          </el-col>
          <el-col :span="8" class="col2" :offset="4">
            <el-button
              type="primary"
              class="finsh"
              v-if="!item.state"
              v-on:click="item.state=true"
            >完成</el-button>
            <el-button type="danger" class="dele" v-on:click="splice">删除</el-button>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-row>
          <el-col :span="20" class="inputs">
            <el-input placeholder="请填写代办事务" v-model="msg"/>
          </el-col>
          <el-col :span="4">
            <div>
              <el-button type="primary" v-on:click="add">添加</el-button>
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.$store.dispatch("getinfo").then(results => {
      this.info = results;
    });
  },
  data: function() {
    return {
      info: {
        type: Array,
        default: function() {
          return [];
        }
      },
      msg: ""
    };
  },
  methods: {
    splice() {
      this.info.splice(this.index, 1);
    },
    add() {
      this.info.push({ title: this.msg, state: false });
    }
  }
};
</script>
<style scoped>
.el-container{
  border: 1px solid #ddd;
  height:auto;
}
.el-card_header {
  padding: 0;
  height: 100%;
}
header {
  padding: 0;
}
h4{margin:20px;}
ul,
li {
  list-style: none;
}
.home {
  width: 500px;
  margin-top: 3rem;
  margin-left: 40rem;
}
.el-row .el-col{
  font-size:1.3rem;
} 
.cardName {
  font-size: 2.5rem;
  text-align: center;
  background-color: black;
  color: white;
  padding: 0rem;
  margin: 0;
}
.col2 {
  margin-top: -2rem;
  margin-bottom: 1rem;
}
.dele {
  margin-top: 2rem;
}
</style>