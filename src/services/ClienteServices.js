import api from "../lib/axios";

export default {
  getClients() {
    return api.get("/clientes");
  },
  postClient(data) {
    return api.post("/clientes", data);
  },
  getClient(id) {
    return api.get(`/clientes/${id}`);
  },
  patchClient(id, data) {
    return api.patch(`/clientes/${id}`, data);
  },
  patchStateClient(id, data) {
    return api.patch(`/clientes/${id}`, data);
  },
  deleteCliente(id) {
    return api.delete(`/clientes/${id}`);
  },
};
