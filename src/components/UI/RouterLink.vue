<script setup>
import { RouterLink } from "vue-router";

defineProps({
  ruta: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    class="block md:inline-block rounded bg-blue-600 py-2 px-2 text-white uppercase font-bold text-sm shadow hover:bg-blue-500"
    :to="{ name: ruta }"
    >{{ texto }}</RouterLink
  >
</template>
