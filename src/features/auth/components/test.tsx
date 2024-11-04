'use client';

import { useGetCurrentUser } from '@/features/auth/query/get-current-user.query';

export default function Test() {
  const { data } = useGetCurrentUser();
  return <div>{data?.user.name}</div>;
}
