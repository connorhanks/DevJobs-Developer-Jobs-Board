<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const router = useRouter();

const form = reactive({
  type: "Full-Time",
  title: "",
  description: "",
  salary: "£0 - £10K",
  location: "",
  company: {
    name: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
  },
});

const handleSubmit = async () => {
  const newJob = {
    type: form.type,
    title: form.title,
    description: form.description,
    salary: form.salary,
    location: form.location,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  };

  const toast = useToast();

  try {
    const response = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    const data = await response.json();
    const jobId = data.id;

    toast.success("Job added successfully");
    router.push(`/jobs/${jobId}`);
  } catch (error) {
    toast.error("Failed to add job:", error);
  }
};
</script>

<template>
  <section class="bg-gray-50 pt-4">
    <div class="container max-w-3xl mx-auto p-6">
      <div class="card p-8">
        <h2 class="text-3xl font-bold text-center mb-8 text-blue-600">
          Post a New Job
        </h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Job Type -->
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

            <!-- Job Title -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                v-model="form.title"
                class="input-field w-full"
                placeholder="e.g. Senior Vue Developer"
                required
              />
            </div>

            <!-- Salary -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Salary Range
              </label>
              <select v-model="form.salary" class="input-field w-full">
                <option value="£0 - £10K">£0 - £10K</option>
                <option value="£10K - £20K">£10K - £20K</option>
                <option value="£20K - £30K">£20K - £30K</option>
                <option value="£30K - £40K">£30K - £40K</option>
                <option value="£40K - £50K">£40K - £50K</option>
                <option value="£50K - £60K">£50K - £60K</option>
                <option value="£60K - £70K">£60K - £70K</option>
                <option value="£70K - £80K">£70K - £80K</option>
                <option value="£80K - £90K">£80K - £90K</option>
                <option value="£90K - £100K">£90K - £100K</option>
                <option value="£100K+">£100K+</option>
              </select>
            </div>

            <!-- Location -->
            <div class="form-group">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                v-model="form.location"
                class="input-field w-full"
                placeholder="e.g. London, UK"
                required
              />
            </div>
          </div>

          <!-- Job Description -->
          <div class="form-group">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <textarea
              v-model="form.description"
              rows="4"
              class="input-field w-full"
              placeholder="Describe the role, requirements, benefits, etc."
              required
            ></textarea>
          </div>

          <!-- Company Information -->
          <div class="border-t pt-6 mt-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">
              Company Information
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Company Name -->
              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  v-model="form.company.name"
                  class="input-field w-full"
                  placeholder="Your company name"
                  required
                />
              </div>

              <!-- Contact Email -->
              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  v-model="form.company.contactEmail"
                  class="input-field w-full"
                  placeholder="email@company.com"
                  required
                />
              </div>

              <!-- Contact Phone -->
              <div class="form-group">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone
                </label>
                <input
                  type="tel"
                  v-model="form.company.contactPhone"
                  class="input-field w-full"
                  placeholder="Optional phone number"
                />
              </div>
            </div>

            <!-- Company Description -->
            <div class="form-group mt-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Company Description
              </label>
              <textarea
                v-model="form.company.description"
                rows="3"
                class="input-field w-full"
                placeholder="Tell us about your company"
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" class="btn-primary w-full">Post Job</button>
        </form>
      </div>
    </div>
  </section>
</template>
