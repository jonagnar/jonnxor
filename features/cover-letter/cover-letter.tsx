'use client';

import { Box, Group, Paper, Title, Text } from '@mantine/core';

export function CoverLetter() {
  return (
    <Box>
      <Group justify="flex-end">
        <Title order={2} mb="lg">
          Cover Letter
        </Title>
      </Group>
      <Paper mb="lg" p="md" radius="md" shadow="md" withBorder>
        <Text>
          Dear Reader
          <br />
          <br />
          I am a Senior Web Developer with a decade of experience in the field of web technologies
          and methodologies. Over the years, I have worked on numerous large-scale projects across
          various web frameworks, with a strong focus on project architecture, maintainability,
          readability, performance optimizations, and strict adherence to best practices.
          <br />
          <br />
          In my previous roles I have worked on numerous projects that required a blend of technical
          expertise and creative problem-solving. I have a strong command of tools like Node.js,
          npm, and yarn, and am proficient in technologies such as React.js, React Native, and
          Vue.js. My experiences with frameworks like Next.js, Remix, Expo, and Ionic have enabled
          me to deliver robust and scalable web solutions.
          <br />
          <br />
          I pride myself on being meticulous, punctual, reliable and honest. Dedicated to continuous
          learning and constantly seeking out knowledge to enhance my skills. My collaborative
          nature and passion for learning have allowed me to effectively share my expertise with
          colleagues and contribute to team success.
          <br />
          <br />
          In addition to my technical abilities, I have a deep appreciation for art, culture,
          language, history, mythology, and philosophy. These interests enrich my perspective and
          fuel my creativity.
          <br />
          <br />
          Thank you for visiting my website and considering my qualifications. I invite you to
          explore my portfolio and CV to learn more about my professional journey and the projects I
          have worked on. I am excited about the opportunity to bring my expertise in web
          development to help drive human development, For Science!
          <br />
          <br />
          Sincerely, <br />
          Jón Agnar
        </Text>
      </Paper>
    </Box>
  );
}
