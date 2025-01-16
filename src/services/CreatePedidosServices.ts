import prismaClient from "../prisma";

interface ICreatePedidoProps {
    cliente: string;
    status: string;
    descricao: string;
    valorTotal: number;
    dataEntrega: Date;
}

class CreatePedidosServices {
    async execute({ cliente, status, valorTotal, descricao, dataEntrega }: ICreatePedidoProps) {
        if (!cliente || !status || !valorTotal || !descricao || !dataEntrega) {
            throw new Error("Todos os campos devem ser preenchidos");
        }

        const pedido = await prismaClient.pedido.create({ data: { cliente, status, valorTotal, descricao, dataEntrega } });

        return pedido;
    }
}

export { CreatePedidosServices };