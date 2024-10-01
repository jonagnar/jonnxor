import { Button } from '@mantine/core';

export function Download() {
  return (
    <Button
      size="md"
      color="var(--mantine-color-lime-5)"
      variant="outline"
      visibleFrom="xs"
      component="a"
      href="/jon-agnar-stefansson.zip"
      target="_blank"
      download
    >
      Download
    </Button>
  );
}

export default Download;
