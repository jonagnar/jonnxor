import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JonnXor.is',
    short_name: 'JonnXor',
    description: 'Personal website',
    start_url: '/',
    display: 'standalone',
    background_color: '#242424',
    theme_color: '#242424',
  };
}
