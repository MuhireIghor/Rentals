<template>
  <form class="w-full pt-40 items-center" @submit="handleSubmit">
    <div
      class="w-1/3 bg-white shadow-indigo-200 shadow-md mx-auto space-y-12 p-4"
    >
      <h1 class="text-xl text-indigo-500 font-semibold">{{ title }}</h1>
      <input
        type="text"
        placeholder="Username"
        class="w-3/4 outline-none border border-indigo-200 p-2 rounded-lg"
        v-show="isLogin"
        v-model="formData.name"
      />
      <input
        type="email"
        placeholder="email"
        class="w-3/4 outline-none border border-indigo-200 p-2 rounded-lg"
        v-model="formData.email"
      />
      <input
        type="password"
        placeholder="Password"
        class="w-3/4 outline-none border border-indigo-200 p-2 rounded-lg"
        v-model="formData.password"
      />
      <button class="w-1/3 bg-indigo-500 p-2 rounded-lg text-white">
        Sign Up
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: 'FormComponent',
  data () {
    return {
      formData: { username: '', email: '', password: '' }
    }
  },
  props: {
    title: String,
    isLogin: Boolean
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      console.log(`The form data is ${Object.values(this.formData)}`)
      this.formData.username = ''
      this.formData.email = ''
      this.formData.password = ''
    }
  }
}
</script>
