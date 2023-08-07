import { onMounted, ref, computed } from "vue";
import axios from "../lib/axios";

export default function useClientes() {
  const clientes = ref([]);

  onMounted(async () => {
    try {
      const response = await axios.get("/clientes");
      clientes.value = response.data;
    } catch (error) {
      console.log(error);
    }
  });

  const existenClientes = computed(() => {
    return clientes.value.length > 0;
  });

  return {
    clientes,
    existenClientes,
  };
}
