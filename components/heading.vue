<script setup>
const isOpen = ref(false);


</script>

<template>
  <header class="flex justify-between items-center py-8 px-6 bg-green shadow-md"
  >
  <div class="sidebar" :class="[{ 'close': !isOpen }]">
      <!-- isopen=!isopen -->
      <button @click= "isOpen = !isOpen" type="button" class="button">
        Close
      </button>
    </div>


  <button @click="isOpen = !isOpen" class="block lg:hidden text-gray-800 focus:outline-none">
      <!-- Assuming 'Icon' component is correctly imported and used -->
      <Icon name="solar:hamburger-menu-bold" color="gray-400" size="30" />
    </button>



    <h1 class="text-2xl font-bold text-gray-800  text-justify">
      FAMILY SHOPPING
    </h1>

  </header>



</template>

<style>
.sidebar {
  @apply bg-orange-200 text-white font-bold w-60 h-full z-50 fixed top-0  left-0 rounded-lg;
  transition: all ease-in-out 0.5s;
}
.close {
  @apply  -left-60;
}
</style>