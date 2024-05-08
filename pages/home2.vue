<script setup>
const fullName = ref('')
const list = [
  { title: "Apple", color: "red", count: 5 },
  { title: "Banana", color: "yellow", count: 3 },
  { title: "Grapes", color: "purple", count: 2 }
];
</script>



<template>
    <div class="bg-amber-50 w-full h-screen cursor-pointer ">
            <!-- Header -->
    <div class="flex flex-col w-full text-center justify-items-center ">
        <h1 class=" pt-48 text-3xl w-full text-center font-bold leading-none text-gray-400 ">
          Good Morning , Niko {{ fullName }}   !</h1>
          <p class=" FiraCode-SemiBold text-base pt-6">Today Shoping List</p>
      </div>

      <NuxtLink to="/more" class="text-gray-500 text-center underline pt-28">Show Other Day Shopping List</NuxtLink>
        </div>

        

    </div>
</template>

<style>
</style>