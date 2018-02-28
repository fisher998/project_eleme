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
        totalCount: 0,
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
         // 添加商品
         ADDS(state, product) {
             // 是否重复添加标识
             var is_exist = false
             // 判断是否添加过该商品
             for (var tempCartProduct of state.cartProductList) {
                 if (tempCartProduct.id == product.virtual_food_id) {
                     tempCartProduct.count++
                     is_exist = true
                     break
                 }
             }
             if (!is_exist) {
                 // 构建购物车商品对象
                 var cartProduct = {
                     id: product.virtual_food_id,
                     price: product.price,
                     name: product.name,
                     count: 1,
                     //============
                     pic: product.pic
                 }
                 state.cartProductList.push(cartProduct)
             }

             for (var tempCartProduct of state.cartProductList) {
                if (tempCartProduct.id == product.virtual_food_id) {
                    state.totalPrice += product.price
                    state.totalCount++
                    state.count++
                    break
                }

            }
            
        },
          // 减少商品
          REDUCES(state, product) {
            for (var idx in state.cartProductList) {
                if (state.cartProductList[idx].id == product.virtual_food_id) {
                    state.cartProductList[idx].count--
                    state.totalPrice-= product.price
                    state.totalCount--
                    if (state.cartProductList[idx].count == 0) {
                        state.cartProductList.splice(idx, 1);
                    }
                }
            }
            console.log(state.cartProductList);
        },
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
        // 购物车
        adds(state, product, image) {
            state.commit('ADDS', product, image)
        },
        reduces(state, product) {
            state.commit('REDUCES', product)
        }
    },
       // getters一般是返回state中数据用的
    getters: {
        getTel(state) {
            return state.tel;
        },
        // 获取商品总数
        totalCount(state) {
            return state.totalCount
        },
        count(state) {
            return state.count
        },
        totalPrice(state) {
            return state.totalPrice
        },
    }
})