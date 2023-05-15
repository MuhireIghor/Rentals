<template>
    <div class='bg-white rounded p-4 w-[40%] flex  justify-evenly shadow-md shadow-indigo-200 z-20 absolute left-[12%] -bottom-8'>
        <!-- choose location  -->
        <div class='flex hover:cursor-pointer '>
            <p>Choose a location</p>||
            </div>
        <div class='flex hover:cursor-pointer'>
            <p>Pick up date</p>||
            </div>
        <div class='flex hover:cursor-pointer'>
            <p>Return date</p>
            </div>
            <div>
                <ButtonComponent buttonText="Search" className="flex bg-indigo-500 px-12 items-center justify-center text-white py-0"/>
            </div>

    </div>
</template>
<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
  components: {
    ButtonComponent
  }
}
</script>
