import { FastifyRequest, FastifyReply} from "fastify";
import { FindOnPedidosServices } from "../services/FindOnPedidosServices";

class FindOnPedidosController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string };
        console.log(id);
        const findOnPedidosServices = new FindOnPedidosServices();
        const pedido = await findOnPedidosServices.execute(id);
        reply.send(pedido);
    }
}

export { FindOnPedidosController };