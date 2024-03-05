<script setup lang="ts">
definePageMeta({
  layout: "weeklyshopping",
});
</script>

<template>
    <div>
      <div class="flex w-full text-center">
      <h1 class="mt-10 pt-10 text-3xl w-full text-center font-extrabold leading-none">
        NeW😍List
      </h1>
      </div>
      <div class="mt-10 px-5">
        <input type="text" id="disabled-input" aria-label="disabled input" class="mb-6 bg-gray-100  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Name List" disabled>
        <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm w-full py-2.5 text-center me-2 mb-2">Next</button>
      </div>
    </div>
</template>