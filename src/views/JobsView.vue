<script setup>
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <div class="min-h-screen bg-blue-50">
    <JobListings :is-featured="false" />
  </div>
</template>
