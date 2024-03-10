<script setup lang="ts">
definePageMeta({
  middleware: ["auth-user"],
  layout: "weeklyshopping",
});

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";
axios.defaults.baseURL = "https://backend-sajadi.mrghanavati.ir/";


const router = useRouter();
const status = ref(false);
const nameList = ref("");
const inputText = ref("");
const itemList = ref([]);
const my_id = useCookie("token_id");


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

const handleAddButton = () => {
  // Push the input value into the itemList array
  itemList.value.push(inputText.value);
  // Clear the input after adding the value to the list
  inputText.value = "";
}; 


const saveList = async () => {
  if (nameList.value === "" ) {
    notify("Pls choose name for shopping list");
  } else if (itemList.value.length == 0 ) {
    notify("Pls fill items");
  } else {
   
  try {  
      const response = await axios.post("shoplist", {  //here we send information from object to our api
        title : nameList.value,
        items:  itemList.value,
        creator : my_id.value //here I get Id from cookie
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
      <h1 class="h1-title">🥳{{ nameList }}</h1>
      <div class="input-container flex flex-row">
        <input
          v-model="inputText"
          placeholder="Type here..."
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          class="input"
        />
        <button class="relative" @click="handleAddButton">
          <Icon name="solar:add-square-line-duotone" class="relative rounded h-18 w-18  hover:bg-orange-200 mt-10 mb-4 " color="gray-400" size="30" />
        </button>
      </div>
      <!-- Display the itemList -->
      <ul>
        <li v-for="(item, index) in itemList" :key="index">{{ item }}</li>
      </ul>
    </div>
    <!-- End : step 2 :................... -->
    
    <buttom @click="saveList" >
     <Icon class="w-10 h-10 flex rounded-full bg-orange-200 right-5 bottom-20 fixed items-center text-center" name="solar:chat-round-check-bold-duotone"  color="gray-100" size="30" /></buttom>

  </div>
</template>

<style>
.button {
  @apply text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm w-full py-2.5 text-center me-2 mb-2;
}
.input {
  @apply mt-10 mb-4 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
.h1-title {
  @apply mt-10 pt-10 text-3xl w-full text-center font-extrabold leading-none;
}
.input-container {
  position: relative;
}


</style>
