<script setup lang="ts">
definePageMeta({
  layout: "starter",
});

</script>
<template>
    <div>
    <div class="flex w-full text-center">
        <h1 class="pt-10 text-3xl w-full text-center font-extrabold leading-none">FAMILY <br>SH😍PPING</h1>
    </div>
    <form class="form-group ">
    <div class="md:w-2/3">
        <input type="text" id="username" placeholder="Email" class="form-control">
        <input type="password" id="username" placeholder="Password" class="form-control">
        <input type="text" id="username" placeholder="Username" class="form-control">
        <h3 class="mb-5 mt-5 text-ml  leading-none text-gray-400">Other users can add you to their family by searching for your username</h3>
        <h3 class="mb-5 mt-5 text-ml  leading-none text-gray-400"> by searching for your username</h3>
        <input type="text" id="username" placeholder="Display Name" class="form-control">
        <button class="text-white mt-6 mb-3 w-full  text-white font-bold py-4 px-4 rounded-2xl bg-gradient-to-br from-pink-200 to-orange-400 ">
            
  Sign Up
</button>

    </div>

    
    </form>
        <NuxtLink to="/">back</NuxtLink>
    </div>
    
</template>

<style>
.form-group {
  @apply md:w-1/3 p-10 mt-8;
  margin-bottom: 1rem;
  align-items: center;
 
}
input[type="text"],
input[type="password"],
input[type="email"] {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  @apply rounded-2xl my-3 px-3 py-4 ;
  
}

</style>