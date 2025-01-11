<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600"
    role="navigation"
    aria-label="Main navigation"
  >
    <!-- Grid overlay pattern -->
    <div
      class="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"
      aria-hidden="true"
    ></div>

    <!-- Decorative corner gradient -->
    <div
      class="absolute top-0 right-0 w-32 h-full bg-gradient-to-bl from-white/[0.07] to-transparent"
      aria-hidden="true"
    ></div>
    <div
      class="absolute top-0 left-0 w-32 h-full bg-gradient-to-br from-white/[0.07] to-transparent"
      aria-hidden="true"
    ></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-24">
        <RouterLink
          to="/"
          class="flex items-center space-x-3"
          aria-label="DevJobs home"
        >
          <div class="px-2 py-1 rounded-lg bg-white/10 backdrop-blur-sm">
            <i
              class="mdi mdi-code-tags text-white text-2xl"
              aria-hidden="true"
            ></i>
          </div>
          <span class="text-white font-bold text-2xl">DevJobs</span>
        </RouterLink>

        <div class="flex space-x-2" role="menubar">
          <RouterLink
            v-for="(link, index) in navLinks"
            :key="index"
            :to="link.to"
            role="menuitem"
            :aria-current="isActiveLink(link.to) ? 'page' : undefined"
            :class="[
              isActiveLink(link.to)
                ? 'bg-white/20 text-white'
                : 'text-blue-100 hover:bg-white/10',
              'px-5 py-2.5 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm border border-white/10 hover:border-white/20',
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
