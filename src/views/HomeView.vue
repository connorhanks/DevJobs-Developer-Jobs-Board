<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <div class="min-h-screen bg-blue-50">
    <Hero />
    <div class="container mx-auto px-4 -mt-20">
      <HomeCards />
      <JobListings :limit="6" :show-button="true" :is-featured="true" />
    </div>
  </div>
</template>
