<template>
  <div class="relative bg-blue-600 h-[500px]">
    <div
      class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"
    ></div>
    <div class="relative container mx-auto px-4 h-full flex items-center">
      <div class="max-w-2xl">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
          Let's get you hired
        </h1>
        <p class="text-xl md:text-2xl text-blue-100 mb-8">
          Find the developer role that's right for you. Browse hundreds of
          positions from top companies.
        </p>
        <div class="flex gap-4">
          <RouterLink
            to="/jobs"
            class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Browse Jobs
          </RouterLink>
          <RouterLink
            to="/jobs/add"
            class="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
          >
            Post a Job
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
