import { Hono } from 'hono/quick';

import getAllChoices from '@/features/choices/api/get-all-choices.route';

const app = new Hono().route('/', getAllChoices);

export default app;
