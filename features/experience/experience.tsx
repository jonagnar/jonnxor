import { Box, Title, Anchor, List, ListItem } from '@mantine/core';

export function Experience() {
  return (
    <Box component="section">
      <Title mb="md" order={3}>
        Experience
      </Title>
      <List spacing="xs" listStyleType="none">
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor
                c="var(--mantine-color-lime-5)"
                fw="bold"
                href="https://advania.is"
                target="_blank"
              >
                Advania
              </Anchor>
            </ListItem>
            <ListItem fz="sm">Senior Frontend Developer</ListItem>
            <ListItem fz="sm">2016 - 2024</ListItem>
          </List>
        </ListItem>
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
            <ListItem fz="sm">Teaching Assistant</ListItem>
            <ListItem fz="sm">2016</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem fw="bold">Outcome</ListItem>
            <ListItem fz="sm">Technician</ListItem>
            <ListItem fz="sm">2012 - 2014</ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}

export default Experience;
