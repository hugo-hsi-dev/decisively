import { hc } from 'hono/client';

import app from '@/features/choices/api/index.routes';

type AppType = typeof app;

export const client = hc<AppType>(`/api/choices`);
