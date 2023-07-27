import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GAuth from 'vue3-google-oauth2'
import './index.css'
const gauthOption = {
  clientId: '406745584266-r4gev3htl1fnjb4i23n2b2uraaeakiam.apps.googleusercontent.com',
  apiKey: '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',
  scope: 'profile email',
  prompt: 'select_account'
}
createApp(App).use(GAuth, gauthOption).use(store).use(router).mount('#app')
