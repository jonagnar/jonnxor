import Script from 'next/script';
import { useLocale } from 'next-intl';

export function IntlPolyfillScript() {
  const locale = useLocale();

  const polyfills = [
    'Intl',
    'Intl.Locale',
    'Intl.DateTimeFormat',
    `Intl.DateTimeFormat.~locale.${locale}`,
    'Intl.NumberFormat',
    `Intl.NumberFormat.~locale.${locale}`,
    'Intl.PluralRules',
    `Intl.PluralRules.~locale.${locale}`,
    'Intl.RelativeTimeFormat',
    `Intl.RelativeTimeFormat.~locale.${locale}`,
    'Intl.ListFormat',
    `Intl.ListFormat.~locale.${locale}`,
  ];

  return (
    <Script
      strategy="beforeInteractive"
      src={`https://cdnjs.cloudflare.com/polyfill/v3/polyfill.min.js?features=${polyfills.join(',')}`}
    />
  );
}
