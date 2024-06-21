'use client';

import { useDisclosure } from '@mantine/hooks';

import { NavbarContext } from './context';

export type Props = {
  children?: React.ReactNode;
};

export function NavbarProvider({ children }: Props) {
  const [opened, handlers] = useDisclosure();
  return <NavbarContext.Provider value={[opened, handlers]}>{children}</NavbarContext.Provider>;
}
