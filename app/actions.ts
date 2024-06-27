'use server';

import { cookies } from 'next/headers';
import { type ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies';

type Options = Omit<Partial<ResponseCookie>, 'name' | 'value'>;

const key = 'cookie-policy';

export async function hasCookies() {
  return cookies().has(key);
}

export async function acceptCookies() {
  const value = 'accept';

  const options: Options = {
    path: '/',
    domain: 'jonnxor.is',
    secure: true,
    maxAge: Date.now() - 24 * 60 * 60 * 1000,
    expires: Date.now() - 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax',
  };

  cookies().set(key, value, options);
}

export async function declineCookies() {
  cookies().delete(key);
}
