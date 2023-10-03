import Fastify from 'fastify';
import cors from '@fastify/cors';
import { AuthRoutes } from './routes/auth';

const app = Fastify({
  logger: true, 
  requestTimeout: 25000
})

app.register(cors, {
  origin: true,
})


app.register(AuthRoutes)

const start = async () => {
  try {
    await app.listen({ port: 3333, host: '0.0.0.0' })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()