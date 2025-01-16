import { FastifyRequest, FastifyReply} from "fastify";
import { DletePedidosServices } from "../services/DeletePedidosServices";

class DeletePedidosController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };
        const deletePedidosServices = new DletePedidosServices();
        const pedido = await deletePedidosServices.execute({ id });
        reply.send(pedido);
    }
}

export { DeletePedidosController };