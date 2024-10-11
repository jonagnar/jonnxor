import { Box, Title, Anchor, List, ListItem } from '@mantine/core';

export function Experience() {
  return (
    <Box component="section">
      <Title mb="sm" order={3}>
        Experience
      </Title>
      <List listStyleType="none">
        <ListItem>
          <List listStyleType="none">
            <ListItem fw="bold">Software Specialist</ListItem>
            <ListItem>
              <Anchor c="var(--mantine-color-lime-5)" href="https://advania.is" target="_blank">
                Advania
              </Anchor>
              , 2016 - 2024
            </ListItem>
            <ListItem>
              <List listStyleType="square" withPadding>
                <ListItem>Conducted code review processes.</ListItem>
                <ListItem>Utilized Agile for project management.</ListItem>
                <ListItem>Collaborated with cross-functional teams.</ListItem>
                <ListItem>Provided mentorship to junior developers.</ListItem>
                <ListItem>Automate deployments using CI/CD tools.</ListItem>
                <ListItem>Frontend Development & API Integrations.</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List listStyleType="none">
            <ListItem fw="bold">Teaching Assistant</ListItem>
            <ListItem>
              <Anchor c="var(--mantine-color-lime-5)" href="https://www.ru.is" target="_blank">
                Reykjavík University
              </Anchor>
              , 2016
            </ListItem>
            <ListItem>
              <List listStyleType="square" withPadding>
                <ListItem>Conducted weekly study sessions.</ListItem>
                <ListItem>Assisted students with coursework.</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List listStyleType="none">
            <ListItem fw="bold">Technician</ListItem>
            <ListItem>Outcome, 2012 - 2014</ListItem>
            <ListItem>
              <List listStyleType="square" withPadding>
                <ListItem>Developed HTML marketing emails.</ListItem>
                <ListItem>Computer maintenance & debugging.</ListItem>
                <ListItem>Provided customer service & IT support.</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}

export default Experience;
