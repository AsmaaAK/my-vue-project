<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <!-- <Navbar /> -->
    <section class="px-4 py-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white text-center">
      <!-- <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to the Peace Platform</h1>
      <p class="text-lg md:text-xl mb-8">Connecting communities through meaningful content and collaboration</p>
      <router-link to="/dashboard">
        <button class="px-6 py-3 bg-white text-blue-700 font-semibold rounded-md shadow hover:bg-blue-50 transition">
          Go to Dashboard
        </button> -->
        <WelcomeBanner/>
      <router-link />
    </section>
    <section class="px-4 py-16 max-w-5xl mx-auto">
      <h2 class="text-2xl font-semibold text-center mb-8">Our Projects</h2>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :icon="project.icon"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
// import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import WelcomeBanner from '@/components/WelcomeBanner.vue';

const projects = [
  {
    title: 'Youth Empowerment',
    description: 'Creating training opportunities for youth leaders.',
    icon: 'fas fa-users'
  },
  {
    title: 'Peace Journalism',
    description: 'Promoting accurate and fair reporting for social cohesion.',
    icon: 'fas fa-newspaper'
  },
  {
    title: 'Community Forums',
    description: 'Bringing together diverse voices for constructive dialogue.',
    icon: 'fas fa-comments'
  }
]
</script>
