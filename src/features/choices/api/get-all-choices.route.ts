import { Hono } from 'hono/quick';

import { db } from '@/db';

const app = new Hono().get('/', async (c) => {
  const data = await db.query.choicesTable.findMany();
  return c.json(data, 200);
});

export default app;
