'use client';

import { Button } from '@mantine/core';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/navigation';

export function LocaleToggle() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocale = () => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known params
        // are used in combination with a given pathname. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale === 'en-GB' ? 'is' : 'en-GB' }
      );
    });
  };

  return (
    <Button size="md" radius="md" onClick={handleLocale} disabled={isPending}>
      {t('toolbar.locale')}
    </Button>
  );
}

export default LocaleToggle;
