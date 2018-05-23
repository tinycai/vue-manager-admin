<template>
  <div>
    <!-- 面包屑 -->
    <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 待处理订单</el-breadcrumb-item>
                <el-breadcrumb-item>一键商品(导出)</el-breadcrumb-item>
            </el-breadcrumb>
    </div>
    <!-- input框 -->
    <div class="leading_out_input">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="订单号">
        <el-input v-model="formInline.orderNum" placeholder="订单号"></el-input>
      </el-form-item>
      <el-form-item label="会员信息">
        <el-input v-model="formInline.infor" placeholder="会员信息"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="formInline.state" placeholder="请选择订单状态">
          <el-option label="已创建" value="create"></el-option>
          <el-option label="已取消" value="cancel"></el-option>
          <el-option label="已发货" value="shipments"></el-option>
          <el-option label="已退款" value="reimburse"></el-option>
          <el-option label="退款失败" value="filed"></el-option>
        </el-select>
      </el-form-item>
      <br>
      <el-form-item label="下单日期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date1"></el-date-picker>
        </el-col>
        <el-col :span="2" style="padding-left:20px;">--</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="formInline.date2"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    </div> 
  </div>
</template>
<script>
export default {
  data () {
    return {
      formInline: {
        orderNum: '',
        infor: '',
        state: '',
        date1: '',
        date2: ''
      }
    }
  },
  methods : {
    onSubmit() {
        console.log('submit!');
      }
  }
}
</script>
<style>

</style>
