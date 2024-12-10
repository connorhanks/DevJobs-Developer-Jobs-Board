<script setup>
import { defineProps } from "vue";

defineProps({
  backgroundColour: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>

<template>
  <div :class="`${backgroundColour} p-6 rounded-lg shadow-md`">
    <!-- Output wrapped content using slot -->
    <slot></slot>
  </div>
</template>
