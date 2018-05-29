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

    <!-- 分页 -->
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
        max-height="250"
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%"
       >
        <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column fixed sortable label="订单号" width="150">
          <template slot-scope="scope">
            <span style="color:#409EFF;border-bottom:1px solid #409EFF;cursor: pointer;" @click="orderDetail(scope.row.orderNum)">{{ scope.row.orderNum }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="orderSrc"
          label="订单来源"
          width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          sortable
          width="120">
        </el-table-column>
        <el-table-column
          prop="enterprise"
          label="企业"
          width="120">
        </el-table-column>
        <el-table-column
          prop="buyer"
          label="买方"
          width="120">
        </el-table-column>
        <el-table-column
          sortable
          prop="orderDate"
          label="订单日期"
          width="180">
        </el-table-column>
        <el-table-column
          sortable
          prop="totalAmount"
          label="总金额 "
          width="100">
        </el-table-column>
        <el-table-column
          prop="receive"
          label="收货方"
          width="220">
        </el-table-column>
        <el-table-column
          prop="payer"
          label="付款方"
          width="220">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit" class="inventory_tab_btn" @click="dialogEditor = true"></el-button>
            <el-button type="text" icon="el-icon-delete" class="inventory_tab_btn" @click="dialogDele = true" style="color:#f00"></el-button>
          </template>
        </el-table-column>
       </el-table>
    </div>

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
        orderNum: '42009',
        orderSrc: 'T3C_PC',
        status: '已发货',
        enterprise: 'T3C',
        address: '上海市普陀区金沙江路 1518 弄',
        buyer: '张三',
        orderDate: '2017/11/28 13:00:00',
        totalAmount: '￥0.00',
        receive: '曹广红  申滨南路1226号虹桥新地中心A栋9楼 闵行区 上海市 上海市 CN',
        payer: '曹广红  申滨南路1226号虹桥新地中心A栋9楼 闵行区 上海市 上海市 CN'
        },
        {
        orderNum: '42010',
        orderSrc: 'T3C_PC',
        status: '已发货',
        enterprise: 'T3C',
        address: '上海市普陀区金沙江路 1518 弄',
        buyer: '张三',
        orderDate: '2017/11/28 13:00:00',
        totalAmount: '￥0.00',
        receive: '曹广红  申滨南路1226号虹桥新地中心A栋9楼 闵行区 上海市 上海市 CN',
        payer: '曹广红  申滨南路1226号虹桥新地中心A栋9楼 闵行区 上海市 上海市 CN'
        },
        {
        orderNum: '42011',
        orderSrc: 'T3C_PC',
        status: '已发货',
        enterprise: 'T3C',
        address: '上海市普陀区金沙江路 1518 弄',
        buyer: '张三',
        orderDate: '2017/11/28 13:00:00',
        totalAmount: '￥0.00',
        receive: '曹广红  申滨南路1226号虹桥新地中心A栋9楼 闵行区 上海市 上海市 CN',
        payer: '曹广红  申滨南路1226号虹桥新地中心A栋9楼 闵行区 上海市 上海市 CN'
        }
        ],
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
      options: [{
        value: '选项1',
        label: '黄金糕'
      }],
      value: '',
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
      formLabelWidth: '120px',
      // 销售订单
      salesOrder: [
        {
          title: '企业：',
          content: 'T3C'
        },
        {
          title: '订单号：',
          content: '46009'
        },
        {
          title: '订单类型：',
          content: 'A'
        },
        {
          title: '文档类型：',
          content: 'Sales Order'
        },
        {
          title: '买方：',
          content: '张三'
        },
        {
          title: '卖方：',
          content: 'T3C'
        },
        {
          title: '状态：',
          content: '已退款'
        },
        {
          title: '服务：',
          content: ''
        },
        {
          title: '订单来源：',
          content: '官网PC版'
        },
        {
          title: '订单日期：',
          content: '2017/11/28 13:00:00'
        },
        {
          title: '请求交货日期：',
          content: '2017/11/29 13:00:00'
        }
      ],
      // 收货方
      receive: [
        {
          title: '姓名：',
          content: '曹广红'
        },
        {
          title: '街道：',
          content: '申滨南路1226号虹桥新地中心A栋9楼'
        },
        {
          title: '省、市、区:',
          content: '闵行区 上海市 上海市 CN'
        },
      ],
      // 付款方
       payer: [
        {
          title: '姓名：',
          content: '曹广红'
        },
        {
          title: '街道：',
          content: '申滨南路1226号虹桥新地中心A栋9楼'
        },
        {
          title: '省、市、区:',
          content: '闵行区 上海市 上海市 CN'
        },
      ],
      // 收费
      cost: [
        {
          title: '行小计：',
          num: 1.00
        },
        {
          title: '总费用：',
          num: 0.00
        },
        {
          title: '总税额：',
          num: 0.00
        },
        {
          title: '总折扣：',
          num: 0.00
        },
        {
          title: '总   计：',
          num: 0.00
        }
      ],
      // 支付信息
      paymentInfor: [
        {
          title: '状态：',
          content: ''
        },
        {
          title: '类型：',
          content: '收钱吧'
        },
        {
          title: '已授权：',
          content: '0.00'
        },
        {
          title: '已付款：',
          content: '293.00'
        }
      ]
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
      },
      orderDetail (num) {
        console.log(num)
        this.$router.push(`OrderDetail/${num}`)
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
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.4);
  top:0;
  left:0;
  z-index:150;
} 
.inventory_right_box .inventory_right{
  position:fixed;
  width: 60%;
  height:90%;
  right: 0;
  bottom:0;
  border:1px solid #fff;
  border-radius: 10px;
  z-index:200;
  background-color: #fff;
  padding: 20px;
}
/*详情页卡片*/
.inventory_tab {
  margin-top:30rem/37;
  height:90%;
}
.inventory_tab .el-tabs__item {
  font-size:16px;
  height:70rem/37;
  line-height:63rem/37;
}
.inventory_card_text>p{
 font-size:16px;
 margin-bottom:10px;
}
.inventory_card_text_title {
  color:rgb(132, 134, 138);
  font-weight:700;
}

</style>
