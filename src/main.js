import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import GAuth from 'vue3-google-oauth2'
import './index.css'
// const gauthOption = {
//   clientId: '406745584266-r4gev3htl1fnjb4i23n2b2uraaeakiam.apps.googleusercontent.com',
//   apiKey: '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',
//   scope: 'profile email',
//   prompt: 'select_account'
// }
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      // Redirect to login page if not authenticated
      next('auth/login')
    } else {
      // Allow access to the protected route
      next()
    }
  } else {
    // For public routes, allow access without authentication
    next()
  }
})
createApp(App).use(store).use(router).mount('#app')
