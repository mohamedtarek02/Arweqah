<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  type: {
    type: String,
    default: "button",
  },
  caption: String,
});

const buttonStyle = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-[#eeb000] hover:bg-[#E5BD4D] text-white rounded-[8px] px-[18px] py-[10px]";
  }
});
</script>

<template>
  <button :class="[buttonStyle]" :type="type">
    <slot>{{ caption }}</slot>
  </button>
</template>
