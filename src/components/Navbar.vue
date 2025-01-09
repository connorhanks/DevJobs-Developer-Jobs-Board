<script setup>
import { RouterLink, useRoute } from "vue-router";

import logo from "@/assets/img/logo.png";
import router from "@/router";

// Checks if provided path matches user's current route path
const isActiveLink = (routePath) => {
  // Get current route
  const route = useRoute();
  // If route path is equal to routePath provided, return true, otherwise return false
  return route.path === routePath;
};
</script>

<template>
  <nav
    class="bg-green-700 border-b border-green-500 fixed top-0 left-0 right-0 z-50"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink
            class="flex flex-shrink-0 items-center mr-4"
            to="/"
            aria-label="Jobs Board Home"
          >
            <img class="h-10 w-auto" :src="logo" alt="Jobs Board Logo" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Jobs Board</span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2" role="menubar">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                ]"
                role="menuitem"
                aria-current="page"
                >Home</RouterLink
              >
              <RouterLink
                to="/jobs"
                :class="[
                  isActiveLink('/jobs')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                ]"
                role="menuitem"
                >Jobs</RouterLink
              >
              <RouterLink
                to="/jobs/add"
                :class="[
                  isActiveLink('/jobs/add')
                    ? 'bg-green-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                ]"
                role="menuitem"
                >Add Job</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style></style>
