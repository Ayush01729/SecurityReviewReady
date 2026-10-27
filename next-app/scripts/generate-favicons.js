const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function generateFavicons() {
  const rootDir = path.resolve(__dirname, '..');
  const publicDir = path.join(rootDir, 'public');
  const appDir = path.join(rootDir, 'src', 'app');
  const svgPath = path.join(publicDir, 'icon.svg');

  console.log('Generating high-resolution icon variants from:', svgPath);
  const svgBuffer = fs.readFileSync(svgPath);

  const sizes = [
    { name: 'icon-512.png', size: 512, dest: [publicDir] },
    { name: 'icon-192.png', size: 192, dest: [publicDir, appDir] },
    { name: 'icon-96.png', size: 96, dest: [publicDir] },
    { name: 'icon-48.png', size: 48, dest: [publicDir] },
    { name: 'icon-32.png', size: 32, dest: [publicDir] },
    { name: 'icon-16.png', size: 16, dest: [publicDir] },
    { name: 'apple-touch-icon.png', size: 180, dest: [publicDir] },
  ];

  for (const item of sizes) {
    const pngBuffer = await sharp(svgBuffer)
      .resize(item.size, item.size)
      .png({ compressionLevel: 9 })
      .toBuffer();

    for (const d of item.dest) {
      const outPath = path.join(d, item.name);
      fs.writeFileSync(outPath, pngBuffer);
      console.log(`Saved ${item.name} (${item.size}x${item.size}) to ${path.relative(rootDir, outPath)}`);
    }
  }

  // Also save apple-icon.png in src/app for Next.js convention
  fs.copyFileSync(
    path.join(publicDir, 'apple-touch-icon.png'),
    path.join(appDir, 'apple-icon.png')
  );
  console.log('Copied apple-icon.png to src/app/');

  // Also save icon.png in src/app for Next.js convention
  fs.copyFileSync(
    path.join(publicDir, 'icon-192.png'),
    path.join(appDir, 'icon.png')
  );
  console.log('Copied icon.png to src/app/');

  // Generate multi-size binary favicon.ico using python PIL
  console.log('Packaging binary favicon.ico with 16x16, 32x32, and 48x48...');
  const pythonCmd = `python -c "from PIL import Image; img = Image.open('${path.join(publicDir, 'icon-512.png').replace(/\\/g, '/')}'); img.save('${path.join(publicDir, 'favicon.ico').replace(/\\/g, '/')}', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])"`;
  execSync(pythonCmd, { stdio: 'inherit' });

  // Copy favicon.ico to src/app/
  fs.copyFileSync(
    path.join(publicDir, 'favicon.ico'),
    path.join(appDir, 'favicon.ico')
  );
  console.log('Copied true binary favicon.ico to src/app/');

  // Generate site.webmanifest
  const manifest = {
    name: 'Security Review Ready',
    short_name: 'Security Review Ready',
    description: 'Security Questionnaire Engine for B2B Teams',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF9F6',
    theme_color: '#28664A',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };

  fs.writeFileSync(
    path.join(publicDir, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('Generated public/site.webmanifest');

  // Also create public/robots.txt
  const robotsTxt = `# Allow all web crawlers including Googlebot & Googlebot-Image
User-agent: *
Allow: /

# Specifically allow Googlebot-Image to index favicons and preview images
User-agent: Googlebot-Image
Allow: /

Sitemap: https://securityreviewready.com/sitemap.xml
`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('Generated public/robots.txt');

  // Also create public/sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://securityreviewready.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
  console.log('Generated public/sitemap.xml');

  console.log('Favicon and SEO asset generation complete!');
}

generateFavicons().catch((err) => {
  console.error('Failed generating favicons:', err);
  process.exit(1);
});
