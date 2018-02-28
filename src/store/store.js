import Vue from 'vue'

// 导入vuex模块

import Vuex from 'vuex'

// 全局配置vuex
Vue.use(Vuex)

// 实例化vuex仓库
export default new Vuex.Store({
    // 把想要集中管理的数据放在state里面
    state: {
        tel: null,
        totalPrice: 0,
        cartProductList: []
        // yzm
    },
    // 使用mutations里来定义的同步方法来操作数据
    mutations: {
        // 每个方法的第一个参数是state就是状态管理的state
        // 后面的参数就是组件传过来的参数
        // 添加方法
        ADD(state, tel) {
            state.tel = tel
            // console.log(state.tel)
        },
        EXIT(state) {
            state.tel = null
        },
         // 添加商品
         ADDS(state, product) {
            // state.totalPrice += price

             // 是否重复添加标识
             var is_exist = false

             // 判断是否添加过该商品
             for (var tempCartProduct of state.cartProductList) {
                 if (tempCartProduct.name == product.name) {
                     tempCartProduct.count++
                     is_exist = true
                     break
                 }
             }
 
             if (!is_exist) {
                 // 构建购物车商品对象
                 var cartProduct = {
                     price: product.price,
                     name: product.name,
                     count: 1
                 }
                 state.cartProductList.push(cartProduct)
             }
        },
        // ADDS(state, price) {
        //     state.totalPrice += price
        // },
        // 减少方法
        REDUCES(state, price) {
            state.totalPrice -= price
        }
        // CHANGE(state, index) {
        //     state.index = index
        // }
    },
    // 使用actions里来定义异步方法, 一般在组件中会通过
    // dispatch来调用这里的方法, 然后这里在调用commit来处理
    // mutations里的逻辑
    actions: {
        add(state, tel) {
            //  调用mutations里的LOGIN方法
            state.commit('ADD', tel)
        },
        exit(state) {
            state.commit('EXIT')
        },
        // 购物车
        adds(state, product) {
            // 调用mutations里的ADD方法
            state.commit('ADDS', product)
        },
        reduces(state, price) {
            state.commit('REDUCES', price)
        }
    },
       // getters一般是返回state中数据用的
    getters: {
        getTel(state) {
            return state.tel;
        },
        // 获取商品总数
        totalCount(state) {
            var resultTotalCount = 0
            for (var tempCartProduct of state.cartProductList) {
                resultTotalCount += tempCartProduct.count
            }
            return resultTotalCount
        },
        count(state) {
            for (var tempCartProduct of state.cartProductList) {
                return tempCartProduct.count
            }
        },
        totalPrice(state) {
            return state.totalPrice
        },
        // 总价格
        totalPrice(state) {
            var resultTotalPrice = 0
            for (var tempCartProduct of state.cartProductList) {
                resultTotalPrice += (tempCartProduct.count * tempCartProduct.price)
            }
            return resultTotalPrice
        }
    }
})