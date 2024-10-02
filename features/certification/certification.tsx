import { Box, Title, Anchor, List, ListItem } from '@mantine/core';

export function Certification() {
  return (
    <Box component="section">
      <Title mb="md" order={3}>
        Certifications
      </Title>
      <List spacing="xs" listStyleType="none">
        <ListItem>Udemy (various courses)</ListItem>
        <ListItem>
          <Anchor
            c="var(--mantine-color-lime-5)"
            href="https://www.dalecarnegie.com"
            td="line-through"
            target="_blank"
          >
            Dale Carnegie
          </Anchor>{' '}
          (work in progress)
        </ListItem>
        <ListItem>LinkedIn Learning (various courses)</ListItem>
      </List>
    </Box>
  );
}

export default Certification;
