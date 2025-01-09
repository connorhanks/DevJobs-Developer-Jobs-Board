<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import JobListing from "@/components/JobListing.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  jobs: [],
  isLoading: true,
});

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
    state.isLoading = false;
  }
}

onMounted(async () => {
  getJobsData();
});
</script>

<template>
  <section class="py-16">
    <div class="container-xl lg:container m-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          {{ isFeatured ? "Featured Positions" : "All Available Jobs" }}
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          {{
            isFeatured
              ? "Browse through our latest developer opportunities. Find roles that match your experience and career goals."
              : "Explore all our current openings. From junior to senior positions, find your perfect role."
          }}
        </p>
      </div>

      <!-- Loading State -->
      <div
        v-if="state.isLoading"
        class="flex justify-center items-center py-20"
      >
        <PulseLoader color="#2563EB" />
      </div>

      <!-- Job Listings Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>

      <!-- View All Button -->
      <div v-if="showButton && !state.isLoading" class="mt-12 text-center">
        <RouterLink
          to="/jobs"
          class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition md:py-4 md:text-lg md:px-10"
        >
          View All Positions
          <i class="fas fa-arrow-right ml-2"></i>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
