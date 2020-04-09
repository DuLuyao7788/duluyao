<template>
    <div>
        <el-container>
        <el-header>
        <OrderMain></OrderMain>
        </el-header>
        <el-main>
        </el-main>
        <el-footer :active="3" style="padding:0px;">
        <DiBuDaoHang></DiBuDaoHang>
        </el-footer>
        </el-container>
    </div>
</template>
<script>
import OrderMain from '../components/order/OrderMain';
import DiBuDaoHang from '../components/DiBuDaoHang';
export default {
    name:"MyInfo",
    components:{
        DiBuDaoHang,
        OrderMain
    }
}
</script>