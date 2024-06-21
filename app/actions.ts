'use server';

import { cookies } from 'next/headers';

import { defaultLocale } from '@/config';

export async function getLocale(fallback?: string) {
  return cookies().get('NEXT_LOCALE')?.value || fallback || defaultLocale;
}

export async function toggleLocale() {
  const value = await getLocale();
  cookies().set('NEXT_LOCALE', value === 'is' ? 'en' : 'is');
}
