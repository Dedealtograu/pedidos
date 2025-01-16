import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreatePedidosController } from "./controllers/CreatePedidosController";
import { ListPedidosController } from "./controllers/ListPedidosController";
import { UpdatePedidosController } from "./controllers/UpdatePedidosCotroller";
import { DeletePedidosController } from "./controllers/DeletePeddosController";
import { FindOnPedidosController } from "./controllers/FindOnPedidosContrller";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { hello: "world" };
    });

    fastify.post("/pedido", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreatePedidosController().handle(request, reply);
    });

    fastify.get("/pedidos", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListPedidosController().handle(request, reply);
    });

    fastify.get("/pedido/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new FindOnPedidosController().handle(request, reply);
    });

    fastify.put("/pedido/:id", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdatePedidosController().handle(request, reply);
    });

    fastify.delete("/pedido", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeletePedidosController().handle(request, reply);
    });
}