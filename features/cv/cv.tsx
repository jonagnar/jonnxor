import { Box, Stack, Paper, Title } from '@mantine/core';

import { Skills } from '@jonnxor/features/skills/skills';
import { Projects } from '@jonnxor/features/projects/projects';
import { Languages } from '@jonnxor/features/languages/languages';
import { Education } from '@jonnxor/features/education/education';
import { Interests } from '@jonnxor/features/interests/interests';
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
          <Stack gap="lg">
            <Information />
            <Experience />
            <Education />
            <Certification />
          </Stack>
          <Box component="hr" m={0} />
          <Stack gap="lg" style={{ justifySelf: 'center' }}>
            <Skills />
            <Projects />
            <Languages />
            <Interests />
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

export default CV;
