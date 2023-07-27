<template>
    <button @click="login" :class="`${className}`">Sign In with Google</button>
</template>
<script>
export default {
  name: 'GoogleLoginButton',
  methods: {
    login () {
      this.$gAuth.signIn().then(googleUser => {
        console.log(googleUser)
      }).catch(err => console.log(err))
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
