<template>
  <!-- Mobile hamburger button -->
  <div class="md:hidden fixed top-4 left-4 z-50">
    <button 
      @click="isSidebarOpen = !isSidebarOpen"
      class="p-2 rounded-md text-black focus:outline-none"
    >
      <i class="fas fa-bars"></i>
    </button>
  </div>

  <!-- Sidebar -->
  <div 
    class="fixed left-0 top-0 bottom-0 z-40 transition-all duration-300 ease-in-out"
    :class="{
      'transform -translate-x-full md:translate-x-0': !isSidebarOpen,
      'w-64': isSidebarOpen
    }"
  >
    <div class="flex flex-col h-full w-64 bg-gradient-to-br from-gray-600 via-gray-800 to-blue-700 text-white">
      <div class="flex items-center justify-center h-16 px-4 border-b border-blue-400">
        <span class="text-xl font-semibold">EOHM Dashboard</span>
      </div>
      <div class="flex-grow px-4 py-4 space-y-1 overflow-y-auto font-semibold">
        <router-link
          v-for="item in items"
          :key="item.label"
          :to="item.to"
          class="flex items-center px-2 py-3 text-sm font-medium rounded-md hover:bg-blue-600 hover:text-white"
          :class="item.active ? 'bg-blue-800 text-white' : 'text-blue-200'"
          exact-active-class="bg-blue-800 text-white"
          @click="isSidebarOpen = false"
        >
          <i :class="item.icon + ' mr-3'"></i>
          {{ item.label }}
          <span v-if="item.badge" class="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{{ item.badge }}</span>
        </router-link>
      </div>
    </div>
  </div>

  <!-- Overlay for mobile -->
  <div 
    v-if="isSidebarOpen"
    @click="isSidebarOpen = false"
    class="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
  ></div>
</template>

<script setup>
import { ref } from 'vue';

const isSidebarOpen = ref(false);

const items = [
  { label: 'Dashboard', icon: 'fas fa-tachometer-alt', to: '/', active: true },
  { label: 'Members', icon: 'fas fa-users', to: '/members', badge: '12 new' },
  { label: 'Content', icon: 'fas fa-file-alt', to: '/content' },
  { label: 'Analytics', icon: 'fas fa-chart-line', to: '/analytics' },
  { label: 'Discussions', icon: 'fas fa-comments', to: '/discussions', badge: '5 unread' },
  { label: 'Settings', icon: 'fas fa-cog', to: '/settings' }
]
</script>