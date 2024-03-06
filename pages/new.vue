<script setup lang="ts">
definePageMeta({
  layout: "weeklyshopping",
});
const status = ref(false);
const nameList = ref("");
const inputText = ref("");
const itemList = ref([]);

const goTolist = () => {
  if (nameList.value == "") {
    alert("Please fill items");
  } else {
    status.value = true;
  }
};

const handleAddButton = () => {
  // Push the input value into the itemList array
  itemList.value.push(inputText.value);
  // Clear the input after adding the value to the list
  inputText.value = "";
};
</script>

<template>
  <div class="mt-10 px-5">
    <!-- Start : step 1 enter shopping title and go to next -->
    <div v-if="!status" class="mt-10 px-5">
      <div class="flex w-full text-center">
        <h1 class="h1-title">NeW😍List</h1>
        {{ status }}
      </div>
      <input
        v-model="nameList"
        type="text"
        id="disabled-input"
        aria-label="disabled input"
        class="input"
      />
      <button @click="goTolist" class="button">ok</button>
    </div>
    <!-- End : step 1 :................... -->

    <!-- Start : step 2  
    
    
    20-->
    <div v-else class="mt-10 px-5">
      <h1 class="h1-title">{{ nameList }}</h1>
      <div class="input-container flex flex-row">
        <input
          v-model="inputText"
          placeholder="Type here..."
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          class="input"
        />
        <button @click="handleAddButton">+</button>
      </div>
      <!-- Display the itemList -->
      <ul>
        <li v-for="(item, index) in itemList" :key="index">- {{ item }}</li>
      </ul>
    </div>
    <!-- End : step 2 :................... -->
  </div>
</template>

<style>
.button {
  @apply text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm w-full py-2.5 text-center me-2 mb-2;
}
.input {
  @apply mt-8 mb-4 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
.h1-title {
  @apply mt-10 pt-10 text-3xl w-full text-center font-extrabold leading-none;
}
.input-container {
  position: relative;
}
</style>
