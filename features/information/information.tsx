import { Box, List, Title, Text, Anchor, ListItem } from '@mantine/core';

export function Information() {
  return (
    <Box component="section">
      <Title mb="xs" order={3} ff="text" textWrap="wrap" lh={1}>
        Jón Agnar Stefánsson
      </Title>
      <Text mb="sm" component="strong" display="block" fz="xl" fw="bold" lh={1}>
        Computer Scientist
      </Text>
      <List listStyleType="none">
        <ListItem>
          <Anchor c="var(--mantine-color-lime-5)" href="mailto:jonnxor@gmail.com">
            jonnxor@gmail.com
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor c="var(--mantine-color-lime-5)" href="tel:+3548661321">
            (+354) 866-1321
          </Anchor>
        </ListItem>
        <ListItem>225 Garðabær, Iceland</ListItem>
        <ListItem>
          <Anchor c="var(--mantine-color-lime-5)" href="https://www.linkedin.com/in/jonnxor">
            linkedin.com/in/jonnxor
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor c="var(--mantine-color-lime-5)" href="https://www.jonnxor.is">
            jonnxor.is
          </Anchor>
        </ListItem>
      </List>
    </Box>
  );
}

export default Information;
