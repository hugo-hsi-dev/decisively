import { useQuery } from '@tanstack/react-query';

import { client } from '@/features/choices/lib/hono-client';

export function useGetAllChoices() {
  return useQuery({
    queryKey: ['all-choices'],
    queryFn: async () => {
      const res = await client.index.$get();
      return await res.json();
    },
  });
}
