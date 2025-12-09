// app/Marketing/Service/[slug]/layout.js

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: 'web-development' },
    { slug: 'app-development' },
    { slug: 'email-marketing' },
    { slug: 'seo' },
    { slug: 'graphic-design' },
    { slug: 'ui-ux-design' },
    { slug: 'social-media-management' },
    { slug: 'content-writing' },
  ];
}

export default function ServiceLayout({ children }) {
  return <>{children}</>;
}