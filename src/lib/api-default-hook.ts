import { Hook } from '@hono/zod-openapi';
import { Env } from 'hono';
import status from 'http-status';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const defaultHook: Hook<any, Env, any, any> = (result, c) => {
  if (!result.success) {
    return c.json(
      {
        success: result.success,
        error: result.error,
      },
      status.UNPROCESSABLE_ENTITY,
    );
  }
};
