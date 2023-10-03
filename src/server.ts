import Fastify from 'fastify';
const app = Fastify({
  logger: true
})

const start = async () => {
  try {
    await app.listen({ port: 3333 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()