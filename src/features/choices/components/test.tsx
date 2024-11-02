'use client';

import { useGetAllChoices } from '@/features/choices/queries/get-all-choices.query';

export default function Test() {
  const { data, isSuccess, isError, error } = useGetAllChoices();

  if (isError) {
    return <div>{error.message}</div>;
  }
  return <div>no error</div>;
}
