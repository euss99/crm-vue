<script setup>
import Cliente from "./Cliente.vue";
const props = defineProps({
  clientes: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <table class="min-w-full divide-y divide-gray-300">
    <thead>
      <tr>
        <th
          scope="col"
          class="p-2 text-left text-sm font-extrabold text-gray-600"
        >
          Nombre
        </th>
        <th
          scope="col"
          class="p-2 text-left text-sm font-extrabold text-gray-600"
        >
          Empresa
        </th>
        <th
          scope="col"
          class="p-2 text-left text-sm font-extrabold text-gray-600"
        >
          Estado
        </th>
        <th
          scope="col"
          class="p-2 text-left text-sm font-extrabold text-gray-600"
        >
          Acciones
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200 bg-white">
      <Cliente
        v-for="cliente in clientes"
        :key="cliente.id"
        :cliente="cliente"
      />
    </tbody>
  </table>
</template>
