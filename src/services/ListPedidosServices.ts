import prismaClient from "../prisma";

class ListPedidosServices {
    async execute() {
        const pedidos = await prismaClient.pedido.findMany({ "orderBy": [{"createdAt" : "desc"} ]});

        return pedidos;
    }
}

export { ListPedidosServices };