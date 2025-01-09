<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import JobListing from "@/components/JobListing.vue";

// Used for setting max number of jobs to display on-load
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  jobs: [],
  isLoading: true,
});

// GET request to backend to retrieve jobs data
async function getJobsData() {
  const url = "/api/jobs";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    state.jobs = json;
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
  } finally {
    // so spinner animation knows when to stop
    state.isLoading = false;
  }
}

onMounted(async () => {
  getJobsData();
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-blue-600 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show loading spinner while state.isLoading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader color="#3B82F6" />
      </div>

      <!-- Show job listings when state.jobs is ready/data has finished fetching from API -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Display each job until we've hit our 'limit', as defined above
        If limit is truthy, use it, otherwise show all jobs -->
        <JobListing
          v-for="(job, index) in state.jobs.slice(
            0,
            limit || state.jobs.length
          )"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
