<script setup>
const props = defineProps({
  items: {
    type: { title: String, id: Number },
    required: true,
  },
});

const router = useRouter();
console.log(props.items);
// use query Parameters to get the items from the router and  the items from the router will be show in the router when clicked
const goToItemList = () => {
  router.push({
    path: "/itemlist",
    query: { id: props.items.id, name: props.items.title },
  });
};
</script>

<template>
  <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->

  <div
    @click="goToItemList"
    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mt-5"
  >
    <h5
      class="border-b-2 border-neutral-100 px-6 py-3 text-xl font-medium leading-tight dark:border-neutral-600 dark:text-neutral-50"
    >
      {{ items.title }}
    </h5>
    <!-- <div class="p-6">
     
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
         {{items.id}}
      </p> 
      
      <button  type="button" class="button w-0">
          <Icon name="solar:check-circle-bold-duotone" color="gray-400" size="30" />
        </button>
      
    </div> -->
  </div>
</template>
