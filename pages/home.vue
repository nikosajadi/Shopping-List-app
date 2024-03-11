<script setup lang="ts">
definePageMeta({
  middleware: ["auth-user"],
  layout: "weeklyshopping",
});

import axios from "axios";
axios.defaults.baseURL = "https://backend-sajadi.mrghanavati.ir/";


const myList = ref([]);

// Use onMounted with a callback function to fetch data when the component is mounted
onMounted(async () => {
  try {  
    const response = await axios.get("shoplist");
    myList.value = response.data; // Assuming your API returns the list directly
    console.log("testttt : " ,myList.value )
    // Now you can use myList for further processing
    
  } catch (error) {
    console.error(error);
    console.log(error?.response?.data.message);
    notify(error?.response.data.message);
  }
});

</script>

<template>
  <div class="px-4">
    <shopcard v-for="(name, index) in myList" :key="index" :name="name" :items="myList[index]" />
    <NuxtLink to="/new" > <Icon class="w-10 h-10 flex rounded-full bg-orange-200 right-5 bottom-20 fixed items-center text-center" name="solar:add-circle-broken"  color="gray-100" size="30" />
        <!-- <span class="content-center w-full text-3xl text-red-800">+</span> -->
      </NuxtLink>
  </div>
  
</template>


