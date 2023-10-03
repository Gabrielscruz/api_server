import { FastifyInstance } from "fastify";
import { login } from "../controllers/authControllers";

export async function AuthRoutes(app: FastifyInstance) {
    app.post('/session', login)
}