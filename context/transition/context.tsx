'use client';

import { createContext, useTransition } from 'react';

export type Value = ReturnType<typeof useTransition>;
export const TransitionContext = createContext<Value>([false, () => null]);
