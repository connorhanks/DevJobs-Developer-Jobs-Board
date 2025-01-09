<script setup>
import { RouterView } from "vue-router";

import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <!-- Navbar will be fixed at top of all pages -->
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>

<style></style>
