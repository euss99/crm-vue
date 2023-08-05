<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";

defineProps({
  titulo: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink ruta="agregar-cliente" texto="Agregar cliente" />
    </div>

    <Heading :texto="titulo" />
  </div>
</template>
