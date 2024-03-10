<script setup lang="ts">

definePageMeta({
  middleware: ["auth-user"],
  layout: "weeklyshopping",
});

// try {  
//       const response = await axios.get("shoplist"); //here I call get.api  
     
//     } catch (error) {
//       console.error(error);
//       console.log(error?.response?.data.message);
//       notify(error?.response.data.message);
//     }
</script>

<template>
  <div class="px-4">
    <shopcard />
    <shopcard />
    <NuxtLink to="/new" > <Icon class="w-10 h-10 flex rounded-full bg-orange-200 right-5 bottom-20 fixed items-center text-center" name="solar:add-circle-broken"  color="gray-100" size="30" />
        <!-- <span class="content-center w-full text-3xl text-red-800">+</span> -->
      </NuxtLink>
  </div>
  
</template>


