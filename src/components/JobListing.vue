<script setup>
import { RouterLink } from "vue-router";

import { ref, defineProps, computed } from "vue";

const props = defineProps({
  job: Object,
});

const showFullDescription = ref(false);

const toggleFullDescription = () => {
  // Sets to opposite of current value
  showFullDescription.value = !showFullDescription.value;
};

const truncatedDescription = computed(() => {
  // Set the description as the full, unmodified description
  let description = props.job.description;

  // If we don't want to show full description
  if (!showFullDescription.value) {
    // Truncate to first 90 characters
    description = description.substring(0, 90) + "...";
  }

  return description;
});
</script>

<template>
  <div class="card p-6 hover:scale-[1.02] transition-transform duration-300">
    <div class="flex items-start justify-between">
      <div>
        <span
          class="px-3 py-1 text-xs font-medium rounded-full"
          :class="{
            'bg-blue-100 text-blue-600': job.type === 'Full-Time',
            'bg-pink-100 text-pink-600': job.type === 'Part-Time',
            'bg-green-100 text-green-600': job.type === 'Remote',
            'bg-orange-100 text-orange-600': job.type === 'Internship',
          }"
        >
          {{ job.type }}
        </span>
        <h3 class="text-xl font-bold mt-3 text-gray-800">{{ job.title }}</h3>
      </div>
      <div class="text-xl font-bold text-blue-500">
        {{ job.salary }}
      </div>
    </div>

    <p class="mt-4 text-gray-600">
      {{ truncatedDescription }}
    </p>

    <div class="flex items-center justify-between mt-6">
      <div class="flex items-center text-gray-500">
        <span class="mdi mdi-map-marker text-black mr-2"></span>
        {{ job.location }}
      </div>
      <RouterLink :to="`/jobs/${job.id}`" class="btn-primary text-sm">
        View Details
      </RouterLink>
    </div>
  </div>
</template>
