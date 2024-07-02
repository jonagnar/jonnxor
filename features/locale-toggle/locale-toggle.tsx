'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { type ElementProps, type AvatarProps, Avatar } from '@mantine/core';
import { type MouseEvent, useTransition, forwardRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { useRouter, usePathname } from '@/navigation';

import classes from './locale-toggle.module.css';

export type LocaleToggleProps = AvatarProps & ElementProps<'button', keyof AvatarProps> & {};

export const LocaleToggle = forwardRef<HTMLButtonElement, LocaleToggleProps>(
  ({ onClick, className, ...props }, ref) => {
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();
    const params = useParams();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleLocale = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
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
        onClick={handleLocale}
        {...props}
        component="button"
        className={clsx(classes.toggle, className)}
        disabled={isPending}
      >
        {t('toolbar.locale')}
      </Avatar>
    );
  }
);

export default LocaleToggle;
