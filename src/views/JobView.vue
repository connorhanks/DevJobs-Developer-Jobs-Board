<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, RouterLink, useRouter } from "vue-router";
import { useToast } from "vue-toastification";

import BackButton from "@/components/BackButton.vue";

import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const route = useRoute();
const router = useRouter();
const toast = useToast();

// The route var is used to check the current route to know which job listing is being viewed
const jobId = route.params.id;
const state = reactive({
  job: {},
  isLoading: true,
});

// GET request to backend to retrieve jobs data
async function getJobsDataById() {
  const url = `/api/jobs/${jobId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    state.job = json;
  } catch (error) {
    console.error(`Error fetching job with ID ${jobId}:`, error.message);
  } finally {
    // so spinner animation knows when to stop
    state.isLoading = false;
  }
}

const deleteJob = async () => {
  try {
    const confirm = window.confirm("Are you sure you want to delete this job?");

    if (confirm) {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      toast.success("Job deleted successfully");
      router.push("/jobs");
    }
  } catch (error) {
    toast.error(`Failed to delete job with id ${jobId}:`, error);
  }
};

onMounted(async () => {
  getJobsDataById();
});
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      <BackButton />

      <div v-if="state.isLoading" class="text-center py-8">
        <PulseLoader />
      </div>

      <div v-else class="grid md:grid-cols-3 gap-6">
        <!-- Main Content (2 columns) -->
        <div class="md:col-span-2 space-y-6">
          <!-- Job Header -->
          <div class="card p-6">
            <span
              class="px-3 py-1 text-xs font-medium rounded-full inline-block"
              :class="{
                'bg-blue-100 text-blue-600': state.job.type === 'Full-Time',
                'bg-pink-100 text-pink-600': state.job.type === 'Part-Time',
                'bg-purple-100 text-purple-600': state.job.type === 'Remote',
                'bg-orange-100 text-orange-600':
                  state.job.type === 'Internship',
              }"
            >
              {{ state.job.type }}
            </span>
            <h1 class="text-3xl font-bold mt-4">{{ state.job.title }}</h1>
            <div class="flex items-center mt-4 text-gray-600">
              <i class="fas fa-location-dot text-pink-500 mr-2"></i>
              {{ state.job.location }}
            </div>
          </div>

          <!-- Job Description -->
          <div class="card p-6">
            <h3 class="text-xl font-bold mb-4">Job Description</h3>
            <div class="text-gray-600 whitespace-pre-line mb-6">
              {{ state.job.description }}
            </div>

            <div class="border-t pt-4">
              <h3 class="text-xl font-bold mb-2">Salary</h3>
              <p>{{ state.job.salary }} / year</p>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="space-y-6">
          <!-- Company Info -->
          <div class="card p-6">
            <h3 class="text-xl font-bold mb-4">Company Info</h3>
            <h4 class="text-lg font-semibold">{{ state.job.company.name }}</h4>
            <p class="text-gray-600 my-4">
              {{ state.job.company.description }}
            </p>

            <div class="space-y-4">
              <div>
                <h5 class="font-medium mb-2">Contact Email:</h5>
                <p class="bg-gray-50 p-3 rounded">
                  {{ state.job.company.contactEmail }}
                </p>
              </div>

              <div v-if="state.job.company.contactPhone">
                <h5 class="font-medium mb-2">Contact Phone:</h5>
                <p class="bg-gray-50 p-3 rounded">
                  {{ state.job.company.contactPhone }}
                </p>
              </div>
            </div>
          </div>

          <!-- Manage Job -->
          <div class="card p-6">
            <h3 class="text-xl font-bold mb-4">Manage Job</h3>
            <div class="space-y-3">
              <RouterLink
                :to="`/jobs/edit/${state.job.id}`"
                class="btn-primary block text-center"
              >
                Edit Job
              </RouterLink>
              <button @click="deleteJob" class="btn-danger block w-full">
                Delete Job
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
