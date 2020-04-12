
<template>
<div>
  <table style="width:1000px">
    <tbody>
    <tr>
      <td>日期</td>
      <td>姓名</td>
      <td>地址</td>
    </tr>
    <tr v-for="(li,i) in list" :key="i">
      <td>{{li.date}}</td>
      <td>{{li.name}}</td>
      <td>{{li.address}}</td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  // mounted() {
  //   this.$store.dispatch("getList").then(results => {
  //     this.list = results;
  //   });
  // }
  created() {
    this.$axios.get('/list.json').then(response=>{
      this.list=response.data
    })
  },
};
</script>

