import { Box, Paper, Title, Text, List, ListItem } from '@mantine/core';

export function CoverLetter() {
  return (
    <Box mb="lg" className="hidden-print" component="section">
      <Title mb="lg" order={2}>
        Cover Letter
      </Title>
      <Paper className="cover-letter" withBorder>
        <Text>
          Dear Hiring Manager, <br />
          <br />
          I am a highly skilled Frontend Web/App Developer with over 8 years of professional
          experience in building scalable, responsive, and user-centric web/mobile applications. My
          expertise spans a wide range of modern web technologies, frameworks, and tools, including
          React, TypeScript, Next.js, and Vue, making me a versatile and valuable asset for any
          project requiring high-quality frontend solutions.
          <br />
          <br />
          During my tenure as a Frontend Developer at Advania, I contributed to numerous projects.
          My role involved closely collaborating with cross-functional teams to create efficient and
          maintainable codebases, ensuring the seamless integration of frontend interfaces with
          backend systems. I also have experience working with various UI frameworks, such as
          Bootstrap, Tailwind CSS, and Ionic, allowing me to create visually appealing and
          responsive designs.
          <br />
          <br />
        </Text>
        <Text mb="xs">Some of my key skills and experiences include:</Text>
        <List spacing="xs" withPadding>
          <ListItem>
            Frontend Technologies: Advanced proficiency in React, React Native, and Vue,
            complemented by hands-on experience with frameworks like Next.js, Expo, and Ionic.
          </ListItem>
          <ListItem>
            DevOps and Development Tools: Strong experience with Node.js, npm, git, and other
            essential development tools, enabling me to manage projects efficiently from start to
            deployment.
          </ListItem>
          <ListItem>
            Programming Languages: Expertise in JavaScript, TypeScript, C#, and SQL, providing a
            comprehensive foundation for developing dynamic and data-driven applications.
          </ListItem>
        </List>
        <br />
        <Text>
          I hold a Bachelor&apos;s Degree in Computer Science from Reykjavík University, and I am
          fluent in both Icelandic and English. My technical background, combined with a strong
          understanding of frontend development best practices, makes me confident in my ability to
          contribute meaningfully to any organization or project.
          <br />
          <br />
          Thank you for considering my qualifications. I look forward to bringing my expertise to
          challenging and innovative projects that value quality, performance, and user experience.
          <br />
          <br />
          Sincerely, <br />
          Jón Agnar Stefánsson
        </Text>
      </Paper>
    </Box>
  );
}

export default CoverLetter;
