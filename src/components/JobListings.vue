<script setup>
import JobListing from "@/components/JobListing.vue";
import jobData from "@/jobs.json";
import { ref, defineProps } from "vue";

const jobs = ref(jobData);

// Used for setting max number of jobs to display on-load
defineProps({
  limit: Number,
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Display each job until we've hit our 'limit', as defined above
        If limit is truthy, use it, otherwise show all jobs -->
        <JobListing
          v-for="(job, index) in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :jobId="job.id"
          :jobType="job.type"
          :jobTitle="job.title"
          :jobDescription="job.description"
          :jobSalary="job.salary"
          :jobLocation="job.location"
        />
      </div>
    </div>
  </section>
</template>
