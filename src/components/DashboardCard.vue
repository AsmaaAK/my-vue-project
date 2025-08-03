<template>
  <div class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium text-gray-500">{{ title }}</p>
        <p class="text-2xl font-semibold text-gray-800">{{ value }}</p>
        <p class="text-sm mt-1" :class="'text-' + trendColor + '-600'">
          <i class="fas" :class="trendIcon + ' mr-1'"></i> {{ trend }}
        </p>
        <p v-if="subtext" class="text-sm text-gray-500 mt-1">
          <i class="fas fa-circle mr-1 text-yellow-500"></i> {{ subtext }}
        </p>
      </div>
      <div class="p-3 rounded-full" :class="'bg-' + trendColor + '-100 text-' + trendColor + '-600'">
        <i :class="icon + ' text-xl'"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
  trend: String,
  subtext: String,
  icon: String,
  trendColor: String
})

const trendIcon = computed(() => {
  return trend.includes('-') ? 'fa-arrow-down' : 'fa-arrow-up'
})
</script>
