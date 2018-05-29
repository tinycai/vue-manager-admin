import Vue from 'vue';
import Router from 'vue-router';
import CrossBorderGoods from '../components/page/CrossBorderGoods.vue'
import CrossBorderInventory from '../components/page/CrossBorderInventory.vue'
import LeadingIn from '../components/page/LeadingIn.vue'
import LeadingOut from '../components/page/leadingOut.vue'
import OrderDetail from '../components/page/OrderDetail.vue'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                // 跨境购商品导入
                {
                    path: '/CrossBorderGoods',
                    component: CrossBorderGoods,
                    meta: { title: '跨境购商品导入' }
                },
                // 跨境购库存导入
                {
                    path: '/CrossBorderInventory',
                    component: CrossBorderInventory,
                    meta: { title: '跨境购库存导入' }
                },
                // 一键代发（导入）
                {
                    path: '/LeadingIn',
                    component: LeadingIn,
                    meta: { title: '一键代发（导入）' }
                },
                // 一键代发（导出）
                {
                    path: '/LeadingOut',
                    component: LeadingOut,
                    meta: { title: '一键代发（导出）' }
                },
                // 订单详情
                {
                    path: '/OrderDetail/:id',
                    component: OrderDetail,
                    meta: { title: '订单详情'}
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }    
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }   
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
