import { Box, Stack, Paper, Title } from '@mantine/core';

import { Image } from '@jonnxor/features/image/image';
import { Skills } from '@jonnxor/features/skills/skills';
import { Languages } from '@jonnxor/features/languages/languages';
import { Education } from '@jonnxor/features/education/education';
import { Experience } from '@jonnxor/features/experience/experience';
import { Information } from '@jonnxor/features/information/information';
import { Certification } from '@jonnxor/features/certification/certification';

export function CV() {
  return (
    <Box component="section">
      <Title mb="lg" order={2} className="hidden-print">
        CV
      </Title>
      <Paper className="cv" withBorder>
        <Box className="holy-grail holy-grail--rows">
          <Stack>
            <Information />
            <Experience />
            <Education />
          </Stack>
          <Box component="hr" />
          <Stack style={{ justifySelf: 'center' }}>
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
