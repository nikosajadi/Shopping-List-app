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
const mode = ref("login");
const Email = ref("");
const Password = ref("");
const displayName = ref("");
// Define reactive variable for controlling password visibility
const showPassword = ref(false);

// Function to handle user registration
const singUp = async () => {
  if (Email.value === "" || Password.value === "" || displayName.value === "") {
    notify("Please fill values");
  } else {
    try {
      const response = await axios.post("users/signup", {
        email: Email.value,
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

const signIn = async () => {
  if (Email.value === "" || Password.value === "") {
    notify("Hello🙂! pls fill items!");
  } else {
    try {
      const response = await axios.post("users/signin", {
        email: Email.value,
        password: Password.value,
        
      });
      console.log(response);

      my_token.value = response.data.token;
      my_id.value = response.data.id;
      my_name.value = response.data.name;
      router.push({ path: "/home" });
    } catch (error) {
      console.error(error);
      console.log(error?.response?.data.message);
      notify(error?.response.data.message);
    }
  }
};
// Function to switch to registration tab
const switchToRegisterTab = () => {
  mode.value = 'Register'; // Set mode to 'Register' to activate registration tab
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
       <!-- Login mode -->
        <span
          class="table-group"
          @click="mode = 'login'"
          :class="{ active: mode == 'login' }"
          >Login Here</span
        >
         <!-- Register mode -->
        <span
          class="table-group"
          @click="mode = 'Register'"
          :class="{ active: mode == 'Register' }"
          >Register</span
        >
      </div>
      
    </div>
       <!-- Login form -->
    <div v-if="mode === 'login'">
      <div class="form-group">
        <div class="md:w-2/3">
          <!-- UserName input -->
          <label class="block text-gray-400 text-sm font-bold mb-1 ml-2" for="username">
            Username
          </label>
          <input
            v-model="Email"
            type="text"
            id="email"
            class="form-control"
          />
              <!-- Password input -->

<label class="block text-gray-400 text-sm font-bold mt-2 ml-2" for="Password">
  Password
</label>
<div class="relative">
  <input
    v-model="Password"
    :type="showPassword ? 'text' : 'password'"
    id="password"
    placeholder="Password"
    class="form-control pr-10" 
  />
  <span class="absolute inset-y-0 right-0 pr-3 flex items-center">
    <svg
      @click="toggleShowPassword"
      class="h-6 w-6 text-gray-500 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        :class="{ 'hidden': showPassword }"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        :class="{ 'hidden': !showPassword }"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 17l-4.67-4.67M7.5 10a5 5 0 018.33-3.61m-1.54 3.08a2 2 0 10-2.72-2.89m0 0a2 2 0 102.72 2.89"
      />
    </svg>
  </span>
</div>
            <!-- Sign in button -->
          <button
            @click="signIn"
            class="text-white mt-6 mb-3 w-full font-bold py-4 px-4 rounded-2xl bg-gradient-to-br from-pink-200 to-orange-400 border border-gray-600"
          >
            Login
          </button>
          
        </div>
      <!-- "Don't have an account?" link -->
     <div class="text-center mt-2">
      <NuxtLink @click="switchToRegisterTab" class="text-gray-500 underline">Don't have an account?</NuxtLink>
    </div>
      </div>

    </div>
     <!-- Registration form --> 
    <div v-else class="active">
      <div class="form-group">
        <div class="md:w-2/3">
           <!-- UserName input -->
           <label class="block text-gray-400 text-sm font-bold mb-2 ml-2" for="username">
            Username
          </label>
          <input
            v-model="Email"
            type="text"
            id="email"
            class="form-control"
          />
          <!-- Password input -->
          <label class="block text-gray-400 text-sm font-bold mt-2 ml-2" for="Password">
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
            Sign Up
          </button>

        </div>
      <!-- "Don't have an account?" link -->
     <div class="text-center mt-2">
      <NuxtLink to="/" class="text-gray-500 underline">Don't have an account?</NuxtLink>
    </div>
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
input[type="email"] {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #e2cdcd;
  border-radius: 0.25rem;
  @apply rounded-2xl my-3 px-3 py-4 text-gray-800;
}
</style>
