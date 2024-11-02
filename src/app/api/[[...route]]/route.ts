/* eslint-disable check-file/folder-naming-convention */

import { Hono } from 'hono/quick';
import { handle } from 'hono/vercel';

import choices from '@/features/choices/api/index.routes';

export const runtime = 'edge';

const app = new Hono({ strict: false })
  .basePath('/api')
  .route('/choices', choices);

export const GET = handle(app);
export const POST = handle(app);
export const PT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
