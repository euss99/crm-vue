import { onMounted, ref, computed } from "vue";
import ClienteServices from "../services/ClienteServices";

export default function useClientes() {
  const clientes = ref([]);

  onMounted(async () => {
    try {
      const response = await ClienteServices.getClients();
      clientes.value = response.data;
    } catch (error) {
      console.log(error);
    }
  });

  const existenClientes = computed(() => {
    return clientes.value.length > 0;
  });

  const actualizarEstado = async (id, estado) => {
    try {
      await ClienteServices.patchStateClient(id, {
        estado: !estado,
      });

      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarCliente = async (id) => {
    try {
      await ClienteServices.deleteCliente(id);

      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    clientes,
    existenClientes,
    actualizarEstado,
    eliminarCliente,
  };
}
