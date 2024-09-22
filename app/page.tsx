import { Container } from '@mantine/core';

import { CV } from '@/features/cv/cv';
import { PageLayout } from '@/features/page-layout/page-layout';
import { CoverLetter } from '@/features/cover-letter/cover-letter';

export default function HomePage() {
  return (
    <PageLayout>
      <Container>
        <CoverLetter />
        <CV />
      </Container>
    </PageLayout>
  );
}
