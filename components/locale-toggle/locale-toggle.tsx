'use client';

import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { MouseEvent } from 'react';
import { ActionIcon } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';

import { useRouter, usePathname } from '@/navigation';

import classes from './locale-toggle.module.css';

export function LocaleToggle() {
  const locale = useLocale();
  const params = useParams();

  const router = useRouter();
  const pathname = usePathname();

  function toggleLocale(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const nextLocale = locale === 'en' ? 'is' : 'en';

    // @ts-expect-error -- TypeScript will validate that only known params
    // are used in combination with a given pathname. Since the two will
    // always match for the current route, we can skip runtime checks.
    router.replace({ pathname, params }, { locale: nextLocale });
  }

  return (
    <ActionIcon size="input-sm" variant="filled" onClick={toggleLocale} aria-label="Toggle locale">
      <IconLanguage className={classes.icon} stroke={1.5} />
    </ActionIcon>
  );
}
