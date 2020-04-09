<template>
    <div>
        <el-container>
        <el-header>
        <FindHeader></FindHeader>
        </el-header>
        <el-main></el-main>
        <el-footer :active="2" style="padding:0px;">
        <DiBuDaoHang></DiBuDaoHang>
        </el-footer>
        </el-container>
    </div>
</template>
<script>
import FindHeader from '../components/find/FindHeader';
import DiBuDaoHang from '../components/DiBuDaoHang';
export default {
    name:"MyInfo",
    components:{
        DiBuDaoHang,
        FindHeader
    }
}
</script>