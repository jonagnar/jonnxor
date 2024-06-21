import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from '@/config';
import { getLocale } from '@/app/actions';

export default getRequestConfig(async (params) => {
  const locale = await getLocale(params.locale);

  //* Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === 'is' ? import('./messages/is.json') : import(`./messages/${locale}.json`))
    ).default,
  };
});
