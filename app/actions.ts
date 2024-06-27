'use server';

import { cookies } from 'next/headers';

const COOKIE_POLICY = 'cookie-policy';

export async function hasCookies() {
  return cookies().has(COOKIE_POLICY);
}

export async function acceptCookies() {
  const value = 'accept';
  const oneDay = Date.now() - 24 * 60 * 60 * 1000;
  const httpOnly = true;
  const sameSite = 'strict';

  cookies().set(COOKIE_POLICY, value, {
    expires: oneDay,
    httpOnly,
    sameSite,
  });
}

export async function declineCookies() {
  cookies().delete(COOKIE_POLICY);
}
