'use client';

import { ServerError } from '@/features/server-error/server-error';
import AppLayout from '@/layouts/app-layout/app-layout';

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <AppLayout>
      <ServerError reset={reset} />
    </AppLayout>
  );
}
