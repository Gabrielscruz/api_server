import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../lib/prisma"
import { z } from "zod"

export async function login(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
        email: z.string().email(),
    })
    const { email } = bodySchema.parse(request.body)
    try {
    // const data = await prisma.$queryRaw`SELECT TOP 50000 * FROM ASPECT_CALLDETAIL_TNT04_DAY`
    const data = await prisma.user.findFirst({ where: { email }})
    return reply.status(201).send(data)
    } catch(error) {
        return reply.status(500).send(error)
    }
}

