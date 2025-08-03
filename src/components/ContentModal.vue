<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold text-gray-800">Create New Content</h3>
        <button class="text-gray-500 hover:text-gray-700" @click="$emit('close')">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <form>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Content Title</label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Content Type</label>
          <select class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="article">Article</option>
            <option value="video">Video</option>
            <option value="podcast">Podcast</option>
            <option value="event">Event</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <div class="flex justify-end space-x-3">
          <button type="button" class="px-4 py-2 text-gray-600 hover:text-gray-800" @click="$emit('close')">Cancel</button>
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Content</button>
        </div>
      </form>
    </div>
  </div>
</template>
