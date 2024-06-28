'use client';

import { IconArrowUp } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { useWindowScroll } from '@mantine/hooks';
import { rem, Affix, Button, Transition } from '@mantine/core';

export function ScrollToTop() {
  const t = useTranslations();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix
      position={{
        right: 'var(--mantine-spacing-lg)',
        bottom: `calc(${rem(80)} + var(--mantine-spacing-lg))`,
      }}
    >
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            style={transitionStyles}
            variant="filled"
            onClick={() => scrollTo({ y: 0 })}
            leftSection={<IconArrowUp />}
          >
            {t('navigation.back-to-top')}
          </Button>
        )}
      </Transition>
    </Affix>
  );
}

export default ScrollToTop;
