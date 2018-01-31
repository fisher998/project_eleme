// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由模块
import VueRouter from 'vue-router'
// 全局安装路由模块
Vue.use(VueRouter)
Vue.config.productionTip = false

// 导入组件
import Find from './components/find'
import Mine from './components/mine'
import Order from './components/order'
import Sale from './components/sale'
import './css/reset.css'


var router = new VueRouter({
  // 这里写路由规则
  routes: [
    // 这个path就是router-link里的to跳转的地址
    // component就是根据路由的地址，找到对应的组件
    { path: '', component: Find },
    { path: '/find', component: Find },
    { path: '/mine', component: Mine },
    { path: '/order', component: Order },
    { path: '/sale', component: Sale }
    
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 需要把路由实例挂载到这个router选项中
  router,
  components: { App },
  template: '<App/>'
})


var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        var per = clientWidth / 750;
        document.documentElement.style.fontSize = per * 100 + "px";

        window.onresize = function () {
            var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
            //计算比例
            var per = clientWidth / 750;

            document.documentElement.style.fontSize = per* 100 +"px";
        }