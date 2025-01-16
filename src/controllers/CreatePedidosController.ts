import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePedidosServices } from "../services/CreatePedidosServices";

class CreatePedidosController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { cliente, status, valorTotal, descricao, dataEntrega } = request.body as { cliente: string, status: string, valorTotal: number, descricao: string, dataEntrega: Date };
        console.log(cliente);
        const createPedidosService = new CreatePedidosServices();

        const pedido = await createPedidosService.execute({ cliente, status, valorTotal, descricao, dataEntrega });

        reply.send(pedido);
    }
}

export { CreatePedidosController };