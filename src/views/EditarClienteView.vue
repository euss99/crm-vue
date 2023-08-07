<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { FormKit } from "@formkit/vue";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "../components/UI/Heading.vue";
import ClienteServices from "../services/ClienteServices";

const router = useRouter();
const route = useRoute();
const { id } = route.params;

const formData = reactive({});

onMounted(async () => {
  try {
    const response = await ClienteServices.getClient(id);
    const { data } = response;
    Object.assign(formData, data);
  } catch (error) {
    console.log(error);
  }
});

defineProps({
  titulo: {
    type: String,
    required: true,
  },
});

const handleSubmit = async (data) => {
  try {
    const response = await ClienteServices.patchClient(id, data);
    router.push({ name: "listado-clientes" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink ruta="listado-clientes" texto="Volver" />
    </div>

    <Heading :texto="titulo" />

    <div class="mx-auto mt-10 bg-white rounded shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Guardar cambios"
          incomplete-message="No se pudo enviar, revisa los mensajes."
          @submit="handleSubmit"
          :value="formData"
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
            v-model="formData.nombre"
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
            v-model="formData.apellido"
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
            v-model="formData.email"
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
            v-model="formData.telefono"
          />
          <FormKit
            type="text"
            name="empresa"
            label="Empresa"
            placeholder="Empresa del cliente"
            v-model="formData.empresa"
          />
          <FormKit
            type="text"
            name="puesto"
            label="Puesto"
            placeholder="Puesto del cliente"
            v-model="formData.puesto"
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
