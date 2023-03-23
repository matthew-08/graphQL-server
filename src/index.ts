import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'

const port = Number(process.env.API_PORT) || 3000

const yoga = createYoga({})


const server = createServer(yoga);

server.listen(port, () => {
    `server listening on ${port}`
})
