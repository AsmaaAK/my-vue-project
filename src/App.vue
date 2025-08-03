<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="flex flex-1">
      <Sidebar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
</script>
