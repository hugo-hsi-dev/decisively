/* eslint-disable check-file/folder-naming-convention */
import { OpenAPIHono } from '@hono/zod-openapi';
import { handle } from 'hono/vercel';

import docs from '@/features/api-doc/route';
import choices from '@/features/choices/api/routes';
import { defaultHook } from '@/lib/api-default-hook';

export const runtime = 'edge';

const app = new OpenAPIHono({ strict: false, defaultHook })
  .basePath('/api')
  .route('/choices', choices)
  .route('/ref', docs)
  .doc('/doc', {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Decisively API Reference',
    },
  });

export const GET = handle(app);
export const POST = handle(app);
