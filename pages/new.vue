<script setup lang="ts">
// Define page metadata
definePageMeta({
  middleware: ["auth-user"],
  layout: "weeklyshopping",
});
// Import necessary modules
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";
// Set base URL for axios requests
axios.defaults.baseURL = "https://backend-sajadi.mrghanavati.ir/";

// Define router and reactive variables
const router = useRouter();
const status = ref(false);
const nameList = ref("");
const inputText = ref("");
const itemList = ref([]);
const my_id = useCookie("token_id");

// Function to proceed to the next step or display notification if inputs are invalid
const goTolist = () => {
  if (nameList.value == "") {
    toast("Hello🙂! pls fill items!", {
      theme: "dark",
      type: "success",
      position: "bottom-right",
      rtl: true,
      transition: "zoom",
      dangerouslyHTMLString: true,
    });
  } else {
    status.value = true;
  }
};

// Function to handle adding items to the list
const handleAddButton = () => {
  // Push the input value into the itemList array
  itemList.value.push(inputText.value);
  // Clear the input after adding the value to the list
  inputText.value = "";
};

// Function to save the list
const saveList = async () => {
  if (nameList.value === "") {
    notify("Pls choose name for shopping list");
  } else if (itemList.value.length == 0) {
    notify("Pls fill items");
  } else {
    try {
      const response = await axios.post("shoplist", {
        //here we send information from object to our Api
        title: nameList.value,
        items: itemList.value,
        creator: my_id.value, //here I get Id from cookie
      });
      console.log(useCookie);
      router.push({ path: "/home" });
    } catch (error) {
      console.error(error);
      console.log(error?.response?.data.message);
      notify(error?.response.data.message);
    }
  }
};
// Function to display notification
const notify = (content: any) => {
  toast(content, {
    theme: "dark",
    type: "faild",
    position: "bottom-right",
    rtl: true,
    transition: "zoom",
    dangerouslyHTMLString: true,
  });
};
</script>

<template>
  <div class="mt-10 px-5">
    <!-- Start : step 1 enter shopping title and go to next -->
    <div v-if="!status" class="mt-10 px-5">
      <div class="flex w-full text-center">
        <h1 class="h1-title">NeW😍List</h1>
        <!-- {{ status }} -->
      </div>
      <input
        v-model="nameList"
        type="text"
        id="disabled-input"
        aria-label="disabled input"
        class="text-gray-900 bg-gradient-100 font-medium rounded-lg text-sm w-full py-2 text-center me-2 mb-4 mt-10"
      />
      <button @click="goTolist" class="button">ok</button>
    </div>
    <!-- End : step 1 :................... -->

    <!-- Start : step 2  
     
    20-->
    <div v-else class="mt-10 px-5">
      <h1 class="h1-title mb-10">🥳{{ nameList }}</h1>
 
           <!-- Input container for adding items -->
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">

           <!-- Input field for adding items -->
        <input
          v-model="inputText"
          type="text"
          class="relative bg-white m-0 -me-px block flex-auto rounded-s border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
          placeholder="Add items here..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          @click="handleAddButton"
          class="z-[2] bg-white  inline-block rounded-s border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:border-primary-accent-200 hover:bg-secondary-50/50 focus:border-primary-accent-200 focus:bg-secondary-50/50 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:border-primary-400 dark:text-primary-300 dark:hover:bg-blue-950 dark:focus:bg-white "
          data-twe-ripple-init
          type="button"
          id="button-addon2"
        >
          Add
        </button>
      </div>

      <!-- Display the itemList -->
      <ul>
        <li v-for="(item, index) in itemList" :key="index">{{ item }}</li>
      </ul>
    </div>
    <!-- End : step 2 :................... -->

    <div
      @click="saveList"
      class="p-3 flex rounded-full bg-orange-800 right-5 bottom-20 fixed items-center"
    >
      <Icon
        class="w-10 h-10"
        name="solar:archive-broken"
        color="white"
        size="30"
      />
    </div>
  </div>
</template>

<style>
.button {
  @apply text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm w-full py-2.5 text-center me-2 mb-2;
}

.h1-title {
  @apply mt-10 pt-10 text-3xl w-full text-center font-extrabold leading-none;
}
.input-container {
  position: relative;
}
</style>
