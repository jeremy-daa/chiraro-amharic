import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const DOMAIN = 'https://amharic.chiraro.com';

async function prerender() {
  console.log('Starting prerender...');
  
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
  
  // 1. Render the app
  const { render } = await import('./dist-server/entry-server.js');
  const appHtml = render();
  
  // 2. Generate JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Chiraro Amharic",
    "url": DOMAIN,
    "description": "Learn Amharic effectively with Chiraro Amharic Language School."
  };
  
  const headInject = `
    <link rel="canonical" href="${DOMAIN}/" />
    <meta name="description" content="Master Amharic with Chiraro Language School. Enjoy interactive courses, native-speaker instruction, and a comprehensive curriculum designed for all fluency levels." />
    <meta property="og:title" content="Chiraro Amharic | Language School" />
    <meta property="og:description" content="Master Amharic with Chiraro Language School. Enjoy interactive courses, native-speaker instruction, and a comprehensive curriculum designed for all fluency levels." />
    <meta property="og:image" content="${DOMAIN}/images/logo.png" />
    <meta property="og:url" content="${DOMAIN}/" />
    <meta property="og:type" content="website" />
    <script type="application/ld+json">
      ${JSON.stringify(schema)}
    </script>
  `;
  
  // 3. Inject into template
  const html = template
    .replace('<!--app-html-->', appHtml)
    .replace('<!--app-head-->', headInject);
    
  // 4. Save index.html
  fs.writeFileSync(toAbsolute('dist/index.html'), html);
  console.log('Prerendered index.html');
  
  // 5. Generate and save sitemap.xml
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemap);
  console.log('Generated sitemap.xml');
  
  // 6. Generate and save robots.txt
  const robots = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml`;
  fs.writeFileSync(toAbsolute('dist/robots.txt'), robots);
  console.log('Generated robots.txt');
}

prerender();
