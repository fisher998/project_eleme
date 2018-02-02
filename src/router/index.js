import Vue from 'vue'
import VueRouter from 'vue-router'
// 全局安装路由模块
Vue.use(VueRouter)
// 导入组件
import Find from '../components/find'
import Mine from '../components/mine'
import Order from '../components/order'
import Sale from '../components/sale'
import Login from '../components/z_login'



export default new VueRouter({
  mode: 'history',
  routes: [
    // 这个path就是router-link里的to跳转的地址
    // component就是根据路由的地址，找到对应的组件
    { path: '', redirect: '/sale' },
    { path: '/find', component: Find },
    { path: '/mine', component: Mine },
    { path: '/order', component: Order },
    { path: '/sale', component: Sale },
    { path: '/login', component: Login }
  ]
})
