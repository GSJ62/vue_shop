/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**1.state在vuex中主要用于存储数据 */
var state = {
    count: 1
}

/**2.mutations里面放的是方法，主要用于改变state里面的数据 */
var mutations = {
    incCount() {
        ++state.count;
    }
}


//3.定义store
const store = new Vuex.Store({
    state,
    mutations: mutations,
    getters
})


//定义Getter计算属性，改变state里面的count数据的时候，会触发getter里面的方法，获取新的值
var getters = {
    computedCount: (state, getters) => {
        return state.count * 2;
    }
}


//4.暴露store
export default store;