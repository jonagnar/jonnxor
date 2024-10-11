import { Box, Title, List, ListItem } from '@mantine/core';

export function Languages() {
  return (
    <Box component="section">
      <Title mb="sm" order={3}>
        Languages
      </Title>
      <List listStyleType="none">
        <ListItem>Icelandic - Native Proficiency</ListItem>
        <ListItem>English - Professional Proficiency</ListItem>
        <ListItem>Japanese - Elementary Proficiency</ListItem>
      </List>
    </Box>
  );
}

export default Languages;
