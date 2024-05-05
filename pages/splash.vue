<script setup lang="ts">

const router = useRouter();

onMounted(async () => {

  setTimeout(() => {
    router.push({ path: "/login" });
  }, 3000);
});
</script>
<template>
    <div class= "bg-orange-100 w-full h-screen cursor-pointer ">
        <div class="h-screen w-full flex flex-col pb-20 justify-center items-center">
            <img src="/img/share.png" alt="sharedlist" class="w-56"/>
            <p class=" FiraCode-SemiBold text-2xl " >Shared Shopping List</p>
            <p class=" FiraCode-SemiBold text-base">Sharing Shoping List</p>
        </div>
       
    </div>
  
</template>