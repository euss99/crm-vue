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

const handleSubmit = (data) => {
  console.log(data);
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink ruta="inicio" texto="Volver" />
    </div>

    <Heading :texto="titulo" />

    <div class="mx-auto mt-10 bg-white rounded shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Agregar cliente"
          incomplete-message="No se pudo enviar, revisa los mensajes."
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            name="nombre"
            label="Nombre*"
            placeholder="Nombre del cliente"
            validation="required"
            :validation-messages="{
              required: 'El nombre del cliente es obligatorio.',
            }"
          />
          <FormKit
            type="text"
            name="apellido"
            label="Apellido*"
            placeholder="Apellido del cliente"
            validation="required"
            :validation-messages="{
              required: 'El apellido del cliente es obligatorio.',
            }"
          />
          <FormKit
            type="email"
            name="email"
            label="Email*"
            placeholder="Email del cliente"
            validation="required|email"
            :validation-messages="{
              required: 'El email del cliente es obligatorio.',
              email: 'Coloca un email válido',
            }"
          />
          <FormKit
            type="text"
            name="telefono"
            label="Teléfono*"
            placeholder="Télefono: XXX-XXX-XXXX"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
              matches: 'El formato no es válido.',
            }"
          />
          <FormKit
            type="text"
            name="empresa"
            label="Empresa"
            placeholder="Empresa del cliente"
          />
          <FormKit
            type="text"
            name="puesto"
            label="Puesto"
            placeholder="Puesto del cliente"
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
