import { Box, Title, Text, List, ListItem } from '@mantine/core';

export function Skills() {
  return (
    <Box component="section">
      <Title mb="md" order={3}>
        Skills
      </Title>
      <List spacing="xs" listStyleType="none">
        <ListItem>
          <Text fw="bold">Dev. Tools:</Text>
          Node.js, npm, git, etc.
        </ListItem>
        <ListItem>
          <Text fw="bold">Web Technologies:</Text>
          React, React Native, Vue
        </ListItem>
        <ListItem>
          <Text fw="bold">Web Frameworks:</Text>
          NextJS, Expo, Ionic
        </ListItem>
        <ListItem>
          <Text fw="bold">UI Frameworks:</Text>
          Bootstrap, Material UI, Tailwind CSS
        </ListItem>
        <ListItem>
          <Text fw="bold">Programming Languages:</Text>
          Javascript, Typescript, C#, SQL
        </ListItem>
      </List>
    </Box>
  );
}

export default Skills;
