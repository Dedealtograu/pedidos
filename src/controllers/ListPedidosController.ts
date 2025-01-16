import { FastifyRequest, FastifyReply} from "fastify";
import { ListPedidosServices } from "../services/ListPedidosServices";

class ListPedidosController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listPedidosService = new ListPedidosServices();

    const pedidos = await listPedidosService.execute();

    reply.send(pedidos);
  }
}

export { ListPedidosController };