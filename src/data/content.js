export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const roles = [
  'Full stack developer',
  'Web content manager',
  'Shopify developer',
  'Vue',
  'Next.js',
  'Tailwind',
  '.NET',
  'PostgreSQL',
]

export const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Vue',
  'C#',
  '.NET',
  'Next.js',
  'Tailwind',
  'PostgreSQL',
]

export const projects = [
  {
    id: 'foodiestopia',
    title: 'Foodiestopia',
    tone: 'food',
    summary:
      'A full stack food product. Vue handles the client, and a C# API carries the rest.',
    tags: ['Vue', 'C#'],
    links: [
      { label: 'Vue client', href: 'https://github.com/gian-de/client-foodiestopia' },
      { label: 'C# API', href: 'https://github.com/gian-de/foodiestopia' },
    ],
  },
  {
    id: 'green-havens',
    title: 'Green Havens',
    tone: 'haven',
    summary:
      'A site for premium rural property in the Cotswolds, from the listing through to the last quiet detail.',
    tags: ['JavaScript'],
    links: [
      { label: 'Live site', href: 'https://real-estate-gian-de.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/gian-de/real-estate' },
    ],
  },
  {
    id: 'porsche',
    title: 'Porsche Wiki',
    tone: 'porsche',
    summary: 'A Porsche mini wiki. The cars, without the brochure fog.',
    tags: ['JavaScript'],
    links: [
      { label: 'Live site', href: 'https://porsche-fullstack.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/gian-de/porsche_fullstack' },
    ],
  },
  {
    id: 'lucid',
    title: 'Lucid',
    tone: 'lucid',
    summary:
      'A vehicle catalog with pricing, stock, and specs. TypeScript on the front, Strapi underneath.',
    tags: ['TypeScript', 'Strapi'],
    links: [
      { label: 'Live site', href: 'https://lucid-client.vercel.app' },
      { label: 'Client', href: 'https://github.com/gian-de/lucid_client' },
      { label: 'CMS', href: 'https://github.com/gian-de/lucid_strapi' },
    ],
  },
  {
    id: 'cochino',
    title: 'Cochino',
    tone: 'cochino',
    summary: 'A Next.js and Tailwind interface, shipped and on the web.',
    tags: ['Next.js', 'Tailwind'],
    links: [
      { label: 'Live site', href: 'https://cochino.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/gian-de/cochino' },
    ],
  },
]
