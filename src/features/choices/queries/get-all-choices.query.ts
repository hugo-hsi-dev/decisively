import { useQuery } from '@tanstack/react-query';

import { client } from '@/features/choices/lib/hono-client';

export function useGetAllChoices() {
  return useQuery({
    queryKey: ['choices', 'all'],
    queryFn: async () => {
      const res = await client.index.$get();
      throw new Error('hi');
      return await res.json();
    },
  });
}
