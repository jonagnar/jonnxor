import Link from 'next/link';
import { Box, Title, List, ListItem, Anchor } from '@mantine/core';

export function Projects() {
  return (
    <Box component="section">
      <Title mb="sm" order={3}>
        Projects
      </Title>
      <List listStyleType="square">
        <ListItem>
          <Anchor component={Link} c="var(--mantine-color-lime-5)" href="/">
            JonnXor.is
          </Anchor>{' '}
          &#9642; <strong>Web development</strong>
          <br />
          As Mantine developer with Jón Agnar.
        </ListItem>
        <ListItem>
          <Anchor
            c="var(--mantine-color-lime-5)"
            href="https://advania.is/vorur-og-thjonusta/cata"
            target="_blank"
          >
            Cata
          </Anchor>{' '}
          &#9642; <strong>App development</strong>
          <br />
          As React Native developer with Advania.
        </ListItem>
        <ListItem>
          <Anchor
            c="var(--mantine-color-lime-5)"
            href="https://advania.is/vorur-og-thjonusta/vidburdarlausn"
            target="_blank"
          >
            Digital Conference
          </Anchor>{' '}
          &#9642; <strong>Web development</strong>
          <br />
          As NextJS developer with Advania.
        </ListItem>
        <ListItem>
          <Anchor
            c="var(--mantine-color-lime-5)"
            href="https://advania.is/smastund"
            target="_blank"
          >
            Smástund
          </Anchor>{' '}
          &#9642; <strong>Cross-platform development</strong>
          <br />
          As Ionic developer with Advania.
        </ListItem>
        <ListItem>
          <Anchor
            c="var(--mantine-color-lime-5)"
            href="https://advania.is/vorur-og-thjonusta/veva-vefumsjonarkerfi"
            target="_blank"
          >
            LiSA CMS
          </Anchor>{' '}
          &#9642; <strong>Web development</strong>
          <br />
          As full-stack developer with Advania.
        </ListItem>
        <ListItem>
          Intranet projects &#9642; <strong>Web development</strong>
          <br />
          As contractor with Reykjavík Energy.
        </ListItem>
        <ListItem>
          <Anchor c="var(--mantine-color-lime-5)" href="https://www.arionbanki.is" target="_blank">
            Arionbanki.is
          </Anchor>{' '}
          &#9642; <strong>Web development</strong>
          <br />
          As contractor with Arion bank.
        </ListItem>
      </List>
    </Box>
  );
}

export default Projects;
