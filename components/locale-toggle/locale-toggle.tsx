'use client';

import { IconLanguage } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { ActionIcon, Tooltip } from '@mantine/core';

import { toggleLocale } from '@/app/actions';
import { useTransitionContext } from '@/context/transition';

import classes from './locale-toggle.module.css';

export function LocaleToggle() {
  const t = useTranslations('toolbar');
  const [isPending, startTransition] = useTransitionContext();

  function click() {
    startTransition(() => {
      toggleLocale();
    });
  }

  return (
    <Tooltip label={t('locale')} className={classes.tooltip}>
      <ActionIcon variant="filled" onClick={click} disabled={isPending} className={classes.locale}>
        <IconLanguage className={classes.icon} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}
