<template>
  <div class="relative h-screen flex-col">

      <FormComponent title="Sign Up" :isLogin="true"/>

  </div>
</template>
<script>
import FormComponent from '../../components/FormComponent.vue'
export default {
  components: {
    FormComponent
  }
}
</script>
