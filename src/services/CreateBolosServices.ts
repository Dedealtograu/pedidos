import prismaClient from "../prisma";

interface ICreateBoloProps {
    nome: string;
    preco: number;
    tamanho: string;
    pedidoId: string;
}

class CreateBolosServices {
    async execute({ nome, preco, tamanho, pedidoId }: ICreateBoloProps) {
        if (!nome || !preco || !tamanho || !pedidoId) {
            throw new Error("Todos os campos devem ser preenchidos");
        }

        const bolos = await prismaClient.bolo.create({ data: { nome, preco, tamanho, pedidoId } });

        return bolos;
    }
}

export { CreateBolosServices };