<template>
  <button  :disabled="isDisabled" type="submit" :class="`rounded-xl h-10 my-auto hover:shadow-md ${className} `" @click="clickHandler">{{buttonText}}</button>
</template>
<script>
export default {
  data () {
  },
  props: {
    buttonText: String,
    clickHandler: {
      type: Function,
      required: false
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: true
    },
    className: String
  }
}
</script>
