<script setup>
import { RouterLink } from "vue-router";
import { ref, defineProps, computed } from "vue";

const props = defineProps({
  job: Object,
});

const showFullDescription = ref(false);

const truncatedDescription = computed(() => {
  let description = props.job.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 90) + "...";
  }
  return description;
});
</script>

<template>
  <div
    class="group relative rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-blue-100/50 hover:border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
  >
    <!-- Decorative corner gradient -->
    <div
      class="absolute top-0 right-0 w-24 h-24 rounded-bl-[6rem] transition-all duration-300 group-hover:scale-125"
      :class="{
        'bg-gradient-to-br from-blue-600/5 to-blue-600/10':
          job.type === 'Full-Time',
        'bg-gradient-to-br from-pink-600/5 to-pink-600/10':
          job.type === 'Part-Time',
        'bg-gradient-to-br from-orange-600/5 to-orange-600/10':
          job.type === 'Internship',
      }"
    ></div>

    <!-- Job Type Badge - Floating -->
    <div class="absolute top-6 right-6">
      <span
        class="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full shadow-sm backdrop-blur-sm"
        :class="{
          'bg-blue-500/10 text-blue-700 border border-blue-500/20':
            job.type === 'Full-Time',
          'bg-pink-500/10 text-pink-700 border border-pink-500/20':
            job.type === 'Part-Time',
          'bg-orange-500/10 text-orange-700 border border-orange-500/20':
            job.type === 'Internship',
        }"
      >
        <i
          class="mr-1"
          :class="{
            'mdi mdi-briefcase': job.type === 'Full-Time',
            'mdi mdi-clock': job.type === 'Part-Time',
            'mdi mdi-school': job.type === 'Internship',
          }"
        ></i>
        {{ job.type }}
      </span>
    </div>

    <div class="relative p-6">
      <!-- Company Logo & Info -->
      <div class="flex items-center gap-4 mb-4">
        <div
          class="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center shadow-sm"
        >
          <i class="mdi mdi-office-building text-blue-600 text-2xl"></i>
        </div>
        <div>
          <h4 class="font-medium text-gray-900">{{ job.company.name }}</h4>
          <div class="flex items-center text-sm text-gray-600">
            <i class="mdi mdi-map-marker text-blue-600/75 mr-1"></i>
            {{ job.location }}
          </div>
        </div>
      </div>

      <!-- Job Title & Salary -->
      <div class="mb-4">
        <h3
          class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200"
        >
          {{ job.title }}
        </h3>
        <div class="mt-2 text-lg font-bold text-blue-600/90">
          {{ job.salary }}
          <span class="text-sm font-normal text-gray-600">/ year</span>
        </div>
      </div>

      <!-- Description -->
      <p class="text-gray-600 mb-6 line-clamp-2">
        {{ truncatedDescription }}
      </p>

      <!-- Action Button -->
      <RouterLink
        :to="`/jobs/${job.id}`"
        class="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 group/button"
      >
        View Position
        <i
          class="mdi mdi-arrow-right ml-2 transition-transform duration-200 group-hover/button:translate-x-0.5"
        ></i>
      </RouterLink>
    </div>
  </div>
</template>
