<template>
  <form class="w-full pt-40 items-center" @submit.prevent="handleSubmit">
    <div
      :class="`w-1/3 bg-white shadow-indigo-200 shadow-md mx-auto space-y-12 p-4 ${showError && 'space-y-4'}`"
    >
      <h1 class="text-xl text-indigo-500 font-semibold">{{ title }}</h1>
      <p v-if="showError" class="text-red-600">Please ensure form validation</p>
      <input
        type="text"
        placeholder="Username"
        class="w-3/4 outline-none border border-indigo-200 p-2 rounded-lg"
        v-show="isLogin"
        v-model="formData.name"
      />
      <p class="text-red-600 text-start pl-16 -translate-y-4" v-if="errors.username != '' && isLogin">{{ errors.username }}</p>
      <input
        placeholder="email"
        class="w-3/4 outline-none border border-indigo-200 p-2 rounded-lg"
        v-model="formData.email"
      />
      <p class="text-red-600 text-start pl-16 -translate-y-4" v-if="errors.email != ''">{{ errors.email }}</p>
      <input
      type="password"
      placeholder="Password"
      class="w-3/4 outline-none border border-indigo-200 p-2 rounded-lg"
      v-model="formData.password"
      />
      <p class="text-red-600 text-start pl-16 -translate-y-4" v-if="errors.password != ''">{{ errors.password }}</p>
      <!-- <button type="submit" class="w-1/3 bg-indigo-500 p-2 rounded-lg text-white">
        Sign Up
      </button> -->
      <ButtonComponent className="w-1/3 bg-indigo-500 p-2 rounded-lg text-white" :buttonText="isLogin?'Signup':'Login'" />
    </div>
  </form>
</template>
<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
  components: {
    ButtonComponent
  },
  name: 'FormComponent',
  data () {
    return {
      formData: { username: '', email: '', password: '' },
      errors: {
        username: '',
        email: '',
        password: ''
      },
      showError: false
    }
  },
  props: {
    title: String,
    isLogin: Boolean
  },
  methods: {
    handleSubmit (e) {
      this.validateForm()
      if (this.isFormValid()) {
        // Perform form submission or other actions here
        console.log('Form is valid. Submitting data:', this.formData)
      } else {
        // Show error messages on the screen
        this.showError = true
        console.log('Form is invalid. Please check the errors.')
      }
    },
    validateForm () {
      this.errors.username = ''
      this.errors.email = ''
      this.errors.password = ''
      if (!this.formData.username.trim()) {
        this.errors.username = 'Username is required.'
      }

      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required.'
      } else if (!emailPattern.test(this.formData.email)) {
        this.errors.email = 'Invalid email format.'
      }

      // Validate password
      if (!this.formData.password) {
        this.errors.password = 'Password is required.'
      }
    },
    isFormValid () {
      return !Object.values(this.errors).some(error => error !== '')
    }
  }
}
</script>
