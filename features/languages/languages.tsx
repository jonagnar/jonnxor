import { Box, Title, Text, List, ListItem } from '@mantine/core';

export function Languages() {
  return (
    <Box component="section">
      <Title mb="md" order={3}>
        Languages
      </Title>
      <List spacing="xs" listStyleType="none">
        <ListItem>
          <Text fw="bold">Icelandic</Text>
          Native Proficiency
        </ListItem>
        <ListItem>
          <Text fw="bold">English</Text>
          Full Professional Proficiency
        </ListItem>
        <ListItem>
          <Text fw="bold">Japanese</Text>
          Elementary Proficiency
        </ListItem>
      </List>
    </Box>
  );
}

export default Languages;
