<script setup>
const fullName = ref('')
</script>



<template>
    <div class="bg-amber-50 w-full h-screen cursor-pointer ">
            <!-- Header -->
    <div class="flex flex-col w-full text-center justify-items-center ">
        <h1 class=" pt-48 text-3xl w-full text-center font-bold leading-none text-gray-400 ">
          Good Morning , Niko {{ fullName }}   !</h1>
          <p class=" FiraCode-SemiBold text-base pt-6">Today Shoping List</p>
      </div>
        <!-- Buttons -->
        <div class="FiraCode-Medium flex flex-col px-6  justify-center text-black w-screen absolute mt-10 ">
        <div class="font-bold  w-full py-6 px-4 w-full rounded-lg  rounded-2xl bg-gradient-to-br from-pink-100 to-orange-400" >
            
                <h1>Night Party</h1>
                <span class="text-gray-500">18 item in The List</span>
        </div>
        <div class="font-bold w-full py-6 px-4 w-full mt-6 rounded-lg  rounded-2xl bg-gradient-to-br from-amber-100 to-amber-500" >
            
            <h1>Shopping for the children</h1>
            <span class="text-gray-500">3 item in The List</span>
    </div>
    <div class="font-bold  w-full py-6 px-4 w-full mt-6 rounded-lg  rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-500" >
            
        <h1>Shoping for the New Year celebration ggggggggg </h1>
        <span class="text-gray-500">8 item in The List</span>
      
</div>
      <NuxtLink to="/more" class="text-gray-500 text-center underline pt-28">Show Other Day Shopping List</NuxtLink>
        </div>

        

    </div>
</template>

<style>
</style>