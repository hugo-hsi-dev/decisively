import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';

const route = createRoute({
  method: 'get',
  path: '/hello/:id',
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({ message: z.string() }),
        },
      },
      description: 'get message',
    },
  },
});

const app = new OpenAPIHono().openapi(route, (c) => {
  return c.json({ message: 'hello nextjs' }, 200);
});

export default app;
