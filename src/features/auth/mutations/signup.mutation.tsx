import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

import { client } from '@/features/auth/lib/auth.client';
import { signupSchema } from '@/features/auth/schemas/zod';

export function useSignUp() {
  return useMutation({
    mutationFn: async (values: z.infer<typeof signupSchema>) => {
      const signupData = {
        email: values.email,
        password: values.password,
        name: values.name,
      };

      const { data } = await client.signUp.email(signupData);

      return data;
    },
  });
}
