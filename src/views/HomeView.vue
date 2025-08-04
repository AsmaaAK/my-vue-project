<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
      <WelcomeBanner/>
      <router-link />
    <section class="px-4 py-16 max-w-5xl mx-auto">
      <h2 class="text-2xl font-semibold text-center mb-8">Our Projects</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
        />
      </div>
    </section>
  </div>
</template>

<script setup>
// import Navbar from '@/components/Navbar.vue'
// import Footer from '@/components/Footer.vue'
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
