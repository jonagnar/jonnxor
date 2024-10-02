import { Box, Paper, SimpleGrid, Stack } from '@mantine/core';

import { Image } from '@jonnxor/features/image/image';
import { Skills } from '@jonnxor/features/skills/skills';
import { Languages } from '@jonnxor/features/languages/languages';
import { Education } from '@jonnxor/features/education/education';
import { Experience } from '@jonnxor/features/experience/experience';
import { Information } from '@jonnxor/features/information/information';
import { Certification } from '@jonnxor/features/certification/certification';

export function CV() {
  return (
    <Box>
      <Paper className="cv" withBorder>
        <Box className="grid">
          <Stack w="100%">
            <Information />
            <Experience />
            <Education />
          </Stack>
          <hr />
          <Stack w="100%">
            <Image />
            <Certification />
            <Skills />
            <Languages />
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

export default CV;
