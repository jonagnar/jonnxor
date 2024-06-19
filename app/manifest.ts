import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = 'is';

  const t = await getTranslations({
    namespace: 'manifest',
    locale,
  });

  return {
    name: t('name'),
    start_url: '/',
    theme_color: '#101E33',
  };
}
