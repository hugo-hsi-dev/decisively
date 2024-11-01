import { defineConfig } from 'drizzle-kit';

import { env } from '@/env/server';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
});
