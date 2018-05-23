<template>
  <div class="clearbox">
    <!-- 面包屑 -->
    <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 待处理订单</el-breadcrumb-item>
                <el-breadcrumb-item>跨境购商品导入</el-breadcrumb-item>
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
        <el-button size="small" type="primary">点击上传</el-button>
        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </el-upload>
   </div>
   <!-- 按钮 -->
    <div class="goods_btn clearbox">
      <el-button icon="el-icon-search">读取Excel</el-button>
      <el-button type="primary" icon="el-icon-upload2">上传商品</el-button>
      <el-button type="primary" icon="el-icon-download">模板下载</el-button>
    </div>
   <!-- 表格 -->
    <div class="goods_tab">
      <el-table 
      :data="tableData5" 
      height="450"
      style="width: 100%;margin-top:20px;">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品名称:">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="所属店铺:">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="SKU ID:">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID:">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="商品分类:">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="店铺地址:">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="SKU详细描述:">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="SKU ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="SKU单位 "
        prop="name">
      </el-table-column>
      <el-table-column
        label="SKU详细描述"
        prop="desc">
      </el-table-column>
      <el-table-column
        label="SKU名称"
        prop="SKU_name">
      </el-table-column>
      <el-table-column
        label="品牌"
        prop="logo">
      </el-table-column>
      <el-table-column
        label="供应商"
        prop="supplier">
      </el-table-column>
    </el-table>

    </div>

  </div>
</template>
<script>
export default {
   data() {
      return {
       tableData5: [{
          id: '12987122',
          name: '唐三彩国际有限公司',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          logo: '唐三彩',
          supplier: '兰蔻',
          SKU_name: '大家撒花即可放假'
        }, 
        {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          logo: '唐三彩',
          supplier: '兰蔻',
          SKU_name: '大家撒花即可放假'
        },
         {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          logo: '唐三彩',
          supplier: '兰蔻',
          SKU_name: '大家撒花即可放假'
        },
         {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          logo: '唐三彩',
          supplier: '兰蔻',
          SKU_name: '大家撒花即可放假'
        },
         {
          id: '12987129',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          logo: '唐三彩',
          supplier: '兰蔻',
          SKU_name: '大家撒花即可放假'
        },
        {
          id: '12987129',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          logo: '唐三彩',
          supplier: '兰蔻',
          SKU_name: '大家撒花即可放假'
        },
        {
          id: '12987129',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          logo: '唐三彩',
          supplier: '兰蔻',
          SKU_name: '大家撒花即可放假'
        }
        ]
      };
    },
    methods: {
      
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
 <!--兼容ie-->
 .clearfix {
    zoom: 1;
 }
</style>
