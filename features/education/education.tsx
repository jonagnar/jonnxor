import { Box, Group, Title, List, ListItem, Text, Anchor } from '@mantine/core';

export function Education() {
  return (
    <Box component="section">
      <Title mb="sm" order={3}>
        Education
      </Title>
      <List listStyleType="none">
        <ListItem>
          <Text fw="bold">Bachelor Degree in Computer Science</Text>
          <Anchor c="var(--mantine-color-lime-5)" href="https://www.ru.is" target="_blank">
            Reykjavík University
          </Anchor>
          , 2013 - 2016
        </ListItem>
        <ListItem>
          <Text fw="bold">Associate Degree in Computer Studies</Text>
          <Anchor c="var(--mantine-color-lime-5)" href="https://tskoli.is" target="_blank">
            Technical College of Iceland
          </Anchor>
          , 2009 - 2013
        </ListItem>
      </List>
    </Box>
  );
}

export default Education;
