<script setup>

const router = useRouter();

const isOpen = ref(false);
const editProfile = () => {
  router.push({
      path: "/profile",
    });
}
</script>

<template>
  <header
    class="flex justify-between items-center py-8 px-6 bg-green shadow-md"
  >
    <div class="sidebar" :class="[{ close: !isOpen }]">
      <!-- isopen=!isopen -->
      <button @click="isOpen = !isOpen" type="button" class="button">
        <Icon name="solar:close-circle-line-duotone" color="gray-400" size="30" />
      </button>
      <div class="flex w-full text-center">
      <h1 class="pt-20 text-xl w-full text-center font-extrabold leading-none">
        Niko Sajadi
      </h1>

    </div>
 
      <div class="pt-10">
        <Icon name="solar:clapperboard-edit-broken" color="gray-400" size="30" />
        <label class="font-sans" >Edit Family</label>
      </div>
      <div class="pt-10">
        <Icon @click="editProfile" name="solar:clapperboard-edit-broken" color="gray-400" size="30" />
        <label class="font-sans">Edit Profile</label>
      </div>
      <div class="pt-10">
        <Icon name="solar:chat-round-line-broken" color="gray-400" size="30" />
        <label class="font-sans">Chat</label>
        
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
  @apply bg-orange-200 text-white font-bold w-60 h-full z-50 fixed top-0  left-0 rounded-lg;
  transition: all ease-in-out 0.5s;
}
.close {
  @apply -left-60;
}
</style>
