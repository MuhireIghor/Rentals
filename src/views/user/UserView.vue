<template>
<MainLayout>
   <div class="w-full bg-white flex justify-center" >
    <form class="w-1/2 border-2 rounded shadow-md px-20 space-y-6 p-14 translate-y-12" @submit.prevent="handleSubmit">
        <p class="text-xl font-semibold mb-20">Edit User Details Information</p>
        <p class="text-start font-semibold">Username:<input type="text" class="font-light border-2 rounded p-2 px-12 ml-12 outline-none" placeholder="Username" v-model="formdata.username" /></p>
        <p class="text-start font-semibold">Email:<input class="font-light border-2 rounded p-2 px-12 ml-20 outline-none" placeholder="email" v-model="formdata.email" /></p>
        <ButtonComponent buttonText="Save" className="bg-indigo-500 text-white w-1/3 hover:text-indigo-500 hover:bg-white" clickHandler=""/>
    </form>
   </div>
</MainLayout>
</template>
<script>
import MainLayout from '../../layouts/MainLayout'
import ButtonComponent from '../../components/ButtonComponent'
import { mapState } from 'vuex'
export default {
  components: {
    MainLayout,
    ButtonComponent
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    clickHandler () {
      console.log('clicked')
    },
    handleSubmit () {
      console.log(this.formdata)
    }
  },
  data () {
    return {
      formdata: {
        username: '',
        email: ''
      }
    }
  }
}
</script>
