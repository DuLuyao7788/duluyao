import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sydh: [],
    shops: []
  },
  getters: {
    getShops: (state) => (page) => {
      return state.shops.filter((value, index) => {
        return index >= (page-1)*5 && index < page * 5
      })
    }
  },
  mutations: {
    setSydh(state, sydh) {
      state.sydh = sydh
    },
    setShops(state, shops) {
      state.shops = shops
    }
  },
  actions: {
    getSydh(state) {
      return new Promise((resolve, reject) => {
        Vue.axios.get('/data/sydh.json').then(results => {
          state.commit('setSydh', results.data)
          resolve(results.data)
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    getShops({ commit }) {
      return new Promise((resolve, reject) => {
        Vue.axios.get('/data/shops.json').then(results => {
          commit('setShops', results.data) // ==> 记录到 state 里面的数据
          resolve(results.data.filter((value, index) => {
            return index >= 0 && index < 5
          })) // ==> 记录到页面的数据
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      })
    }
  },
  modules: {
  }
})
