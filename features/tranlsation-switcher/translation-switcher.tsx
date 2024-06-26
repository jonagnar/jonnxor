'use client';

import { ActionIcon } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';
import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';

export function TranslationSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function toggleLanguage() {
    const nextLocale = locale === 'en-GB' ? 'is' : 'en-GB';
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known params
        // are used in combination with a given pathname. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <ActionIcon size="xl" disabled={isPending} onClick={toggleLanguage}>
      <IconLanguage />
    </ActionIcon>
  );
}

export default TranslationSwitcher;
