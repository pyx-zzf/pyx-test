import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'


// 安装插件
Vue.use(Vuex)


const state ={
    cartList:[],
    goodsRecommend:[],
    
}

// 创建对象
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{

    }
})


// 导出store独享
export default store