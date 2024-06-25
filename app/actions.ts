'use server';

import { cookies } from 'next/headers';

export async function getCookiePolicyAccept() {
  return cookies().get('cookiepolicy')?.value === 'accept';
}

export async function setCookiePolicyAccept() {
  cookies().set('cookiepolicy', 'accept', { expires: Date.now() - 24 * 60 * 60 * 1000 });
}

export async function deleteCookiePolicy() {
  cookies().delete('cookiepolicy');
}
