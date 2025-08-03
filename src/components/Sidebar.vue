<template>
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white">
      <div class="flex items-center justify-center h-16 px-4 border-b border-blue-400">
        <span class="text-xl font-semibold">EOHM Dashboard</span>
      </div>
      <div class="flex-grow px-4 py-4 space-y-1 overflow-y-auto">
        <router-link
          v-for="item in items"
          :key="item.label"
          :to="item.to"
          class="flex items-center px-2 py-3 text-sm font-medium rounded-md hover:bg-blue-600 hover:text-white"
          :class="item.active ? 'bg-blue-800 text-white' : 'text-blue-200'"
          exact-active-class="bg-blue-800 text-white"
        >
          <i :class="item.icon + ' mr-3'"></i>
          {{ item.label }}
          <span v-if="item.badge" class="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{{ item.badge }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  { label: 'Dashboard', icon: 'fas fa-tachometer-alt', to: '/', active: true },
  { label: 'Members', icon: 'fas fa-users', to: '/members', badge: '12 new' },
  { label: 'Content', icon: 'fas fa-file-alt', to: '/content' },
  { label: 'Analytics', icon: 'fas fa-chart-line', to: '/analytics' },
  { label: 'Discussions', icon: 'fas fa-comments', to: '/discussions', badge: '5 unread' },
  { label: 'Settings', icon: 'fas fa-cog', to: '/settings' }
]
</script>
