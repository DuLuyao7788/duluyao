<template>
  <div class="shai-xuan">
    <div class="inner">
        <div class="item">
        <h3>商家服务(可多选)</h3>
        <el-checkbox-group v-model="sjfw">
            <el-row :gutter="5">
                <el-col :span="8"><el-checkbox-button label="1"><el-image src="/images/icons/1.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="2"><el-image src="/images/icons/2.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="3"><el-image src="/images/icons/3.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="4"><el-image src="/images/icons/4.png"></el-image><span>新店</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="5"><el-image src="/images/icons/5.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="6"><el-image src="/images/icons/6.png"></el-image><span>食无忧</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="7"><el-image src="/images/icons/7.png"></el-image><span>开发票</span></el-checkbox-button></el-col>
            </el-row>
        </el-checkbox-group>
        </div>
        
        <div class="item">
        <h3>优惠活动(单选)</h3>
        <el-checkbox-group v-model="yhhd" :max="1">
            <el-row :gutter="5">
                <el-col :span="8"><el-checkbox-button label="1"><el-image src="/images/icons/1.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="2"><el-image src="/images/icons/2.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="3"><el-image src="/images/icons/3.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="4"><el-image src="/images/icons/4.png"></el-image><span>新店</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="5"><el-image src="/images/icons/5.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="6"><el-image src="/images/icons/6.png"></el-image><span>食无忧</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="7"><el-image src="/images/icons/7.png"></el-image><span>开发票</span></el-checkbox-button></el-col>
            </el-row>
        </el-checkbox-group>
        </div>
        
        <div class="item">
        <h3>人均消费(单选)</h3>
        <el-checkbox-group v-model="yjxf" :max="1">
            <el-row :gutter="5">
                <el-col :span="8"><el-checkbox-button label="1"><el-image src="/images/icons/1.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="2"><el-image src="/images/icons/2.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="3"><el-image src="/images/icons/3.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="4"><el-image src="/images/icons/4.png"></el-image><span>新店</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="5"><el-image src="/images/icons/5.png"></el-image><span>蜂鸟专送</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="6"><el-image src="/images/icons/6.png"></el-image><span>食无忧</span></el-checkbox-button></el-col>
                <el-col :span="8"><el-checkbox-button label="7"><el-image src="/images/icons/7.png"></el-image><span>开发票</span></el-checkbox-button></el-col>
            </el-row>
        </el-checkbox-group>
        </div>
    </div>
    <el-button-group>
        <el-button type="info" :disabled="true">清空</el-button>
        <el-button type="success" @click="click">确定</el-button>
    </el-button-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sjfw: [],
      yhhd:[],
      yjxf:[]
    };
  },
  methods: {
      click(){
          this.$emit('sxClick',this.sjfw,this.yhhd,this.yjxf)
      }
  },
};
</script>
<style scoped>
.inner{
    padding:0 2rem;   
}

h3{
    font-size: 1.3rem;
    color:#909399;
    font-weight: 800;
}
.el-checkbox-button{
    width: 100%;
}
.el-checkbox-button /deep/ .el-checkbox-button__inner{
    display: flex;
    align-items: center;
    width: 100%;
}
.el-checkbox-button /deep/ span{
    font-size: 1.3rem;
}
.el-image /deep/ img{
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
}
.el-col{
    margin: .2rem 0;
}

.el-button-group{
    margin-top: .5rem;
    width: 100%;
}
.el-button-group /deep/ button{
    width: 50%;
    border-radius: 0;
}
</style>