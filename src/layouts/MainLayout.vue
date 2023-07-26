<template>
    <NavBar />
  <div class="">
    <slot></slot>
  </div>
  <FooterComponent />
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: {
    NavBar,
    FooterComponent
  }
}
</script>
