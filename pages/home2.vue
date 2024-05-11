<script setup>
const fullName = ref('Niko')
const list = [
  { title: "Apple", color: "red", count: 5 },
  { title: "Banana", color: "yellow", count: 3 },
  { title: "Grapes", color: "purple", count: 2 }
];

const router = useRouter();
const goToNew = ()=> {
    router.push({ path: "/new" })
}


</script>
<template>
    
    <div class="bg-amber-50 w-full h-screen cursor-pointer ">
            <!-- Header -->
    <div class="flex flex-col w-full text-center justify-items-center ">
        <h1 class=" pt-48 text-3xl w-full text-center font-bold leading-none text-gray-400 ">
          Good Morning , {{ fullName }}  !</h1>
         
         <p class=" FiraCode-SemiBold text-base pt-6">Today's Shopping List</p>
         <div>
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <!-- Use the ShoppingItem component -->
                <ShoppingItem :item="item" />
              </li>
            </ul>
          </div>
         <NuxtLink to="/more" class="text-gray-500 text-center underline pt-10">Show Other Day Shopping List</NuxtLink>
      </div>

      
      <!-- Delete button -->
    <div
    @click="goToNew"
    class="p-4 flex rounded-full  right-5 bottom-20 fixed items-center"
  >
    <!-- pluse  icon -->
    <Icon
      class="w-20 h-20"
      name=solar:add-circle-bold
      color="#92400e"
      size="30"
    />
  </div>
</div>

     

       


</template>

<style>
</style>