import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from '@/config';

export default getRequestConfig(async () => {
  const locale = cookies().get('NEXT_LOCALE')?.value;

  //* Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === 'is' ? import('./messages/is.json') : import(`./messages/${locale}.json`))
    ).default,
  };
});
