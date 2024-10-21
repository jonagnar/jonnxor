import { Box, Container, Group } from '@mantine/core';

import { CV } from '@jonnxor/features/cv/cv';
import { Header } from '@jonnxor/features/header/header';
import { Download } from '@jonnxor/features/download/download';
import { SocialMedia } from '@jonnxor/features/social-media/social-media';

export default function HomePage() {
  return (
    <Box className="holy-grail holy-grail--columns">
      <Box component="header" py="lg" className="header">
        <Container h="100%" px="lg">
          <Group h="100%" align="center" justify="space-between">
            <Header />
            <Download />
          </Group>
        </Container>
      </Box>
      <Box component="main" my="lg">
        <Container h="100%" px="lg">
          <CV />
        </Container>
      </Box>
      <Box component="footer" py="md" className="footer">
        <Container h="100%" px="lg">
          <Group h="100%" align="center" justify="space-between">
            <Download />
            <SocialMedia />
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
