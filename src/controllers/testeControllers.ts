import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../lib/prisma"

export async function all(resquest: FastifyRequest, reply: FastifyReply){
    const data = await prisma.$queryRaw`SELECT TOP 50000 * FROM ASPECT_CALLDETAIL_TNT04_DAY`
    return reply.status(201).send(data)
}

