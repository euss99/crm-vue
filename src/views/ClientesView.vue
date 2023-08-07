<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";
import useClientes from "../composables/useClientes";
import TablaClientes from "../components/TablaClientes.vue";

const { clientes, existenClientes } = useClientes();

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

    <div
      v-if="existenClientes"
      class="flow-root mx-auto mt-10 p-5 bg-white shadow"
    >
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <TablaClientes :clientes="clientes" />
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center mt-10">No hay clientes</p>
    </div>
  </div>
</template>
