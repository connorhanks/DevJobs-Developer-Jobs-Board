<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <Hero
    title="Let's get you hired."
    subtitle="Find the developer role that's right for you."
  />
  <HomeCards />
  <JobListings :limit="3" :show-button="true" />
</template>
