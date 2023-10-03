import { FastifyInstance } from "fastify";
import { all } from "../controllers/testeControllers";

export async function testeRoutes(app: FastifyInstance) {

    app.get('/teste-stream', all)


}