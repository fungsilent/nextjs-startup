const path = require('path')

const nextConfig = {
    // Base Config
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
        additionalData: `
            @use 'sass:map';
            @import 'variables.scss';
            @import 'funtions.scss';
        `,
    },
    redirects: async () => ([
        {
            source: '/',
            destination: '/example',
            permanent: true,
        },
    ]),
    // Build Config
    exportPathMap: async () => ({
        '/': { page: '/' },
    }),
    images: {
        loader: 'akamai',
        path: '/',
    },
    // Runtime Config
    publicRuntimeConfig: {
        seo: {
            siteName: 'SiteName',
            description: 'SEO description',
        },
        apiBaseUrl: 'https://powermoto.innpressionhost.com/api/develop/request.php',
    }
}
  
module.exports = nextConfig