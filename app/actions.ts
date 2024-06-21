'use server';

import { cookies } from 'next/headers';

export async function toggleLocale() {
  // Get cookie
  const value = cookies().get('NEXT_LOCALE')?.value;

  // Set cookie
  cookies().set('NEXT_LOCALE', value === 'is' ? 'en' : 'is');
}
