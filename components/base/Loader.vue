<script setup>
import { defineProps } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "50",
  },
});
</script>

<template>
  <div class="text-center">
    <v-progress-circular
      color="#F8D266"
      indeterminate
      :size="size"
      :width="5"
    ></v-progress-circular>
  </div>
</template>
