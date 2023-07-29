<template>
  <div class="bg-regal-blue border-t-2 border-indigo-200 mt-32 py-12 grid grid-cols-2 px-12 sm:px-0 sm:space-y-0 mx-auto sm:flex justify-center sm:justify-evenly pt-20 rounded-t-[250px] " :style="`background-image: url(${customImageUrl})`">
<div class="flex flex-col items-start space-y-4 ">
<h3 class="text-indigo-500 font-semibold hover:cursor-pointer hover:scale-125">Home</h3>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
</div>
<div class="flex flex-col items-start space-y-4">
<h3 class="text-indigo-500 font-semibold hover:cursor-pointer hover:scale-125">Serives</h3>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
</div>
<div class="flex flex-col items-start space-y-4">
<h3 class="text-indigo-500 font-semibold hover:cursor-pointer hover:scale-125">About us</h3>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
</div>
<div class="flex flex-col items-start space-y-4">
<h3 class="text-indigo-500 font-semibold hover:cursor-pointer hover:scale-125">Locations</h3>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
<router-link class="text-black" :to="{name:'home'}">Our blogs</router-link>
</div>
  </div>
</template>
<script>
export default {
  name: 'FooterComponent',
  data () {
    return {
      customImageUrl: '../assets/13972.jpg'// Replace this with your image URL
    }
  }
}
</script>
