<script setup>

const router = useRouter();
// get name of logged in user from cookie
const my_name = useCookie("token_name", { maxAge: 8640 * 1000 });
const isOpen = ref(false);
const editProfile = () => {
  router.push({
      path: "/profile",
    });
}

const logout = () => {
  const my_token = useCookie("token");
  my_token.value = undefined;
  router.push({ path: "/login" });
};


</script>

<template>
  <header
    class="flex justify-between items-center py-8 px-6  shadow-md"
  >
    <div class="sidebar" :class="[{ close: !isOpen }]">
      <!-- isopen=!isopen -->
      <button @click="isOpen = !isOpen" type="button" class="button">
        <Icon name="solar:close-circle-line-duotone" color="gray-400" size="30" />
      </button>
      <div class="flex w-full text-center text-orange-500 ">
      <h1 class="pt-20 text-xl w-full text-center font-bold leading-none">
        {{  my_name }}
      </h1>

    </div>
 
      <div class="pt-10 text-orange-500 p-4" >
        <Icon name="solar:clapperboard-edit-broken" color="gray-400" size="30" />
        <label class="pl-4" >Edit Family</label>
      </div>
      <div class="pt-10 text-orange-500 p-4">
        <Icon @click="editProfile" name="solar:clapperboard-edit-broken" color="gray-400" size="30" />
        <label class="pl-4">Edit Profile</label>
      </div>
      <div class="pt-10 text-orange-500 p-4">
        <Icon name="solar:chat-round-line-broken" color="gray-400" size="30" />
        <label class="pl-4">Chat</label>
        
      </div>
      <div class="pt-10 flex text-orange-500 p-4">
        <Icon  name="solar:logout-2-line-duotone" color="gray-400" size="30" />
        <h2 class="text-orange-400 my-3 pl-4" style="cursor: pointer" @click="logout"> 
        LogOut
      </h2>
      
      
        
      </div>

    </div>

    <button
      @click="isOpen = !isOpen"
      class="block lg:hidden text-gray-800 focus:outline-none"
    >
      <!-- Assuming 'Icon' component is correctly imported and used -->
      <Icon name="solar:hamburger-menu-bold" color="gray-400" size="30" />
    </button>

    <p
      class="text-2xl font-bold text-gray-800 w-full justify-center flex text-justify"
    >
      FAMILY SHOPPING
    </p>
  </header>
</template>

<style>
.sidebar {
  @apply bg-orange-100 text-white font-bold w-60 h-full z-50 fixed top-0  left-0 rounded-lg;
  transition: all ease-in-out 0.5s;
}
.close {
  @apply -left-60;
}
</style>
