import Vue from 'vue'

// 导入vuex模块

import Vuex from 'vuex'

// 全局配置vuex
Vue.use(Vuex)

// 实例化vuex仓库
export default new Vuex.Store({
    // 把想要集中管理的数据放在state里面
    state: {
<<<<<<< HEAD
        tel: null
=======
        tel: null,
        // index: 0
        // yzm
>>>>>>> 77de4b66ef6cf70ea90015b61693e41892dd6805
    },
    // 使用mutations里来定义的同步方法来操作数据
    mutations: {
        // 每个方法的第一个参数是state就是状态管理的state
        // 后面的参数就是组件传过来的参数
        // 添加方法
        ADD(state, tel) {
            state.tel = tel
<<<<<<< HEAD
            // console.log(state.tel)
        }
=======
            console.log(state.tel)
        },
        // CHANGE(state, index) {
        //     state.index = index
        // }
>>>>>>> 77de4b66ef6cf70ea90015b61693e41892dd6805
    },
    // 使用actions里来定义异步方法, 一般在组件中会通过
    // dispatch来调用这里的方法, 然后这里在调用commit来处理
    // mutations里的逻辑
    actions: {
        add(state, tel) {
            //  调用mutations里的LOGIN方法
            state.commit('ADD', tel)
<<<<<<< HEAD
        }
    },
    getters: {
        getTel(state) {
            return state.tel;
        }
    }
=======
        },
        // change(state, index) {
        //     //  调用mutations里的CHANGE方法
        //     state.commit('CHANGE', index)
        // },
    },
     // getters一般是返回state中数据用的
    //  getters: {
    //     changeIndex(state) {
    //         return state.index 
    //     }
    // }
>>>>>>> 77de4b66ef6cf70ea90015b61693e41892dd6805


})