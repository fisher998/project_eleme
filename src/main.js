// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由模块
import router from './router/index'
// 导入axios
import axios from 'axios'
// 给Vus的原型加上axios这个属性,来使用axios
Vue.prototype.axios = axios
import './css/reset.css'
// 导入我们自定义的vuex仓库
import store from './store/store'






new Vue({
  el: '#app',
  // 需要把路由实例挂载到这个router选项中
  components: { App },
  template: '<App/>',
  router,
  // 挂载store
  store
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