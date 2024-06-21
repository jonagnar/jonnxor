'use client';

import { useContext } from 'react';
import { TransitionContext } from './context';

export function useTransitionContext() {
  return useContext(TransitionContext);
}
