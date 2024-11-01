import { OpenAPIHono } from '@hono/zod-openapi';
import { apiReference } from '@scalar/hono-api-reference';

const app = new OpenAPIHono().get(
  '/',
  apiReference({
    theme: 'deepSpace',
    pageTitle: 'Decisively API',
    spec: {
      url: '/api/doc',
    },
  }),
);

export default app;
