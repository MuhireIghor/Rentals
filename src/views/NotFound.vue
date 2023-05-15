<template>
  <div class="w-[50%] mx-auto h-screen flex items-center">
    <div class="bg-white shadow-md shadow-indigo-200 w-full h-[60%] space-y-12 p-20">
      <p class="text-xl font-bold">😓 404 PAGE NOT FOUND 😓</p>
      <p class="text-lg">
        The page you are currently looking for is not available Go back home or
        you will be redirected to the home page
      </p>
      <div class="w-full flex justify-center mt-20">
        <ButtonComponent
          buttonText="Go Back"
          className="bg-white shadow-md text-indigo-500 border border-indigo-500 w-[8rem] hover:bg-indigo-500 hover:text-white"
          :clickHandler="handleRedirect"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
export default {
  components: {
    ButtonComponent
  },
  methods: {
    handleRedirect () {
      this.$router.push({ name: 'home' })
    }
  },
  mounted () {
    setTimeout(() => { this.$router.push({ name: 'home' }) }, 5000)
  }
}
</script>
