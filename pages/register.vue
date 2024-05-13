<script setup lang="ts">
definePageMeta({
  middleware: ["auth-login"],
  layout: "starter",
});

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";

// Set base URL for axios requests
axios.defaults.baseURL = "https://backend-sajadi.mrghanavati.ir/";

// Define reactive variables and cookies
const my_token = useCookie("token", { maxAge: 8640 * 1000 });
const my_id = useCookie("token_id", { maxAge: 8640 * 1000 });
const my_name = useCookie("token_name", { maxAge: 8640 * 1000 });

// Define router and form data
const router = useRouter();
const nuser = ref("");
const Password = ref("");
const displayName = ref("");
// Define reactive variable for controlling password visibility
const showPassword = ref(false);

// Function to handle user registration
const singUp = async () => {
  if (nuser.value === "" || Password.value === "" || displayName.value === "") {
    notify("Please fill values");
  } else {
    try {
      const response = await axios.post("users/signup", {
        nuser: nuser.value,
        password: Password.value,
        name: displayName.value,
      });
      console.log(response);

      // Store user information in cookies
      my_token.value = response.data.token;
      my_id.value = response.data.id;
      my_name.value = response.data.name;

      // Redirect to the home page
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

// Function to switch to login tab
const switchToLoginTab = () => {
    router.push({
    path: "/login",
  }); // Set mode to 'Register' to activate registration tab
};

// Function to toggle password visibility
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
<template>
  <div>
    <!-- Header -->
    <div class="flex w-full text-center">
      <h1 class="pt-10 text-3xl w-full text-center font-extrabold leading-none">
        FAMILY <br />SH😍PPING
      </h1>
    </div>
    <!-- Mode selector -->
    <div>
      <div
        class="inline-flex w-full justify-center shadow-sm w-screen"
        role="group"
      >
  
        <!-- Register mode -->
        <span class="mt-9 px-10 py-4 text-sm font-medium text-gray-800 ">Register</span>
      </div>
    </div>

    <!-- Registration form -->
      <div class="form-group">
        <div class="md:w-2/3">
          <!-- UserName input -->
          <label
            class="block text-gray-400 text-sm font-bold mb-2 ml-2"
            for="username"
          >
            Username
          </label>
          <input v-model="nuser" type="text" id="nuser" class="form-control" />
          <!-- Password input -->
          <label
            class="block text-gray-400 text-sm font-bold mt-2 ml-2"
            for="Password"
          >
            Password
          </label>
          <input
            v-model="Password"
            type="password"
            id="password"
            class="form-control"
          />
          <!-- Display name input -->
          <h3 class="mb-1 mt-5 text-ml leading-none text-gray-400">
            What do they call you?
          </h3>
          <input
            v-model="displayName"
            type="text"
            id="displayName"
            placeholder="Enter your FirstName"
            class="form-control text-center"
          />
          <!-- Sign up button -->
          <button
            @click="singUp"
            class="text-white mt-6 mb-3 w-full font-bold py-4 px-4 rounded-2xl bg-gradient-to-br from-pink-200 to-orange-400 border border-gray-500"
          >
            Register
          </button>
        </div>
        <!-- "Don't have an account?" link -->
        <div class="text-center mt-2">
          <NuxtLink @click="switchToLoginTab" class="text-gray-500 underline"
            >Don't have an account?</NuxtLink
          >
        </div>

      </div>
    </div>
  
</template>

<style>
.table-group {
  @apply mt-9 px-10 py-4 text-sm font-medium text-gray-800   rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white;
}

.active {
  border-bottom: green;
  color: aliceblue;
}
.form-group {
  @apply md:w-1/3 p-10 mt-8;
  margin-bottom: 1rem;
  align-items: center;
}

input[type="text"],
input[type="password"],
input[type="nuser"] {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #e2cdcd;
  border-radius: 0.25rem;
  @apply rounded-2xl my-3 px-3 py-4 text-gray-800;
}
</style>
