import { Box, Paper, SimpleGrid, Stack } from '@mantine/core';

import { Image } from '@jonnxor/features/image/image';
import { Skills } from '@jonnxor/features/skills/skills';
import { Languages } from '@jonnxor/features/languages/languages';
import { Education } from '@jonnxor/features/education/education';
import { Experience } from '@jonnxor/features/experience/experience';
import { Information } from '@jonnxor/features/information/information';

export function CV() {
  return (
    <Box>
      <Paper className="cv" withBorder>
        <SimpleGrid cols={{ base: 1, xs: 2 }} className="grid">
          <Stack>
            <Information />
            <Experience />
            <Education />
          </Stack>
          <Stack>
            <Image />
            <Skills />
            <Languages />
          </Stack>
        </SimpleGrid>
      </Paper>
    </Box>
  );
}

export default CV;
