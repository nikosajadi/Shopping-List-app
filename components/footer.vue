<script>
</script>

<template>
  <footer>
    <div  class="bg-white fixed bottom-0 py-4 w-screen">
      <div class="container mx-auto grid grid-cols-4 gap-4">
        <div>

          <NuxtLink to="/home">
            <row type="button" class="inline-flex w-full justify-center">
            <!-- <span class="table-group">Lists</span> -->
            <Icon name="solar:home-bold-duotone" color="gray" size="30" />
          </row>
     
  </NuxtLink>


          
        </div>
        <div>
          <row class="inline-flex w-full justify-center ">
            <!-- <span class="table-group">Items</span> -->
            <Icon name="solar:bill-list-bold" color="gray" size="30" />
          </row>
        </div>
        <div>
          <row class="inline-flex w-full justify-center ">
            <!-- <span class="table-group">Family</span> -->
            <Icon name="solar:users-group-rounded-bold-duotone" color="gray-400" size="30" />
          </row>
        </div>
        <div>
          <row class="inline-flex w-full justify-center ">
            <!-- <span class="table-group">Profile</span> -->
            <Icon name="solar:emoji-funny-circle-line-duotone" color="gray-400" size="30" />
          </row>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
.table-group {
  @apply text-sm font-medium text-red-800 pl-1  justify-center;
}
</style>
