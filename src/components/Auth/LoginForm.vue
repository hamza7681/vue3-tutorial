<script>
import { ref } from 'vue'
export default {
  setup() {
    const formData = ref({
      email: '',
      password: ''
    })
    function login() {
      console.log(formData.value.email, formData.value.password)
      formData.value = { email: '', password: '' }
    }
    return { formData, login }
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <form
      @submit.prevent="login"
      class="w-[500px] flex flex-col gap-4 items-center p-4 border-[1px] border-gray-200 shadow-md rounded-[5px]"
    >
      <p class="font-bold text-[24px]">Login</p>
      <div class="flex flex-col gap-1 w-full">
        <input
          type="text"
          placeholder="Enter your email..."
          class="w-full border-[1px] border-gray-200 focus:outline-none rounded-md px-3 py-2"
          v-model="formData.email"
        />
        <input
          type="password"
          placeholder="Enter your password..."
          class="w-full border-[1px] border-gray-200 focus:outline-none rounded-md px-3 py-2"
          v-model="formData.password"
        />
      </div>
      <button type="submit" class="bg-teal-500 w-full py-2 text-white font-bold rounded-md">
        Login
      </button>
    </form>
  </div>
</template>
