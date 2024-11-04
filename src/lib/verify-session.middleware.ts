import { createMiddleware } from 'hono/factory';
import { HTTPException } from 'hono/http-exception';
import status from 'http-status';

// eslint-disable-next-line boundaries/element-types
import { auth } from '@/features/auth/lib/auth.config';

type VerifySessionContext = {
  Variables: {
    user: typeof auth.$Infer.Session.user;
    session: typeof auth.$Infer.Session.session;
  };
};

export const verifySession = createMiddleware<VerifySessionContext>(
  async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers });

    if (!session) {
      throw new HTTPException(status.UNAUTHORIZED, {
        message: status[status.UNAUTHORIZED],
      });
    }

    c.set('session', session.session);
    c.set('user', session.user);

    await next();
  },
);
