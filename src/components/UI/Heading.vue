<script setup>
defineProps({
  texto: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1 class="text-4xl font-extrabold text-slate-500">{{ texto }}</h1>
</template>
