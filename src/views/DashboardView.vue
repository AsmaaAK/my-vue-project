<template>
  <div class="flex h-screen overflow-hidden">
    <Sidebar />

    <!-- Main content -->
    <div class="flex flex-col flex-1 bg-opacity-50 overflow-hidden">
      <Navbar title="Dashboard" />

      <!-- Welcome Banner -->
      <WelcomeBanner @dismissed="hideBanner = true" v-if="!hideBanner" />

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 px-4">
        <DashboardCard
          title="Community Members"
          value="1,248"
          :trend="'+12.5%'"
          icon="fas fa-users"
          trendColor="green"
        />
        <DashboardCard
          title="Peace Content"
          value="356"
          :trend="'+5.3%'"
          icon="fas fa-file-alt"
          trendColor="green"
        />
        <DashboardCard
          title="Engagement Rate"
          value="64.2%"
          :trend="'-2.1%'"
          icon="fas fa-chart-line"
          trendColor="red"
        />
        <DashboardCard
          title="Pending Tasks"
          value="14"
          subtext="3 overdue"
          icon="fas fa-tasks"
          trendColor="yellow"
        />
      </div>

      <!-- Quick Actions + Activity Feed -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 px-4">
        <QuickActions />
        <RecentActivity />
      </div>

      <!-- Modals -->
      <QuickTourModal v-if="showTourModal" @close="showTourModal = false" />
      <ContentModal v-if="showContentModal" @close="showContentModal = false" />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import DashboardCard from '@/components/DashboardCard.vue'
import WelcomeBanner from '@/components/WelcomeBanner.vue'
import QuickActions from '@/components/QuickActions.vue'
import RecentActivity from '@/components/RecentActivity.vue'
import QuickTourModal from '@/components/QuickTourModal.vue'
import ContentModal from '@/components/ContentModal.vue'

import { ref } from 'vue'

const hideBanner = ref(false)
const showTourModal = ref(false)
const showContentModal = ref(false)
</script>
