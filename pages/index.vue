<script setup lang="ts">
definePageMeta({
  layout: "starter",
});
const router = useRouter();
const steps = ref(0)
const goToStart = () => {
  router.push({
      path: "/login",
    });
}
   
const slideSteps = ref ([
{
    image: '/img/3.png', // Adjust the path here
    title: 'Grocery and to do lists',
    description: 'Out shopping, or you have need to get something done? Add it to your lists'
  },
  {
    image: '/img/2.png',
    title: 'Title 2',
    description: 'Description 2'
  },
  {
    image: '/img/1.png',
    title: 'Title 3',
    description: 'Description 3'
  }
]);


</script>

<template>
  <div>
    <div class="flex items-center justify-center h-screen">
      <div class="circle" style="margin-top: -100px">
        <img
          class="h-full w-full object-contain duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
       
          :src="slideSteps[steps].image"
          alt="image description"
        />
      </div>
    </div>
    <div class="absolute bottom-0 w-screen   bg-gray-200 p-10 mb-20 cursor-pointer filter grayscale hover:grayscale-0">

      <h1 class="mb-1 text-3xl font-extrabold leading-none">{{slideSteps[steps].title}}</h1>
      <h3 class="mb-1 text-lg  leading-none">{{ slideSteps[steps].description }}</h3>
      <button v-if="steps <2 " @click="steps++" type="button" class="text-white mt-6 mb-3 w-full  bg-gradient-to-br from-pink-400 to-orange-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">NEXT</button>
        <button v-else @click="goToStart" type="button" class="text-white mt-6 mb-3 w-full  bg-gradient-to-br from-pink-400 to-orange-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start</button>
        <div class="flex justify-center mt-2 gap-2">
      <div  class="w-5 h-5 bg-pink-200 rounded-full" :class="[{'bg-pink-800': steps == 0}]"></div>
      <div class="w-5 h-5 bg-pink-200 rounded-full" :class="[{'bg-pink-800': steps == 1}]"></div>
      <div class="w-5 h-5 bg-pink-200 rounded-full" :class="[{'bg-pink-800': steps == 2}]"></div>
      
     </div>
    </div>
    
  </div>
</template>


<style>
.circle {
  @apply w-3/4 h-72;
  border-radius: 80%; /* This makes it a perfect circle */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Text color */
  font-weight: bold;
}
</style>
