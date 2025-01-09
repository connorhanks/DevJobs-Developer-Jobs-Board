<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/jobs"
        class="text-blue-500 hover:text-blue-600 flex items-center"
      >
        <span class="mdi mdi-arrow-left text-black mr-2"></span> Back to Job
        Listings
      </RouterLink>
    </div>
  </section>
</template>
