<template>
  <div class='pt-24'>
    <NavBar />
    <slot></slot>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>
