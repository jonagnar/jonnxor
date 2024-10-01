import { Box, Title, Text, List, ListItem } from '@mantine/core';

export function Skills() {
  return (
    <Box component="section">
      <Title mb="md" order={3}>
        Skills
      </Title>
      <List spacing="xs" listStyleType="none">
        <ListItem>
          <Text fz="sm" fw="bold">
            Dev. Tools:
          </Text>
          NodeJS, npm, git, etc.
        </ListItem>
        <ListItem>
          <Text fz="sm" fw="bold">
            Web Technologies:
          </Text>
          React, React Native, Vue
        </ListItem>
        <ListItem>
          <Text fz="sm" fw="bold">
            Web Frameworks:
          </Text>
          NextJS, Expo, Ionic
        </ListItem>
        <ListItem>
          <Text fz="sm" fw="bold">
            UI Frameworks:
          </Text>
          Bootstrap, Material UI, Tailwind CSS
        </ListItem>
        <ListItem>
          <Text fz="sm" fw="bold">
            Programming Languages:
          </Text>
          Javascript, Typescript, C#, SQL
        </ListItem>
      </List>
    </Box>
  );
}

export default Skills;
