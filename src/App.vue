<script setup>
import { RouterView } from "vue-router";

import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <!-- Navbar will be static/present on all pages -->
  <Navbar />
  <RouterView />
</template>

<style></style>
