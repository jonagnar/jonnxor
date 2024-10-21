import { Box, Title, Text, List, ListItem } from '@mantine/core';

export function Skills() {
  return (
    <Box component="section">
      <Title mb="sm" order={3} lh={1}>
        Skills
      </Title>
      <List listStyleType="square">
        <ListItem>Proficient in React and Typescript.</ListItem>
        <ListItem>Agile/Scrum/Kanban methodologies.</ListItem>
        <ListItem>Honorable, Fair, Viligant and stout of heart.</ListItem>
        <ListItem>Continuous learner & retrospective thinker.</ListItem>
        <ListItem>Expert knowledge of coding best practices.</ListItem>
      </List>
      <List listStyleType="none">
        <ListItem>
          <Text fw="bold">Web</Text>
          Node.js &#9642; React &#9642; React Native &#9642; CSS-in-JS <br />
          Bootstrap &#9642; Tailwind CSS &#9642; Material UI <br />
          NextJS &#9642; Expo &#9642; Astro &#9642; Ionic
        </ListItem>
        <ListItem>
          <Text fw="bold">Programming Languages</Text>
          HTML &#9642; CSS &#9642; Javascript &#9642; Typescript,
          <br />
          Java &#9642; C# &#9642; .NET &#9642; SQL
        </ListItem>
      </List>
    </Box>
  );
}

export default Skills;
