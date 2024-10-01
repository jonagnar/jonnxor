import { Box, SimpleGrid, Stack } from '@mantine/core';

import { Image } from '@jonnxor/features/image/image';
import { Skills } from '@jonnxor/features/skills/skills';
import { Languages } from '@jonnxor/features/languages/languages';
import { Education } from '@jonnxor/features/education/education';
import { Experience } from '@jonnxor/features/experience/experience';
import { Information } from '@jonnxor/features/information/information';

export function CV() {
  return (
    <Box mb="lg">
      <SimpleGrid cols={{ base: 1, xs: 2 }}>
        <Stack>
          <Information />
          <Experience />
          <Skills />
        </Stack>
        <Stack>
          <Image />
          <Education />
          <Languages />
        </Stack>
      </SimpleGrid>
    </Box>
  );
}

export default CV;
