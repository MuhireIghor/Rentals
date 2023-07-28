import { createStore } from 'vuex'

export default createStore({
  state: {
    loggedIn: false,
    user: {}
  },
  getters: {
    isAuthenticated (state) {
      return state.loggedIn
    }
  },
  mutations: {
    login (state, payload) {
      state.loggedIn = true
      state.user.username = payload.name
      state.user.email = payload.email
      state.user.picture = payload.picture
    }
  },
  actions: {
  },
  modules: {
  }
})
