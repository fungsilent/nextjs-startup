const nextConfig = {
    images: {
        unoptimized: true,
        loader: 'akamai',
        path: '/',
    },
    sassOptions: {    
        additionalData: `
            @use 'sass:map';
            @import 'src/styles/variables.scss';
            @import 'src/styles/funtions.scss';
        `,
    },
    exportPathMap: async () => ({
        '/': { page: '/' },
    }),
    redirects: async () => ([
        {
            source: '/',
            destination: '/example',
            permanent: true,
        },
    ]),
    publicRuntimeConfig: {
        seo: {
            siteName: 'SiteName',
            description: 'SEO description',
        },
        apiBaseUrl: 'https://powermoto.innpressionhost.com/api/develop/request.php',
    }
}
  
module.exports = nextConfig