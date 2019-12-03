const fastify = require('fastify')({ logger: true })

const appDetails = require('./app')
const fileDetails = require('./file')

// Declare a route
fastify.get('/app', async (request, reply) => {
  return appDetails;
})

fastify.get('/file', async (request, reply) => {
    return fileDetails;
  })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()