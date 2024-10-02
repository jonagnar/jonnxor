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
            <ListItem>Frontend Web/App Developer</ListItem>
            <ListItem>2016 - 2024</ListItem>
            <ListItem>Design, build and maintain webs/apps</ListItem>
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
            <ListItem>Teaching Assistant</ListItem>
            <ListItem>2016</ListItem>
            <ListItem>Course: Web Development</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem fw="bold">Outcome</ListItem>
            <ListItem>Technician</ListItem>
            <ListItem>2012 - 2014</ListItem>
            <ListItem>HTML Email Marketing & IT Support</ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}

export default Experience;
