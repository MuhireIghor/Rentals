<template>
  <div class="w-full flex justify-evenly bg-white fixed shadow-md shadow-indigo-200">
    <div class="w-1/4 flex items-center">
        <p>Logo</p>
    </div>
    <nav
      class="w-2/4 flex justify-evenly mx-auto"
    >
      <router-link
        class="text-black hover:text-indigo-500"
        :to="{ name: 'home' }"
        active-class="text-indigo-500"
        >Home</router-link
      >
      <router-link
        class="text-black hover:text-indigo-500"
        :to="{ name: 'about' }"
        active-class="text-indigo-500"
        >About</router-link
      >
      <router-link
        class="text-black hover:text-indigo-500"
        :to="{ path: '/' }"
        active-class="text-indigo-500"
        >Products</router-link
      >
    </nav>
    <div class='w-1/4 flex gap-6 justify-end mr-4'>
        <ButtonComponent buttonText='SignUp' :clickHandler="handleSignup" className="bg-indigo-500 text-white" />
        <ButtonComponent buttonText='Log in' :clickHandler="handleLogin" className="bg-indigo-500 text-white"/>
    </div>
  </div>
</template>
<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
  components: {
    ButtonComponent
  },
  methods: {
    handleSignup () {
      this.$router.push({ name: 'signup' })
    },
    handleLogin () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
