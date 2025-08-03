<template>
  <div class="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-white">
    <div class="flex items-center">
      <button class="md:hidden text-gray-500 mr-2" @click="$emit ('toggle-sidebar')">
        <i class="fas fa-bars"></i>
      </button>
      <h1 class="text-lg font-semibold text-gray-800">{{ title }}</h1>
    </div>
    <div class="flex items-center space-x-4">
      <div class="relative">
        <button class="p-1 text-gray-500 hover:text-gray-700 relative">
          <i class="fas fa-bell text-xl"></i>
          <div class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>
      </div>
      <div class="relative">
        <button class="flex items-center space-x-2">
          <img src="/img.PNG" alt="Logo" class="h-10" />
          <span class="text-sm font-medium text-gray-700">Admin</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ title: String })
</script>
