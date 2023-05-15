<template>
    <NavBar />
  <div class="pt-32">
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
