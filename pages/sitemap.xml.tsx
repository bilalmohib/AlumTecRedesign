const pages: { id: number; slug: string }[] = [
    { id: 1, slug: '' },
    { id: 2, slug: 'about' },
    { id: 3, slug: 'services' },
    { id: 4, slug: 'products' },
    { id: 5, slug: 'career' },
    { id: 6, slug: 'contact' },
    { id: 7, slug: 'blog' }
];

const SITE_URL = 'https://www.alumtec.ca';

function generateSiteMap(pages: { id: number; slug: string }[]) {
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Manually set the base URL -->
        <url>
            <loc>https://www.alumtec.ca</loc>
        </url>
        ${pages
            .map(({ slug }) => {
                return `
        <url>
            <loc>${`${SITE_URL}/${slug}`}</loc>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
            <lastmod>${currentDate}</lastmod>
        </url>
        `;
            })
            .join('')}
    </urlset>
    `;
}

function SiteMap() {
    // Empty component, as the work is done in getServerSideProps
    return null;
}

export async function getServerSideProps({ res }: { res: any }) {
    // Generate the XML sitemap
    const sitemap = generateSiteMap(pages);

    // Set the response headers
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    // Return an empty props object
    return { props: {} };
}

export default SiteMap;
