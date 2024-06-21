'use client';

import { createContext } from 'react';
import { useDisclosure } from '@mantine/hooks';

export type Value = ReturnType<typeof useDisclosure>;
export const NavbarContext = createContext<Value>([
  false,
  { open: () => {}, close: () => {}, toggle: () => {} },
]);
