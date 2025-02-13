<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import BackButton from "@/components/BackButton.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

const route = useRoute();
const router = useRouter();
const toast = useToast();
const jobId = route.params.id;

const salaryRanges = [
  "£0 - £10,000",
  "£10,000 - £20,000",
  "£20,000 - £30,000",
  "£30,000 - £40,000",
  "£40,000 - £50,000",
  "£50,000 - £60,000",
  "£60,000 - £70,000",
  "£70,000 - £80,000",
  "£80,000 - £90,000",
  "£90,000 - £100,000",
  "£100,000 - £110,000",
  "£110,000 - £120,000",
  "£120,000 - £130,000",
  "£130,000 - £140,000",
  "£140,000 - £150,000",
  "£150,000 - £160,000",
  "£160,000 - £170,000",
  "£170,000 - £180,000",
  "£180,000 - £190,000",
  "£190,000 - £200,000",
  "£200,000+",
];

const state = reactive({
  isLoading: true,
});

const form = reactive({
  title: "",
  type: "Full-Time",
  location: "",
  salary: "",
  description: "",
  company: {
    name: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
  },
});

async function fetchJobDetails() {
  try {
    const response = await fetch(`/api/jobs/${jobId}`);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const job = await response.json();

    // Populate form with existing job data
    Object.assign(form, job);
  } catch (error) {
    console.error("Error fetching job:", error);
    toast.error("Failed to load job details");
  } finally {
    state.isLoading = false;
  }
}

const handleSubmit = async () => {
  try {
    const response = await fetch(`/api/jobs/${jobId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    toast.success("Job updated successfully");
    router.push(`/jobs/${jobId}`);
  } catch (error) {
    toast.error("Failed to update job");
    console.error("Error updating job:", error);
  }
};

onMounted(fetchJobDetails);
</script>

<template>
  <section
    class="bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen pt-24"
  >
    <div class="container mx-auto px-4 pb-12 sm:pb-24">
      <BackButton />

      <!-- Hero Section -->
      <header
        class="relative rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 mb-8 overflow-hidden"
      >
        <div
          class="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"
        ></div>
        <div class="relative">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Edit Job Listing
          </h1>
          <p class="text-blue-100 text-lg">
            Update the details of your job listing to ensure it attracts the
            right candidates.
          </p>
        </div>
      </header>

      <!-- Loading State -->
      <section
        v-if="state.isLoading"
        class="flex justify-center items-center py-20"
      >
        <PulseLoader color="#3B82F6" />
      </section>

      <!-- Form Section -->
      <section v-else class="mx-auto">
        <article
          class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <form @submit.prevent="handleSubmit" class="space-y-8">
            <!-- Job Details Section -->
            <fieldset>
              <legend class="text-2xl font-bold text-gray-900 mb-6">
                Job Details
              </legend>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    v-model="form.title"
                    type="text"
                    class="input-field w-full"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Job Type
                  </label>
                  <select v-model="form.type" class="input-field w-full">
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    v-model="form.location"
                    type="text"
                    class="input-field w-full"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <select
                    v-model="form.salary"
                    class="input-field w-full"
                    required
                  >
                    <option value="" disabled>Select a salary range</option>
                    <option
                      v-for="range in salaryRanges"
                      :key="range"
                      :value="range"
                    >
                      {{ range }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Job Description
                </label>
                <textarea
                  v-model="form.description"
                  rows="6"
                  class="input-field w-full"
                  required
                ></textarea>
              </div>
            </fieldset>

            <!-- Company Details Section -->
            <fieldset>
              <legend class="text-2xl font-bold text-gray-900 mb-6">
                Company Information
              </legend>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    v-model="form.company.name"
                    type="text"
                    class="input-field w-full"
                    required
                  />
                </div>

                <div class="form-group">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email
                  </label>
                  <input
                    v-model="form.company.contactEmail"
                    type="email"
                    class="input-field w-full"
                    required
                  />
                </div>

                <div class="form-group md:col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone (Optional)
                  </label>
                  <input
                    v-model="form.company.contactPhone"
                    type="tel"
                    class="input-field w-full"
                  />
                </div>

                <div class="form-group md:col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Company Description
                  </label>
                  <textarea
                    v-model="form.company.description"
                    rows="4"
                    class="input-field w-full"
                    required
                  ></textarea>
                </div>
              </div>
            </fieldset>

            <!-- Submit Button -->
            <footer class="flex justify-end">
              <button
                type="submit"
                class="bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Update Job
              </button>
            </footer>
          </form>
        </article>
      </section>
    </div>
  </section>
</template>
