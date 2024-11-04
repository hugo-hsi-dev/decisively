'use client';

import { useGetAllChoices } from '@/features/choices/queries/get-all-choices.query';

export default function Test() {
  const { data } = useGetAllChoices();
  return <div>data fetched</div>;
}
