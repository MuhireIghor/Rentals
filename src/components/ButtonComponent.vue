<template>
  <button :class="`rounded-xl w-1/4 h-10 my-auto hover:shadow-md ${className} `" @click="clickHandler">{{buttonText}}</button>
</template>
<script>
export default {
  data () {
  },
  props: {
    buttonText: String,
    clickHandler: Function,
    className: String
  }
}
</script>
