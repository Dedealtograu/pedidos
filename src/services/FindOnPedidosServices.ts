import prismaClient from "../prisma";

class FindOnPedidosServices{
    async execute(id: string){
        if(!id){
            throw new Error("ID inválido");
        }

        const pedido = await prismaClient.pedido.findFirst({
            where: { 
                id: id 
            }
        });

        if (!pedido) {
            throw new Error("Pedido não encontrado");
        }

        return pedido;
    }
}

export { FindOnPedidosServices };