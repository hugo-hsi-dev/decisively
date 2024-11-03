import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

import { user } from '@/features/auth/schemas/table';

export const signupUserSchema = createInsertSchema(user, {
  email: ({ email }) => email.email('Not a valid email address'),
  name: ({ name }) =>
    name.min(3, 'Name is too short').max(15, 'Name is too long'),
});

// password was becoming nullable, which wasn't working well with react hook form and inputs
export const signupAccountSchema = z.object({
  password: z.string().min(8).max(32),
});

export const signupSchema = signupUserSchema
  .merge(signupAccountSchema)
  .pick({ email: true, password: true, name: true })
  .extend({ confirmPassword: z.string() })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
