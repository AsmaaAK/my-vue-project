<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
      <WelcomeBanner/>
      <router-link />
    <section class="px-4 py-16 mx-auto">
      <h2 class="text-2xl font-semibold text-center mb-8">Our Projects</h2>
      <p class="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-600">
          Discover our ongoing initiatives that promote peace, diversity, and human rights across Yemen and beyond.
      </p>
      <div class="">
        <ProjectCard
        />
      </div>
      <div class="text-center mt-12">
      <a href="projects.html" class="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all">View All Projects</a>
      </div>
    </section>
   <section class="py-5 bg-white">
    <div class="container mx-auto px-4">
    <div class="text-center max-w-3xl mx-auto mb-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">Recent Publications</h2>
    <p class="text-lg text-gray-600">
        Stay informed with our latest research, reports, and analysis on humanitarian and social issues.
        </p>
    </div>
    </div>
    <frecentPublications />
    </section>
    <OurImpact/>
  </div>
</template>

<script setup>
// import OurImpact from '@/components/OurImpact.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import WelcomeBanner from '@/components/WelcomeBanner.vue'
import frecentPublications from '@/components/frecentPublications.vue'
import OurImpact from '@/components/OurImpact.vue'

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
