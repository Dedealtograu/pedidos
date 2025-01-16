import { FastifyRequest, FastifyReply } from "fastify";
import { UpdatePedidosServices } from "../services/UpdatePedidosServices";

class UpdatePedidosController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.params as { id: string };
        let { valorTotal } = request.body as { valorTotal: number };
        const { cliente, status, descricao, dataEntrega, updatedAt } = request.body as { cliente: string, status: string, descricao: string, dataEntrega: Date, updatedAt: Date };
        valorTotal = parseFloat(valorTotal.toString());
        //console.log(typeof valorTotal);
        const updatePedidosServices = new UpdatePedidosServices();
        const pedido = await updatePedidosServices.execute({ id, cliente, status, descricao, valorTotal, dataEntrega });        
        reply.send(pedido);
    }
}

export { UpdatePedidosController };