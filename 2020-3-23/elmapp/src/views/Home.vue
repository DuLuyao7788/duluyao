<template>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
      <el-row :span="24" type="flex" justify="space-around">
          <el-col>
            <div class="demo-image">
                <div class="block" v-for="(fit,index) in fits" :key="index">
                  <el-image
                      style="width: 100px; height: 100px"
                      :fit="fit.name" :src="fit.img"></el-image>
                      <p class="demonstration">{{ fit.name }}</p>
                </div>
            </div>
          </el-col>
      </el-row>
      <el-row :span="24" type="flex" justify="space-around">
          <el-col>
            <div class="demo-image">
                <div class="block" v-for="(fit,index) in fits2" :key="index">
                  <el-image
                      style="width: 100px; height: 100px"
                      :src="fit.img"
                      :fit="fit.name"></el-image>
                      <p class="demonstration">{{ fit.name }}</p>
                </div>
            </div>
          </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
      return {
        fits: [{name:'美食',img:'https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'}, 
           {name:'大牌惠吃',img:'https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'},
           {name:'跑腿代购',img:'https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'}, 
           {name:'汉堡披萨',img:'https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'}, 
           {name:'甜品饮品',img:'https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'}],

        fits2: [{name:'素食简餐',img:'https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'}, 
           {name:'地方小吃',img:'https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'},
           {name:'米粉面馆',img:'https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'}, 
           {name:'包子粥店',img:'https://cube.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'}, 
           {name:'炸鸡炸串',img:'https://cube.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed'}]
       
      
      }
    }
}
</script>
<style scoped>
.block{
  float: left;
  margin-right: 50px;
  margin-top: 20px;
}
.demonstration{
  text-align: center;
}
</style>
