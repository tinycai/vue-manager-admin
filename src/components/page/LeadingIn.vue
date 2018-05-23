<template>
  <div>
    <!-- 面包屑 -->
    <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 待处理订单</el-breadcrumb-item>
                <el-breadcrumb-item>一键商品(导入)</el-breadcrumb-item>
            </el-breadcrumb>
    </div>
    <!-- 文件上传 -->
    <div class="goods_upload">
      <el-upload
        class="upload_btn"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :limit="3"
        :show-file-list = "false"
        >
        <el-button size="small" type="primary">选择文件</el-button>
        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </el-upload>
   </div>
   <!-- 按钮 -->
    <div class="goods_btn clearbox">
      <el-button icon="el-icon-search">上传文件</el-button>
      <el-button type="primary" icon="el-icon-upload2">确定发货</el-button>
      <el-button type="primary" icon="el-icon-download">模版下载</el-button>
    </div>
    <!-- 表格 -->
    <div class="leading_in_table">
       <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%;margin-top:20px;"
        >
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="订单号"
          width="120">
          <template slot-scope="scope">{{ scope.row.orderId }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="商品SKU"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="物流公司名称"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="trackingNum"
          label="物流单号"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="leading_in_pagination">
      <el-pagination
      background
      layout="prev, pager, next"
      :total="100"
      :small="true">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
       tableData3: [
        {
          orderId: '201805231124',
          name: '韩束巨补水',
          address: '上海申通物流有限公司',
          trackingNum: '1234568954'
        },
        {
          orderId: '201805231124',
          name: '韩束巨补水',
          address: '上海申通物流有限公司',
          trackingNum: '1234568954'
        },
        {
          orderId: '201805231124',
          name: '韩束巨补水',
          address: '上海申通物流有限公司',
          trackingNum: '1234568954'
        },
        {
          orderId: '201805231124',
          name: '韩束巨补水',
          address: '上海申通物流有限公司',
          trackingNum: '1234568954'
        },
        {
          orderId: '201805231124',
          name: '韩束巨补水',
          address: '上海申通物流有限公司',
          trackingNum: '1234568954'
        }
        ],
        multipleSelection: []
    }
  }
}
</script>
<style>
.goods_upload {
  display:inline-block;
}
.goods_upload .el-upload--text {
  width: 80px;
  height:32px;
  border: none;
}
.goods_btn {
  float: right;
}
.clearbox::after{
  display: block;
  content: '';
  clear:both;
}
.leading_in_pagination {
  margin:20px 32%;
}
</style>
