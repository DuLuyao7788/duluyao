<template>
  <div class="dian-pu">
    <el-row type="flex" justify="space-between">
      <div class="img">
        <el-image :src="shop.img" fit="fill"></el-image>
      </div>
      <div class="info">
        <el-row type="flex">
          <span class="pin-pan" v-if="shop.isBrand">品牌</span>
          <h3 class="dian-ming">{{shop.title}}</h3>
        </el-row>
        <el-row type="flex" align="middle">
          <el-rate
            disabled
            show-score
            text-color="#666"
            score-template="{value}"
            :value="shop.rate"
          ></el-rate>
          <span>月销{{shop.sales}}单</span>
        </el-row>
        <el-row type="flex" justify="space-between">
          <div>
            <span>￥0起送</span>
            <el-divider direction="vertical"></el-divider>
            <span>配送￥9</span>
          </div>
          <div>
            <span>985m</span>
            <el-divider direction="vertical"></el-divider>
            <span>30分钟</span>
          </div>
        </el-row>
        <el-row>
          <span class="shop-type">汉堡薯条</span>
        </el-row>
        <div
          class="huo-dong"
          :style="{height:isFullShow?'auto':((shop.promoteSale.length > 2 ? 2 : shop.promoteSale.length) * 2) + 'rem'}"
        >
          <el-row type="flex" justify="space-between">
            <ul>
              <li v-for="(item,i) in shop.promoteSale" :key="i">
                <span :class="item.type">{{item.icon}}</span>
                <span>{{item.title}}</span>
              </li>
            </ul>
            <div @click="isFullShow=!isFullShow">
              <span>{{shop.promoteSale.length}}个活动</span>
              <i
                class="el-icon--right"
                :class="isFullShow?'el-icon-caret-top':'el-icon-caret-bottom'"
              ></i>
            </div>
          </el-row>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      isFullShow: false
    };
  }
};
</script>

<style scoped>
.dian-pu {
  border-bottom: 0.1rem solid #eee;
  padding: 2rem;
}

.img {
  width: 6.5rem;
  height: 6.5rem;
}

.info {
  flex: 1;
  margin-left: 1rem;
}

.pin-pan {
  background-image: linear-gradient(-139deg, #fff100, #ffe339);
  align-self: center;
  margin-right: 1rem;
}
.dian-ming {
  font-size: 1.5rem;
  margin: 0;
}
.el-rate /deep/ .el-rate__icon {
  font-size: 1.4rem;
  margin: 0;
}
.el-rate /deep/ .el-rate__text {
  font-size: 1.4rem;
  line-height: 2rem;
}
.el-rate ~ span {
  margin-left: 0.3rem;
  font-size: 1rem;
}
.shop-type {
  border: 0.1rem solid #eee;
  padding: 0.1rem 0.5rem;
  margin: 1rem 0;
  display: inline-block;
}
.xin,
.pei {
  background-color: #6fbc46;
  color: #fff;
  padding: 0.2rem;
  margin-right: 0.5rem;
  border-radius: 0.2rem;
}
.jian {
  background-color: #f07373;
  color: #fff;
  padding: 0.2rem;
  margin-right: 0.5rem;
  border-radius: 0.2rem;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
  line-height: 2rem;
  flex: 1;
}
.huo-dong {
  overflow: hidden;
}
</style>