<template>
  <nav class="bg-blue-700 fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <RouterLink to="/" class="flex items-center space-x-3">
          <span class="text-white font-bold text-xl">DevJobs</span>
        </RouterLink>

        <div class="flex space-x-1">
          <RouterLink
            v-for="(link, index) in navLinks"
            :key="index"
            :to="link.to"
            :class="[
              isActiveLink(link.to)
                ? 'bg-blue-800 text-white'
                : 'text-blue-100 hover:bg-blue-800',
              'px-4 py-2 rounded-lg transition-colors duration-200 font-medium',
            ]"
          >
            {{ link.text }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/jobs", text: "Jobs" },
  { to: "/jobs/add", text: "Post a Job" },
];

const route = useRoute();
const isActiveLink = (path) => route.path === path;
</script>

<style></style>
