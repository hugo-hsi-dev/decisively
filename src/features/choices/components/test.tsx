'use client';

import { useGetAllChoices } from '@/features/choices/queries/get-all-choices.query';

export default function Test() {
  const { data } = useGetAllChoices();

  console.log(data);
  return <div>data fetched</div>;
}
