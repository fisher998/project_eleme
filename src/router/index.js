import Vue from 'vue'
import VueRouter from 'vue-router'
// 全局安装路由模块
Vue.use(VueRouter)
// 导入组件
import Find from '../components/find'
import Mine from '../components/mine'
import Order from '../components/order'
import Sale from '../components/sale'
// 红包页面
import SMineHeaderRedPaper from '../components/s_mine_header_redPaper'

// 导入二级路由 s_mine_header_redPaper_red s_mine_header_redPaper_shop  红包记录和店铺代金券
import SMineHeaderRedPaperRed from '../components/s_mine_header_redPaper_red'
import SMineHeaderRedPaperShop from '../components/s_mine_header_redPaper_shop'
// 导入二级路由 sale首页的评论页面
// import SSaleMerchantDpsP from '../components/s_sale_merchant_dps_p'
import Login from '../components/z_login'
// 导入首页外买里的头部组件
import LSaleMerchantHeader from '../components/L_sale_merchant_header'
// 导入首页进入的商家信息里的点餐组件
import LSaleMerchantDiancan from '../components/L_sale_merchant_diancan'
// 导入首页进入的商家信息里的商家信息组件
import LMerchantShangjia from '../components/L_merchant_shangjia'
// 导入首页进入的商家信息里的商家信息二级组件_评价
import spingjia from '../components/s_pingjia'
// 导入首页头部下方的navlist的组件
import LSaleNavlist from '../components/L_sale_navlist'
// 导入首页头部下方的navlist的组件美食二级路由
import LSaleNavlistMeishi from '../components/L_sale_navlist_meishi'



import Notelogin from '../components/z_notelogin'
import Psdlogin from '../components/z_psdlogin'
export default new VueRouter({
  // 配置H5的history模式, 去掉 #/
  mode: 'history',
  routes: [
    // 这个path就是router-link里的to跳转的地址
    // component就是根据路由的地址，找到对应的组件
    { path: '', redirect: '/sale' }, 
    { path: '/find', component: Find },
    { path: '/mine', component: Mine },
      // 配置路由  s_mine_header_redPaper
    { path: '/s_mine_header_redPaper', component: SMineHeaderRedPaper, children: [
      // 配置二级路由 不要带 /
      { path: '', redirect: 's_mine_header_redPaper_red' },
      { path: 's_mine_header_redPaper_red', component: SMineHeaderRedPaperRed },
      { path: 's_mine_header_redPaper_shop', component: SMineHeaderRedPaperShop }
    ]},
    { path: '/order', component: Order },
    { path: '/sale', component: Sale, children: [
      {path:'meishi', component:LSaleNavlistMeishi}
    ]},
    { path: '/login', component: Login , children: [
      { path: '', redirect: 'notelogin' },
      { path: 'notelogin', component: Notelogin },
      { path: 'psdlogin', component: Psdlogin },
    ]},
    { path: '/L_sale_merchant_header', component: LSaleMerchantHeader},
    { path: '/L_sale_merchant_header', component: LSaleMerchantHeader, children: [
      { path: '/L_sale_merchant_header', redirect: 'diancan' },
      { path: 'diancan', component: LSaleMerchantDiancan },
      { path: 'pingjia', component: spingjia },
      { path: 'merchant_shangjia', component: LMerchantShangjia },     
    ]},
    // 导入首页的navlist组件
    {path:'/L_sale_navlist_meishi',component:LSaleNavlistMeishi }
  ]
})
