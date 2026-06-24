import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://madent.com.mx';

  const routes = [
    { url: '', priority: 1.0 },
    { url: '/funciones', priority: 0.9 },
    { url: '/demo', priority: 0.9 },
    { url: '/nosotros', priority: 0.8 },
    { url: '/planes', priority: 0.8 },
    { url: '/blog', priority: 0.8 },
    { url: '/ayuda', priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route.priority,
  }));
}
