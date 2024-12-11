<script setup>
import { RouterLink } from "vue-router";

import Card from "@/components/Card.vue";
</script>

<template>
  <section class="py-4" aria-labelledby="home-cards-title">
    <div class="container-xl lg:container m-auto">
      <h1 id="home-cards-title" class="sr-only">Welcome to Jobs Board</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">For Developers</h2>
          <p class="mt-2 mb-4">
            Browse our active roles and start your career today.
          </p>
          <RouterLink
            to="/jobs"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            role="button"
            aria-label="Browse available developer jobs"
          >
            Browse Jobs
          </RouterLink>
        </Card>
        <Card backgroundColour="bg-green-100">
          <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mt-2 mb-4">List your role to find the perfect developer.</p>
          <RouterLink
            to="/jobs/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
            role="button"
            aria-label="Post a new job listing"
          >
            Add Job
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
