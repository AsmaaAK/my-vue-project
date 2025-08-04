<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="flex-1">
      <Sidebar />
      <main class="bg-white pr-0 pt-10 md:pl-64">
      <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
</script>
