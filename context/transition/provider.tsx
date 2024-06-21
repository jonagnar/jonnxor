'use client';

import { useTransition } from 'react';

import { TransitionContext } from './context';

export type Props = {
  children?: React.ReactNode;
};

export function TransitionProvider({ children }: Props) {
  const [isPending, startTransition] = useTransition();
  return (
    <TransitionContext.Provider value={[isPending, startTransition]}>
      {children}
    </TransitionContext.Provider>
  );
}
