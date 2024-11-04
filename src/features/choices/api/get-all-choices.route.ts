import { Hono } from 'hono/quick';

import { db } from '@/db';
import { verifySession } from '@/lib/verify-session';

const app = new Hono().get('/', verifySession, async (c) => {
  const data = await db.query.choicesTable.findMany();
  console.log('namve', c.var.user.name);
  return c.json(data, 200);
});

export default app;
