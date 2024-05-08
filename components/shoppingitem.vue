<script>
const props = defineProps({
    item: {
        type: { title: String, count: Number, color: String  },
   
        required: true
    }
});

</script>
<template>
                  <!-- Buttons -->
        <div class="FiraCode-Medium flex flex-col px-6  justify-center text-black w-screen absolute mt-10 ">
            <div :style="{ color: item.color }" class="font-bold  w-full py-6 px-4 w-full rounded-lg" >
                
                    <h1>{{ item.title }}</h1>
                    <span class="text-gray-500">{{ item.count }} Items in The List</span>
            </div>
           
          
         </div>
    
</template>