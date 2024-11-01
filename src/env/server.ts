import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
  },
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});
