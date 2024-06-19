'use client';

import { useParams } from 'next/navigation';
import { IconLanguage } from '@tabler/icons-react';
import { useLocale, useTranslations } from 'next-intl';
import { ActionIcon, useComputedColorScheme } from '@mantine/core';

import { useRouter, usePathname } from '@/navigation';

import classes from './locale-toggle.module.css';

export function LocaleToggle() {
  const t = useTranslations('toolbar');
  const locale = useLocale();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  const color = computedColorScheme === 'dark' ? 'yellow' : 'blue';

  function toggleLocale() {
    const nextLocale = locale === 'en' ? 'is' : 'en';
    // @ts-expect-error -- TypeScript will validate that only known params
    // are used in combination with a given pathname. Since the two will
    // always match for the current route, we can skip runtime checks.
    router.replace({ pathname, params }, { locale: nextLocale });
  }

  return (
    <ActionIcon
      size="input-sm"
      color={color}
      variant="filled"
      onClick={toggleLocale}
      className={classes.toggle}
      aria-label={t('toggle-language')}
    >
      <IconLanguage className={classes.icon} stroke={1.5} />
    </ActionIcon>
  );
}
