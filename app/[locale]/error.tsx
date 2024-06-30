'use client';

import { ServerError } from '@/features/server-error/server-error';

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return <ServerError reset={reset} />;
}
