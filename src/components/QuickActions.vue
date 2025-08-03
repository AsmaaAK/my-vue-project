<template>
  <div class="bg-white rounded-lg shadow-sm p-6">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
    <div class="space-y-3">
      <button v-for="action in actions" :key="action.label" class="w-full flex items-center justify-between px-4 py-3 rounded-md relative group" :class="action.bg + ' ' + action.text + ' hover:' + action.hover" @click="() => {}">
        <span>{{ action.label }}</span>
        <i :class="action.icon"></i>
        <span class="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
          {{ action.tooltip }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
const actions = [
  {
    label: 'Add New Member',
    icon: 'fas fa-plus',
    tooltip: 'Add new member to the community',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    hover: 'bg-blue-100'
  },
  {
    label: 'Create Content',
    icon: 'fas fa-plus',
    tooltip: 'Create new peace-building content',
    bg: 'bg-green-50',
    text: 'text-green-700',
    hover: 'bg-green-100'
  },
  {
    label: 'Generate Report',
    icon: 'fas fa-download',
    tooltip: 'Download activity report',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    hover: 'bg-purple-100'
  },
  {
    label: 'Send Announcement',
    icon: 'fas fa-envelope',
    tooltip: 'Send message to the community',
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    hover: 'bg-yellow-100'
  }
]
</script>
