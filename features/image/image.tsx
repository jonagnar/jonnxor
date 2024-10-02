import NextImage from 'next/image';
import { Box, Image as MantineImage, rem } from '@mantine/core';

import image from '@jonnxor/public/jon-agnar-stefansson.jpg';

export function Image() {
  return (
    <Box component="figure" pos="relative" w={rem(192)} h={rem(256)} m={0} visibleFrom="xs">
      <MantineImage
        src={image}
        alt="Jón Agnar Stefánsson"
        bd={`${rem(2)} solid #000`}
        radius="md"
        component={NextImage}
        sizes="100vw"
        fill
      />
    </Box>
  );
}

export default Image;
