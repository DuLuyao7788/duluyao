import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[]
  },
  mutations: {
    setinfo(state,info){
      state.info=info
    }
  },
  actions: {
    getinfo(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/info.json').then(results=>{
          state.commit('setinfo',results.data)
          resolve(results.data)
          console.log(results.data)
        }).catch(error=>{
          console.log(error)
          reject(error)
        })
      })
    },
  },
  modules: {
  }
})
