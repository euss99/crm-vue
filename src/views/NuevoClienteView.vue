<script setup>
import { FormKit } from "@formkit/vue";
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
      <RouterLink ruta="inicio" texto="Volver" />
    </div>

    <Heading :texto="titulo" />

    <div class="mx-auto mt-10 bg-white rounded shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit type="form">
          <FormKit
            type="text"
            label="Nombre"
            placeholder="Nombre del cliente"
            validation="required"
            :validation-messages="{
              required: 'El nombre del cliente es obligatorio',
            }"
            validation-visibility="blur"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
