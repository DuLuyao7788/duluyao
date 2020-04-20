export const state = () => ({
  tocken: '',
  user: {}
})

export const mutations = {
  setTocken(state, tocken) {
    state.tocken = tocken
  },
  regist(state, user) {
    state.user = user
  },
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  regist(state, user) {
    state.commit('regist', user)
  }
}
