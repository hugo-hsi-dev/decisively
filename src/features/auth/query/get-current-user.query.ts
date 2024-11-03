import { useQuery } from '@tanstack/react-query';

import { client } from '@/features/auth/lib/auth.client';

export function useGetCurrentUser() {
  return useQuery({
    queryKey: ['current-user'],
    queryFn: async () => {
      const { data } = await client.getSession();
      return data;
    },
  });
}
