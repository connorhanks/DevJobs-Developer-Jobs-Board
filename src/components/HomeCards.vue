<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="grid md:grid-cols-2 gap-6 mb-12">
    <div
      class="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition"
    >
      <div class="flex items-start mb-4">
        <div class="px-2.5 py-2 bg-blue-100 rounded-lg">
          <span class="mdi mdi-code-tags text-blue-600 text-xl"></span>
        </div>
      </div>
      <h2 class="text-2xl font-bold mb-4">For Developers</h2>
      <p class="text-gray-600 mb-6">
        Browse through hundreds of Vue.js positions. Find your next role at
        companies from around the world.
      </p>
      <RouterLink
        to="/jobs"
        class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
      >
        Browse Jobs
        <span class="mdi mdi-arrow-right ml-2"></span>
      </RouterLink>
    </div>

    <div
      class="relative rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 border border-white/30"
    >
      <div class="flex items-start mb-4">
        <div class="px-2.5 py-2 bg-blue-500 rounded-lg">
          <span class="mdi mdi-office-building text-white text-xl"></span>
        </div>
      </div>
      <h2 class="text-2xl font-bold text-white mb-4">For Employers</h2>
      <p class="text-blue-100 mb-6">
        Post your job listings and reach thousands of talented Vue.js developers
        ready for their next opportunity.
      </p>
      <RouterLink
        to="/jobs/add"
        class="inline-flex items-center text-white font-semibold hover:text-blue-200"
      >
        Post a Job
        <span class="mdi mdi-arrow-right ml-2"></span>
      </RouterLink>
    </div>
  </div>
</template>
