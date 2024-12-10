<script setup>
import { ref, defineProps } from "vue";

defineProps({
  jobId: {
    type: Number,
    default: "null",
  },
  jobType: {
    type: String,
    default: "null",
  },
  jobTitle: {
    type: String,
    default: "null",
  },
  jobDescription: {
    type: String,
    default: "null",
  },
  jobLocation: {
    type: String,
    default: "null",
  },
  jobSalary: {
    type: String,
    default: "null",
  },
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ jobType }}</div>
        <h3 class="text-xl font-bold">{{ jobTitle }}</h3>
      </div>

      <div class="mb-5">
        {{ jobDescription }}
      </div>

      <h3 class="text-green-500 mb-2">{{ jobSalary }}</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          {{ jobLocation }}
        </div>
        <a
          :href="'/job/' + jobId"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>
