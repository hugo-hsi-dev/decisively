import { createFactory } from 'hono/factory';

import { auth } from '@/features/auth/lib/auth.config';

const factory = createFactory();

export const authHandler = factory.createHandlers((c) => {
  console.log(c.req.raw);
  return auth.handler(c.req.raw);
});
