<template>
<MainLayout>
  <div class=" pt-20 w-full bg-gray-200 relative max-h-screen">
    <div class="w-full flex ">
    <!-- section 1 -->
    <div class="h-[300px] ml-32 w-1/2 items-center space-y-12">
      <p class="text-3xl text-black font-semibold text-start">
        Looking to save more on your rental car?
      </p>
      <p class="text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        perspiciatis aut eius accusantium possimus rerum, voluptatum vitae quis
        nam suscipit?
      </p>
      <div class="flex w-full gap-12 ">
        <!-- <ButtonComponent className="bg-white text-black flex items-center justify-center py-8 text-md font-bold" buttonText='Continue with Google Play'  /> -->
        <GoogleLoginButton className="bg-indigo-500 p-4 text-white rounded-xl"  />
        <ButtonComponent className="bg-white text-black w-1/2 flex items-center justify-center py-8 text-md font-bold" buttonText='Continue with Apple Store' />
      </div>
    </div>
    <div class="bg-[#b85930] h-[400px] w-1/3 mx-auto rounded-md relative">
      <img
        src="../assets/car.png"
        class="w-full h-3/4 absolute -left-32 rotate-[90deg]"
      />
    </div>
    </div>
    <div class="w-2/3">
    <SearchBar />
    </div>
  </div>
</MainLayout>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
import SearchBar from '../components/SearchBar.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import GoogleLoginButton from '@/components/GoogleLoginButton.vue'
export default {
  components: {
    ButtonComponent,
    SearchBar,
    MainLayout,
    GoogleLoginButton
  }
}
</script>
