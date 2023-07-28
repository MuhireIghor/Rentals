<template>
  <div class="w-full flex justify-evenly items-baseline bg-white shadow-md shadow-indigo-200 px-12 ">
    <div class="w-1/4 flex items-center">
     Rental X
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
        :to="{ name: 'products' }"
        active-class="text-indigo-500"
        >Products</router-link
      >
    </nav>
    <div class='w-1/4 flex gap-6 justify-end mr-4' v-if="!this.$store.state.loggedIn">
        <ButtonComponent buttonText='SignUp' :clickHandler="handleSignup" className="bg-indigo-500 text-white w-1/3" />
        <ButtonComponent buttonText='Log in' :clickHandler="handleLogin" className="bg-indigo-500 text-white w-1/3"/>
    </div>
    <div class="w-1/6 shadow-md border-1 " v-else @click="handleNavigation">
      <div class="w-12 h-12 bg-orange-500 text-white rounded-full bg-white flex items-center justify-center mx-auto" v-if="this.$store.state.loggedIn">
  <p class="text-xl font-medium">{{ this.$store.state.user.username.slice(0,2) }}</p>
      </div>
<p class="text-gray-500">{{ this.$store.state.user.email }}</p>
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
    },
    handleNavigation () {
      this.$router.push({ name: 'user' })
    }
  }
}
</script>
