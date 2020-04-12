import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => { 
    return new Vuex.Store({
        state:{
            list:[]
          },
          mutations: {
              setList(state, list) {
                state.list = list
              }
            },
            actions: {
              getList(state) {
                return new Promise((resolve, reject) => {
                  Vue.axios.get('/list.json').then(results => {
                    state.commit('setList', results.data)
                    resolve(results.data)
                  }).catch(error => {
                    console.log(error)
                    reject(error)
                  })
                })
              }
            }
    })
  }
  
export default store
