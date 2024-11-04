/* eslint-disable check-file/folder-naming-convention */

import { Hono } from 'hono/quick';
import { handle } from 'hono/vercel';

import { authHandler } from '@/features/auth/api/handler';
import choices from '@/features/choices/api/index.routes';

export const runtime = 'edge';

const app = new Hono({ strict: false })
  .basePath('/api')
  .on(['POST', 'GET'], '/auth/**', ...authHandler)
  .route('/choices', choices);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
