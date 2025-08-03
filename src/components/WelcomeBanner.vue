<template>
  <div class="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow-sm p-6 mb-6 relative">
    <button class="absolute top-3 right-3 text-white hover:text-gray-200" @click="$emit('dismissed')">
      <i class="fas fa-times"></i>
    </button>
    <h2 class="text-2xl font-bold mb-2">Welcome to EOHM Dashboard</h2>
    <p class="mb-4">Monitor and manage your peace-building initiatives and content.</p>
    <button class="px-4 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100">
      <i class="fas fa-compass mr-2"></i>Quick Tour
    </button>
  </div>
</template>
