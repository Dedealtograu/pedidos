import prismaClient from "../prisma";

interface IUpdatePedido {
    id: string;
    cliente?: string;
    status?: string;
    descricao?: string;
    valorTotal?: number;
    dataEntrega?: Date;
    updatedAt?: Date;
}

class UpdatePedidosServices {
    async execute({ id, cliente, status, descricao, valorTotal, dataEntrega }: IUpdatePedido) {
        //sconsole.log(typeof valorTotal);
        const pedido = await prismaClient.pedido.updateMany({
            where: {
                id
            },
            data: {
                status,
                cliente,
                descricao,
                valorTotal,
                dataEntrega,
                updatedAt: new Date()
            }
        });

        return pedido;
    }
}

export { UpdatePedidosServices };