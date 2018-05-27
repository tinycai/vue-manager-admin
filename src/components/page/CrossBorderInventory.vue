<template>
  <div>
    <div class="inventory_crumbs_search clearfix">
        <!-- 面包屑 -->
        <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item><i class="el-icon-date"></i> 待处理订单</el-breadcrumb-item>
              <el-breadcrumb-item>跨境购库存导入</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <!-- 搜索框 -->
        <div class="inventory_search_inp">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>


    <div class="inventory_add_pagination">
      <!-- 添加按钮 -->
      <div class="inventory_add">
        <el-button type="primary">新增数据</el-button>
      </div> 
      <!-- 分页 -->
      <div class="inventory_pagination">
         <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          small
          background
          layout="total, prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
     
    <!-- 表格开始 -->
    <div class="inventory_tab">
      <el-table
        :data="tableData"
        border
        stripe
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%">
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
          fixed
          sortable
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="logo"
          label="品牌"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="supplier"
          label="供应商"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-tickets" class="inventory_tab_btn" @click="dialogDetail = true"></el-button>
            <el-button type="text" icon="el-icon-edit" class="inventory_tab_btn" @click="dialogEditor = true"></el-button>
            <el-button type="text" icon="el-icon-delete" class="inventory_tab_btn" @click="dialogDele = true" style="color:#f00"></el-button>
          </template>
        </el-table-column>
       </el-table>
    </div>

    <!-- 右滑效果 -->
    <div class="inventory_right_box">
      <div class="inventory_right"></div>
    </div>
    <!-- 详情对话框 -->
    <el-dialog title="详细信息" :visible.sync="dialogDetail">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期"></el-table-column>
        <el-table-column property="name" label="姓名"></el-table-column>
        <el-table-column property="province" label="省份"></el-table-column>
        <el-table-column property="city" label="城市"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
        <el-table-column property="zip" label="邮编"></el-table-column>
        <el-table-column property="logo" label="品牌"></el-table-column>
        <el-table-column property="supplier" label="供应商"></el-table-column>
      </el-table>
    </el-dialog>
    <!-- 编辑对话框 -->
  <div class="inventory_dialog_editor">
    <el-dialog title="编辑信息" :visible.sync="dialogEditor">
      <el-form :model="form">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-input v-model="form.date" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="省份" :label-width="formLabelWidth">
          <el-input v-model="form.province" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="城市" :label-width="formLabelWidth">
          <el-input v-model="form.city" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮编" :label-width="formLabelWidth">
          <el-input v-model="form.zip" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌" :label-width="formLabelWidth">
          <el-input v-model="form.logo" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商" :label-width="formLabelWidth">
          <el-input v-model="form.supplier" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditor = false">取 消</el-button>
        <el-button type="primary" @click="dialogEditor = false">提 交</el-button>
      </div>
    </el-dialog>
</div>
    <!-- 删除对话框 -->
    <div class="inventory_dialog_dele">
      <el-dialog
      title="删除信息"
      :visible.sync="dialogDele"
      width="30%"
      center>
      <span>您确定要删除该条记录吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDele = false">取 消</el-button>
        <el-button type="danger" @click="dialogDele = false" >确 定</el-button>
      </span>
    </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input21: '',
      currentPage1: 5,
      tableData: [
        {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        logo: '兰蔻',
        supplier: '唐三彩国际有限公司'
        },
        {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        logo: '兰蔻',
        supplier: '唐三彩国际有限公司'
        },
        {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        logo: '兰蔻',
        supplier: '唐三彩国际有限公司'
        },
        {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        logo: '兰蔻',
        supplier: '唐三彩国际有限公司'
        },
        {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        logo: '兰蔻',
        supplier: '唐三彩国际有限公司'
        },
        {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        logo: '兰蔻',
        supplier: '唐三彩国际有限公司'
        }
        ],
       tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
      currentPage4: 4,
      input5: '',
      select: '',
      dialogDetail: false,
      dialogEditor: false,
      dialogDele: false,
      gridData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        logo: '兰蔻',
        supplier: '唐三彩国际有限公司'
      }],
      form: {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        logo: '兰蔻',
        supplier: '唐三彩国际有限公司'
        },
      formLabelWidth: '120px'
    }
  },
   methods: {
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
}
</script>
<style lang="less">
.inventory_crumbs_search {
  margin-bottom:10px;
}
.inventory_crumbs_search .crumbs {
  display:inline-block;
}
.clearfix:after,.clearfix:before {
  display: block;
  content: "";
  clear:both;
}
.inventory_add {
  float:left;
}
.inventory_pagination {
  float:right;
  margin-top:10px;
}
.inventory_search_inp {
  float:right;
}
.inventory_search_inp .el-input {
  width:100px;
}
.inventory_search_inp .el-input__inner{
  width:370px;
}
.inventory_tab {
  margin-top:20px;
}
.inventory_tab .el-table th {
  background:#B0BDD0 !important;
  color:#f4f4f4;
  font-size:14px;
  text-align: center;
}
.inventory_tab .el-table td {
  text-align: center;
}
.inventory_tab .el-table .sort-caret.ascending {
  border-bottom-color:#f4f4f4;
}
.inventory_tab .el-table .sort-caret.descending {
  border-top-color:#f4f4f4;
}
.inventory_tab .el-table--border td, .el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
  border-right:none;
}
.inventory_tab_btn {
  font-size:15px;
}
.inventory_pagination {
  text-align:right;
  display:inline-block;
}
/*删除对话框*/
.inventory_dialog_dele .el-dialog__header {
  background-color: #f56c6c;
}
.inventory_dialog_dele .el-dialog__title {
  color:#fff;
}
.inventory_dialog_dele .el-dialog__headerbtn .el-dialog__close {
  color:#fff;
}
/* 右划盒子样式*/ 
.inventory_right_box {
  position:fixed;
  width: 200rem/50;
  height:200rem/50;
  right: 0;
  bottom:0;
  border:1px solid #ccc;
  z-index:200;
  background-color: #f00;
}
</style>
