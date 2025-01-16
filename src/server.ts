import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.status(400).send({ message: error.message });
});

const start = async () => {

    await app.register(cors);
    await app.register(routes);

    try {
        await app.listen({
            host: '0.0.0.0',
            port: process.env.PORT ? Number(process.env.PORT): 3333 
        }).then(() => {
            console.log('HTTP Server running');
        });
    } catch (err) {
        process.exit(1);
    }
};

start();