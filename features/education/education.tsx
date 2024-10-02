import { Box, Title, Anchor, List, ListItem } from '@mantine/core';

export function Education() {
  return (
    <Box component="section">
      <Title mb="md" order={3}>
        Education
      </Title>
      <List spacing="xs" listStyleType="none">
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor
                c="var(--mantine-color-lime-5)"
                fw="bold"
                href="https://www.ru.is"
                target="_blank"
              >
                Reykjavík University
              </Anchor>
            </ListItem>
            <ListItem>Bachelor Degree in Computer Science</ListItem>
            <ListItem>2016</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor
                c="var(--mantine-color-lime-5)"
                fw="bold"
                href="https://tskoli.is"
                target="_blank"
              >
                Technical College of Iceland
              </Anchor>
            </ListItem>
            <ListItem>Associate Degree in Computer Studies</ListItem>
            <ListItem>2013</ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}

export default Education;
