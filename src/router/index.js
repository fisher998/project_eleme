import Vue from 'vue'
import VueRouter from 'vue-router'
// 全局安装路由模块
Vue.use(VueRouter)
// 导入组件
import Find from '../components/find'
import Mine from '../components/mine'
import Order from '../components/order'
import Sale from '../components/sale'


import SMineHeaderRedPaper from '../components/s_mine_header_redPaper'

// 导入二级路由 s_mine_header_redPaper_red s_mine_header_redPaper_shop  红包记录和店铺代金券
import SMineHeaderRedPaperRed from '../components/s_mine_header_redPaper_red'
import SMineHeaderRedPaperShop from '../components/s_mine_header_redPaper_shop'



import Login from '../components/z_login'

import LSaleMerchantHeader from '../components/L_sale_merchant_header'

import LSaleMerchantDiancan from '../components/L_sale_merchant_diancan'
import LMerchantShangjia from '../components/L_merchant_shangjia'
import spingjia from '../components/s_pingjia'

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
    { path: '/sale', component: Sale },
    { path: '/L_sale_merchant_header', component: LSaleMerchantHeader, children: [
      { path: '', redirect: 'diancan' },
      { path: 'diancan', component: LSaleMerchantDiancan },
      { path: 'pingjia', component: spingjia },
      { path: 'merchant_shangjia', component: LMerchantShangjia },
      // {  },
      // {  }
    ]},
    { path: '/login', component: Login }
  ]
})
