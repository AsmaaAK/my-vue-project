<template>
  <div class="bg-white rounded-lg shadow p-6 text-center hover:shadow-md transition">
    <div class="text-3xl mb-4 text-blue-500">
      <i :class="icon"></i>
    </div>
    <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String
})
</script>
