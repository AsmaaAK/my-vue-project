<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold text-gray-800">Dashboard Tour</h3>
        <button class="text-gray-500 hover:text-gray-700" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="mb-6">
        <p class="text-gray-700 mb-4">Welcome to EOHM Dashboard! Let's take a quick tour:</p>
        <ul class="list-disc pl-5 space-y-2 text-gray-600">
          <li>Track community growth through stats cards</li>
          <li>Use quick actions for common tasks</li>
          <li>Check recent activity for updates</li>
          <li>Manage members and content from the sidebar</li>
        </ul>
      </div>
      <div class="flex justify-between">
        <button class="px-4 py-2 text-gray-600 hover:text-gray-800" @click="$emit('close')">Skip Tour</button>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Next <i class="fas fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  </div>
</template>
