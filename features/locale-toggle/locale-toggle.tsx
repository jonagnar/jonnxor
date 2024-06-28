'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { type AvatarProps, Avatar } from '@mantine/core';
import { useTransition, forwardRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { useRouter, usePathname } from '@/navigation';

import classes from './locale-toggle.module.css';

export type LocaleToggleProps = AvatarProps & {};

export const LocaleToggle = forwardRef<HTMLButtonElement, LocaleToggleProps>(
  ({ className, ...props }, ref) => {
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
          { locale: locale === 'is' ? 'en-GB' : 'is' }
        );
      });
    };

    return (
      <Avatar
        ref={ref}
        {...props}
        component="button"
        variant="filled"
        onClick={handleLocale}
        disabled={isPending}
        className={clsx(classes.toggle, className)}
      >
        {t('toolbar.locale')}
      </Avatar>
    );
  }
);

export default LocaleToggle;
