<template>
  <div class="my">
    <el-container>
      <el-header height="103">
        <tou-bu></tou-bu>
      </el-header>
      <el-main>
        <hong-bao-jin-bi></hong-bao-jin-bi>
        <item icon="el-icon-map-location" icon-color="#409EFF" text="我的地址" key="wddz"></item>

        <item icon="el-icon-goods" icon-color="#67C23A" text="金币商城" key="jbsc"></item>
        <item icon="el-icon-present" icon-color="#F56C6C" text="分享拿20元现金" key="fxnxj" top="0"></item>

        <item icon="el-icon-service" icon-color="#409EFF" text="我的客服" key="jbsc"></item>
        <item icon="el-icon-eleme" icon-color="#409EFF" text="下载饿了么APP" key="fxnxj" top="0"></item>
        <item icon="el-icon-document" icon-color="#409EFF" text="规则中心" key="fxnxj" top="0"></item>

        <div class="zhengce">
          <router-link to>隐私政策</router-link>
        </div>
      </el-main>
      <el-footer>
        <di-bu-dao-hang :active="4" key="my"></di-bu-dao-hang>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import DiBuDaoHang from "@/components/DiBuDaoHang";
import TouBu from "@/components/my/TouBu";
import HongBaoJinBi from "@/components/my/HongBaoJinBi";
import Item from "@/components/my/Item";
export default {
  components: {
    DiBuDaoHang,
    TouBu,
    HongBaoJinBi,
    Item
  }
};
</script>

<style scoped>
.my {
  background: #f5f5f5;
  height: 100vh;
}
.el-header,
.el-main,
.el-footer {
  padding: 0;
}
.zhengce {
  text-align: center;
  padding: 1.5rem;
}
.zhengce a {
  font-size: 1.5rem;
  color: #409eff;
  text-decoration: none;
}
</style>