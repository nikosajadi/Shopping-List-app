<script setup lang="ts">
// Define page metadata
definePageMeta({
  layout: "weeklyshopping",
});

// Import necessary modules
const router = useRouter();
const route = useRoute();
import axios from "axios";

// Set base URL for axios requests
axios.defaults.baseURL = "https://backend-sajadi.mrghanavati.ir/";

// Extract list ID and name from query parameters
const listID = route.query.id;
const listName = route.query.name;

// Define reactive variable for items
const items = ref([]);

// Function to display notification
const notify = (content) => {
  toast(content, {
    theme: "dark",
    type: "faild",
    position: "bottom-right",
    rtl: true,
    transition: "zoom",
    dangerouslyHTMLString: true,
  });
};

// Fetch list items from API on component mount
onMounted(async () => {
  try {
    const response = await axios.get(`shoplist/${listID}`);
    items.value = response.data; // Assuming your API returns the list directly
    // Now you can use items for further processing
  } catch (error) {
    console.error(error);
    console.log(error?.response?.data.message);
    notify(error?.response.data.message);
  }
});

// Function to delete the list
const deleted = async () => {
  try {
    await axios.delete(`shoplist/${listID}`);
    // After successful deletion, navigate back to the home page
    router.push({ path: '/home' });
  } catch (error) {
    console.error(error);
    console.log(error?.response?.data.message);
    notify(error?.response.data.message);
  }
};

// Function to update item status (e.g., toggle checkbox)
const updateItem = async (itemID: Number) => {
  try {
    await axios.patch(`shoplist/${itemID}`);
  } catch (error) {
    console.error(error);
    console.log(error?.response?.data.message);
    notify(error?.response.data.message);
  }
};
</script>

<template>
  <!-- Main container -->
  <div>
    <!-- Title -->
    <h2
      @click="saveList"
      class="mb-2 text-lg font-extrabold text-orange-900 dark:text-white text-gray-900 bg-gradient-100 font-larg rounded-xl text-sm w-full py-2 text-center me-2 mb-4 mt-10"
    >
      🥳{{ listName }}:
    </h2>

    <!-- Display the itemList -->

    <ul class="max-w-md space-y-1 text-orange-700  list-inside dark:text-gray-500">
      <!-- List items -->
      <li  v-for="(item, index) in items" :key="index" @click="updateItem(item.id)"> 
        <!-- Checkbox and label -->
        <div class="inline-flex items-center">
          <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
            <!-- Checkbox input -->
            <input type="checkbox"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-orange-orang-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-orange-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-orange-500 checked:before:bg-pink-500 hover:before:opacity-10"
              id="" :checked="item.is_done" />
            <!-- Checkmark icon -->
            <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
              </svg>
            </span>
          </label>
          <!-- Item title -->
          <label class="mt-px font-semibold text-orang-700 cursor-pointer select-none" htmlFor="check">
            {{ item.title }}
          </label>
        </div> 
      </li>
    </ul>
    <!-- Delete button -->
    <div
      @click="deleted"
      class="p-3 flex rounded-full bg-orange-800 right-5 bottom-20 fixed items-center"
    >
      <!-- Trash bin icon -->
      <Icon
        class="w-10 h-10"
        name="solar:trash-bin-minimalistic-broken"
        color="white"
        size="30"
      />
    </div>
  </div>
</template>

