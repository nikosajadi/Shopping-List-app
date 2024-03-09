<script setup lang="ts">
definePageMeta({
  middleware: ["auth-login"],
  layout: "starter",
});

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";
axios.defaults.baseURL = "https://backend-sajadi.mrghanavati.ir/";

// windows V
const my_token = useCookie("token", { maxAge: 8640 * 1000 });
const my_id = useCookie("token_id", { maxAge: 8640 * 1000 });
const my_name = useCookie("token_name", { maxAge: 8640 * 1000 });

const router = useRouter();
const mode = ref("login");
const Email = ref("");
const Password = ref("");
const displayName = ref("");

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

const signIn = () => {
  if (Email.value === "" || Password.value === "") {
    notify("Hello🙂! pls fill items!");
  } else {
    router.push({ path: "/home" });
  }
};
</script>
<template>
  <div>
    <div class="flex w-full text-center">
      <h1 class="pt-10 text-3xl w-full text-center font-extrabold leading-none">
        FAMILY <br />SH😍PPING
      </h1>
    </div>

    <div>
      <div
        class="inline-flex w-full justify-center shadow-sm w-screen"
        role="group"
      >
        <span
          class="table-group"
          @click="mode = 'login'"
          :class="{ active: mode == 'login' }"
          >login</span
        >
        <span
          class="table-group"
          @click="mode = 'Register'"
          :class="{ active: mode == 'Register' }"
          >Register</span
        >
      </div>
    </div>

    <div v-if="mode === 'login'">
      <div class="form-group">
        <div class="md:w-2/3">
          <input
            v-model="Email"
            type="text"
            id="email"
            placeholder="Email"
            class="form-control"
          />
          <input
            v-model="Password"
            type="password"
            id="password"
            placeholder="Password"
            class="form-control"
          />
          <button
            @click="signIn"
            class="text-white mt-6 mb-3 w-full font-bold py-4 px-4 rounded-2xl bg-gradient-to-br from-pink-200 to-orange-400"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>

    <div v-else class="active">
      <div class="form-group">
        <div class="md:w-2/3">
          <input
            v-model="Email"
            type="text"
            id="email"
            placeholder="Email"
            class="form-control"
          />
          <input
            v-model="Password"
            type="password"
            id="password"
            placeholder="Password"
            class="form-control"
          />

          <h3 class="mb-5 mt-5 text-ml leading-none text-gray-400">
            Other users can add you to their family by searching for your
            username
          </h3>
          <input
            v-model="displayName"
            type="text"
            id="displayName"
            placeholder="Display Name"
            class="form-control"
          />
          <button
            @click="singUp"
            class="text-white mt-6 mb-3 w-full font-bold py-4 px-4 rounded-2xl bg-gradient-to-br from-pink-200 to-orange-400"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>

    <NuxtLink to="/"></NuxtLink>
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
