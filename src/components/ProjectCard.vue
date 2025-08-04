<template>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article class="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:-translate-y-2 hover:shadow-lg">
        <div class="h-48 bg-gray-200 relative overflow-hidden">
            <!-- <img src="images/waterImg.jpg" alt="Water Crisis Investigation" loading="lazy" class="w-full h-full object-cover"> -->
            <span class="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-medium">Active</span>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Water Crisis Documentation</h3>
            <p class="text-gray-600 mb-4">
                Investigating and documenting water scarcity issues in rural Yemen communities, highlighting the human impact of infrastructure challenges.
            </p>
            <div class="flex justify-between text-sm">
                <span class="bg-gray-100 px-3 py-1 rounded-full font-medium">Humanitarian</span>
                <span class="text-gray-500">2025</span>
            </div>
        </div>
        </article>
        </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String
})
</script>
