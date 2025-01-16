import prismaClient from "../prisma";

interface IRequest {
    id: string;
}

class DletePedidosServices {
    async execute({ id }: IRequest) {
        if (!id) {
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

        await prismaClient.pedido.delete({
            where: { 
                id: id 
            }
        })

        return { message: "Pedido deletado com sucesso" };
    }
}

export { DletePedidosServices };