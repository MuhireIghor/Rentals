<template>
    <button @click="login" :class="`${className}`">Sign In with Google</button>
</template>
<script>
import { googleSdkLoaded } from 'vue3-google-login'
import axios from 'axios'
export default {
  name: 'GoogleLoginButton',
  methods: {
    login () {
      googleSdkLoaded(google => {
        google.accounts.oauth2
          .initCodeClient({
            client_id:
              '406745584266-r4gev3htl1fnjb4i23n2b2uraaeakiam.apps.googleusercontent.com',
            scope: 'email profile openid',
            redirect_uri: 'http://localhost:8080',
            callback: response => {
              if (response.code) {
                this.sendCodeToBackend(response.code)
              }
            }
          })
          .requestCode()
      })
    },
    async sendCodeToBackend (code) {
      try {
        const response = await axios.post(
          'https://oauth2.googleapis.com/token',
          {
            code,
            client_id:
            '406745584266-r4gev3htl1fnjb4i23n2b2uraaeakiam.apps.googleusercontent.com',
            client_secret: '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',
            redirect_uri: 'http://localhost:8080',
            grant_type: 'authorization_code'
          }
        )

        const accessToken = response.data.access_token
        console.log(accessToken)
        // Fetch user details using the access token
        const userResponse = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )

        const userDetails = userResponse.data
        this.$store.commit('login', userDetails)
        console.log(userDetails)
      } catch (error) {
        console.error('Token exchange failed:', error.response.data)
      }
    }
  },
  props: {
    className: {
      type: String,
      required: false
    }
  }
}
</script>
