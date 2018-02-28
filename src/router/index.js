import Vue from 'vue'
import VueRouter from 'vue-router'
// 全局安装路由模块
Vue.use(VueRouter)

//无限滚动指令
import InfiniteScroll from 'mint-ui';
Vue.use(InfiniteScroll);
// 导入组件
import Find from '../components/find'
import Mine from '../components/mine'
import Order from '../components/order'
import Sale from '../components/sale'
// 结算页面
import Sdingdan from '../components/s_dingdan'
// 红包页面
import SMineHeaderRedPaper from '../components/s_mine_header_redPaper'
// 导入二级路由 s_mine_header_redPaper_red s_mine_header_redPaper_shop  红包记录和店铺代金券
import SMineHeaderRedPaperRed from '../components/s_mine_header_redPaper_red'
import SMineHeaderRedPaperShop from '../components/s_mine_header_redPaper_shop'
// 导入二级路由 sale首页的评论页面
// import SSaleMerchantDpsP from '../components/s_sale_merchant_dps_p'
// 登录后的账户信息页面 
import Account from '../components/s_account'
// 导入二级路由 sale首页的评论页面
// import SSaleMerchantDpsP from '../components/s_sale_merchant_dps_p'
// 登录后的账户信息页面 
import Login from '../components/z_login'
import Notelogin from '../components/z_notelogin'
import Psdlogin from '../components/z_psdlogin'
// 登录后的账户信息页面 
import LSaleMerchantHeader from '../components/L_sale_merchant_header'

// 导入二级路由 sale首页的评论页面
// import SSaleMerchantDpsP from '../components/s_sale_merchant_dps_p'
// 导入首页外买里的头部组件
// 导入首页进入的商家信息里的点餐组件
import LSaleMerchantDiancan from '../components/L_sale_merchant_diancan'
// 导入首页进入的商家信息里的商家信息组件
import LMerchantShangjia from '../components/L_merchant_shangjia'
// 导入首页进入的商家信息里的商家信息二级组件_评价
import sPingjia from '../components/s_pingjia'
// 导入首页头部下方的navlist的组件
import LSaleNavlist from '../components/L_sale_navlist'
// 导入首页头部下方的navlist的组件美食一级路由
import LSaleNavlistMeishi from '../components/L_sale_navlist_meishi'
import LSaleNavlistWancan from '../components/L_sale_navlist_wancan'
import LSaleNavlistShangchaobianli from '../components/L_sale_navlist_shangchaobianli'
import LSaleNavlistGuoshushengxian from '../components/L_sale_navlist_guoshushengxian'
import LSaleNavlistDapaiwuzhe from '../components/L_sale_navlist_dapaiwuzhe'
import LSaleNavlistYiyaojiankang from '../components/L_sale_navlist_yiyaojiankang'
import LSaleNavlistLangmanxianhua from '../components/L_sale_navlist_langmanxianhua'
import LSaleNavlistMalatang from '../components/L_sale_navlist_malatang'
import LSaleNavlistDifangcaixi from '../components/L_sale_navlist_difangcaixi'
import LSaleNavlistPisayimian from '../components/L_sale_navlist_pisayimian'

import LMerchantDiancanMain from '../components/L_merchant_diancan_main'
import userInfo from '../components/s_account'
import sPingjiaComment from '../components/s_pingjia_comment'
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
      { path: '', redirect: 'red' },
      { path: 'red', component: SMineHeaderRedPaperRed },
      { path: 'shop', component: SMineHeaderRedPaperShop }
    ]},
    { path: '/order', component: Order },
    { path: '/s_dingdan', component: Sdingdan },
    { path: '/sale', component: Sale },
    { path: '/login', component: Login , children: [
      { path: '', redirect: 'notelogin' },
      { path: 'notelogin', component: Notelogin },
      { path: 'psdlogin', component: Psdlogin },
    ]},
    { path: '/userInfo', component: userInfo },
    { path: '/L_sale_merchant_header', component: LSaleMerchantHeader, children: [
      { path: '', redirect: 'diancan' },
      { path: 'diancan', component: LSaleMerchantDiancan, children: [
        { path: 'name/:diancan', component: LMerchantDiancanMain },
      ]},
      { path: 'diancan', component: LSaleMerchantDiancan },
      { path: 'pingjia', component: sPingjia , children:[
        { path: 'name/:changeIndex', component: sPingjiaComment },
      ]},
      { path: 'merchant_shangjia', component: LMerchantShangjia },     
    ]},
    // 导入首页的navlist组件
    {path:'/L_sale_navlist_meishi',component:LSaleNavlistMeishi },
    {path:'/L_sale_navlist_wancan',component:LSaleNavlistWancan },
    {path:'/L_sale_navlist_shangchaobianli',component:LSaleNavlistShangchaobianli },
    {path:'/L_sale_navlist_guoshushengxian',component:LSaleNavlistGuoshushengxian },
    {path:'/L_sale_navlist_dapaiwuzhe',component:LSaleNavlistDapaiwuzhe },
    {path:'/L_sale_navlist_yiyaojiankang',component:LSaleNavlistYiyaojiankang },
    {path:'/L_sale_navlist_langmanxianhua',component:LSaleNavlistLangmanxianhua },
    {path:'/L_sale_navlist_malatang',component:LSaleNavlistMalatang },
    {path:'/L_sale_navlist_difangcaixi',component:LSaleNavlistDifangcaixi },
    {path:'/L_sale_navlist_pisayimian',component:LSaleNavlistPisayimian }, 
  ]
})

