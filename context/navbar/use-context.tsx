'use client';

import { useContext } from 'react';
import { NavbarContext } from './context';

export function useNavbarContext() {
  return useContext(NavbarContext);
}
