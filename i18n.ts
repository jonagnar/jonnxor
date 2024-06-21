import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { defaultLocale, locales } from '@/config';

export default getRequestConfig(async (params) => {
  const locale = cookies().get('NEXT_LOCALE')?.value || params.locale || defaultLocale;

  //* Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === 'is' ? import('./messages/is.json') : import(`./messages/${locale}.json`))
    ).default,
  };
});
