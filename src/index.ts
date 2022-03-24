import fastify from 'fastify';

const server = fastify();

server.get('/', async (req, res) => {
  console.info(req.body);
  return { name: 'Nikita', info: { age: 23, status: 'alive' } };
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error({ err });
    process.exit(1);
  }

  console.info(`Server is listning on ${address}`);
});
