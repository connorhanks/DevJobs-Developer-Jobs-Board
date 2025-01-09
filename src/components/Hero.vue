<template>
  <div
    class="relative bg-gradient-to-r from-blue-600 to-indigo-600 h-[500px] overflow-hidden"
  >
    <!-- Grid overlay pattern -->
    <div class="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]"></div>

    <!-- Decorative Elements -->
    <div
      class="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-white/[0.075] to-transparent transform translate-x-1/3 -translate-y-1/2"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-white/[0.075] to-transparent transform -translate-x-1/2 translate-y-1/2"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 w-[20rem] h-[20rem] rounded-full bg-gradient-to-br from-white/[0.05] to-transparent transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
    ></div>

    <!-- Floating Shapes -->
    <div
      class="absolute top-20 right-20 w-24 h-24 rounded-xl bg-gradient-to-br from-white/[0.1] to-transparent transform rotate-45 animate-float-slow"
    ></div>
    <div
      class="absolute bottom-32 right-48 w-16 h-16 rounded-full bg-gradient-to-br from-white/[0.1] to-transparent animate-float-slower"
    ></div>
    <div
      class="absolute top-40 left-20 w-20 h-20 rounded-lg bg-gradient-to-br from-white/[0.1] to-transparent transform -rotate-12 animate-float"
    ></div>

    <div class="relative container mx-auto px-4 h-full flex items-center">
      <div class="max-w-2xl">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
          Let's get you hired
        </h1>
        <p class="text-xl md:text-2xl text-blue-100 mb-8">
          Find the developer role that's right for you. Browse hundreds of
          positions from top companies.
        </p>
        <div class="flex gap-4">
          <RouterLink
            to="/jobs"
            class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Browse Jobs
          </RouterLink>
          <RouterLink
            to="/jobs/add"
            class="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition border border-white/20"
          >
            Post a Job
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(-12deg);
  }
  50% {
    transform: translateY(-20px) rotate(-12deg);
  }
}

@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0) rotate(45deg);
  }
  50% {
    transform: translateY(-15px) rotate(45deg);
  }
}

@keyframes float-slower {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 10s ease-in-out infinite;
}
</style>
