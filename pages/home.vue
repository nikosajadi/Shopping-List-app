<script setup lang="ts">

definePageMeta({
  middleware: ["auth-user"],
  layout: "weeklyshopping",
});
</script>

<template>
  <div class="px-4">
    <shopcard />
    <shopcard />
    <NuxtLink to="/new" class="w-20 h-20 flex rounded-full bg-orange-400 right-5 bottom-20 fixed items-center text-center">
        <span class="content-center w-full text-3xl text-red-800">+</span>
      </NuxtLink>
  </div>
  
</template>
