<script setup>
const toggleMenu = () => {
  // Your logic to toggle the menu goes here
};
</script>
<template>
  <header
    class="flex justify-between items-center py-4 px-6 bg-green shadow-md"
  >
    <h1 class="text-2xl font-bold text-gray-800">Your Title Here</h1>
    <button
      @click="toggleMenu"
      class="block lg:hidden text-gray-800 focus:outline-none"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>
  </header>
</template>
