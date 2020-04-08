<template>
  <div
    class="home"
    v-infinite-scroll="getShops"
    ref="root"
    infinite-scroll-delay="0"
    infinite-scroll-disabled="isInfiniteDisabled"
  >
    <el-container>
      <el-header height="94px">
        <ding-wei></ding-wei>
        <sou-suo ref="souSuo" :is-fixed-top="souSuoTop"></sou-suo>
      </el-header>
      <el-main>
        <shou-ye-dao-hang :sydh="sydh"></shou-ye-dao-hang>
        <divider text="推荐商家"></divider>
        <dian-pu-shai-xuan
          @clickTab="clickTab"
          ref="dianPuShaiXuan"
          :is-fixed-top="dianPuShaiXuanTop"
          @closed="closed"
        ></dian-pu-shai-xuan>
        <dian-pu v-for="(shop,i) in shops" :key="i" :shop="shop"></dian-pu>
        <div v-if="isLoading" class="loading">
          <i class="el-icon-loading el-icon--left"></i>正在加载...
        </div>
        <div v-else class="loading">已经到底</div>
      </el-main>
      <el-footer>
        <di-bu-dao-hang :active="1" key="home"></di-bu-dao-hang>
      </el-footer>
    </el-container>
    <el-backtop target=".home" :right="30" :bottom="100">
      <div>
        <i class="el-icon-top"></i>
      </div>
    </el-backtop>
  </div>
</template>

<script>
import DingWei from "@/components/home/DingWei";
import SouSuo from "@/components/home/SouSuo";
import DiBuDaoHang from "@/components/DiBuDaoHang";
import ShouYeDaoHang from "@/components/home/ShouYeDaoHang";
import Divider from "@/components/home/Divider";
import DianPuShaiXuan from "@/components/home/DianPuShaiXuan";
import DianPu from "@/components/home/DianPu";

export default {
  name: "Home",
  components: {
    DingWei,
    SouSuo,
    DiBuDaoHang,
    ShouYeDaoHang,
    Divider,
    DianPuShaiXuan,
    DianPu
  },
  data() {
    return {
      sydh: [],
      shops: [],
      souSuoTop: false,
      dianPuShaiXuanTop: false,
      page: 0, // 当前页码,
      isLoading: false
    };
  },
  computed: {
    isInfiniteDisabled() {
      return (
        this.isLoading || this.shops.length == this.$store.state.shops.length
      );
    }
  },
  mounted() {
    window.onload = () => {
      const souSuoOffsetTop = this.$refs.souSuo.$refs.root.offsetTop; // 获取搜索DOM的offsetTop
      const souSuoHeight = this.$refs.souSuo.$refs.root.clientHeight; // 获取搜索DOM的高度
      const dianPuShaiXuanOffsetTop = 343;
      // 滚动监听
      this.$refs.root.onscroll = () => {
        let scrollTop = this.$refs.root.scrollTop; // 获取滚动条偏移TOP值
        this.souSuoTop = scrollTop >= souSuoOffsetTop; // 是否让搜索框置顶
        this.dianPuShaiXuanTop =
          scrollTop >= dianPuShaiXuanOffsetTop - souSuoHeight - 10;
      };
    };

    // 获取首页导航的数据
    this.$store.dispatch("getSydh").then(results => {
      this.sydh = results;
    });

    // 获取首页店铺的数据
    this.$store.dispatch("getShops").then(results => {
      this.shops = results;
    });
  },
  methods: {
    getShops() {
      this.isLoading = true;
      setTimeout(() => {
        this.page++;
        let newShops = this.$store.getters.getShops(this.page);
        this.shops = this.shops.concat(newShops);
        this.isLoading = false;
      }, 1000);
    },
    clickTab(index){
      if(index == 1 || index == 4){
        this.$refs.root.scrollTop = 343
      }else{
        this.$refs.root.scrollTop = 0
      }
    },
    closed(sx1,sx2,sx3,sx4){
      console.log(sx1)
      console.log(sx2)
      console.log(sx3)
      console.log(sx4)
        // this.axios('').then(results=>{
        //   this.shops = results.data
        // })
    }
  }
};
</script>
<style scoped>
.el-header,
.el-main,
.el-footer {
  padding: 0;
}

.home {
  height: 100vh;
  overflow: auto;
}

.loading {
  padding: 1rem;
  text-align: center;
}
</style>
