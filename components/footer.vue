<script></script>

<template>
  <footer>
    <div class="bg-white fixed bottom-0 py-4 w-screen">
      <div class="container mx-auto grid grid-cols-4 gap-4">
        <div>
          <row class="inline-flex w-full justify-center">
            <!-- <span class="table-group">Lists</span> -->
            <Icon name="solar:bag-smile-bold-duotone" color="gray" size="30" />
          </row>
        </div>
        <div>
          <row class="inline-flex w-full justify-center shadow-sm">
            <span class="table-group">Items</span>
          </row>
        </div>
        <div>
          <row class="inline-flex w-full justify-center shadow-sm">
            <span class="table-group">Family</span>
          </row>
        </div>
        <div>
          <row class="inline-flex w-full justify-center shadow-sm">
            <span class="table-group">Profile</span>
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
