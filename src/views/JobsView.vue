<script setup>
import { reactive, onMounted, computed } from "vue";
import { useToast } from "vue-toastification";
import JobListing from "@/components/JobListing.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const toast = useToast();
const state = reactive({
  jobs: [],
  isLoading: true,
  filters: {
    search: "",
    type: "all",
    location: "All",
    sortBy: "newest", // newest, salary-high, salary-low
  },
});

// Get unique locations from jobs
const locations = computed(() => {
  const uniqueLocations = new Set(state.jobs.map((job) => job.location));
  return ["All", ...Array.from(uniqueLocations)];
});

const filteredJobs = computed(() => {
  let filtered = [...state.jobs];

  // Text search
  if (state.filters.search) {
    const query = state.filters.search.toLowerCase();
    filtered = filtered.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.name.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query)
    );
  }

  // Job type filter
  if (state.filters.type !== "all") {
    filtered = filtered.filter((job) => job.type === state.filters.type);
  }

  // Location filter
  if (state.filters.location !== "All") {
    filtered = filtered.filter(
      (job) => job.location === state.filters.location
    );
  }

  // Sorting
  switch (state.filters.sortBy) {
    case "salary-high":
      filtered.sort((a, b) => parseSalary(b.salary) - parseSalary(a.salary));
      break;
    case "salary-low":
      filtered.sort((a, b) => parseSalary(a.salary) - parseSalary(b.salary));
      break;
    case "newest":
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
  }

  return filtered;
});

// Helper function to parse salary strings into numbers
function parseSalary(salary) {
  return parseInt(salary.replace(/[^0-9]/g, ""));
}

async function fetchJobs() {
  try {
    const response = await fetch("/api/jobs");
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const jobs = await response.json();
    state.jobs = jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    toast.error("Failed to load jobs");
  } finally {
    state.isLoading = false;
  }
}

onMounted(fetchJobs);
</script>

<template>
  <div class="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen pt-24">
    <div class="container mx-auto px-4 py-8">
      <!-- Hero Section -->
      <div
        class="relative rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 mb-8 overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"
        ></div>
        <div class="relative">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Available Positions
          </h1>
          <p class="text-blue-100 text-lg max-w-2xl mb-8">
            Browse through our latest developer opportunities. Find roles that
            match your experience and career goals.
          </p>

          <!-- Filters Section -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <!-- Search -->
            <div class="md:col-span-2">
              <input
                v-model="state.filters.search"
                type="text"
                placeholder="Search by job title, company or location..."
                class="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-blue-100 border border-white/20 focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            <!-- Job Type Filter -->
            <select
              v-model="state.filters.type"
              class="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-white/40 transition-colors"
            >
              <option value="all" class="bg-white text-gray-900">
                All Types
              </option>
              <option value="Full-Time" class="bg-white text-gray-900">
                Full-Time
              </option>
              <option value="Part-Time" class="bg-white text-gray-900">
                Part-Time
              </option>
              <option value="Internship" class="bg-white text-gray-900">
                Internship
              </option>
            </select>

            <!-- Sort By -->
            <select
              v-model="state.filters.sortBy"
              class="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:border-white/40 transition-colors"
            >
              <option value="newest" class="bg-white text-gray-900">
                Newest First
              </option>
              <option value="salary-high" class="bg-white text-gray-900">
                Highest Salary
              </option>
              <option value="salary-low" class="bg-white text-gray-900">
                Lowest Salary
              </option>
            </select>
          </div>

          <!-- Location Filter - Below other filters -->
          <div class="mt-4">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="location in locations"
                :key="location"
                @click="state.filters.location = location"
                class="px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200"
                :class="
                  state.filters.location === location
                    ? 'bg-white text-blue-600'
                    : 'bg-white/10 text-white hover:bg-white/20'
                "
              >
                {{ location }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div
        v-if="state.isLoading"
        class="flex justify-center items-center py-20"
      >
        <PulseLoader color="#3B82F6" />
      </div>

      <!-- No Results -->
      <div v-else-if="filteredJobs.length === 0" class="text-center py-20">
        <i class="mdi mdi-file-search-outline text-6xl text-gray-400 mb-4"></i>
        <h3 class="text-xl font-medium text-gray-600">No jobs found</h3>
        <p class="text-gray-500 mt-2">Try adjusting your search criteria</p>
      </div>

      <!-- Job Listings Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobListing v-for="job in filteredJobs" :key="job.id" :job="job" />
      </div>
    </div>
  </div>
</template>
