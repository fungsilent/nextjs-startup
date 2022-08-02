const nextConfig = {
    images: {
        unoptimized: true,
        loader: 'akamai',
        path: '',
    },
    sassOptions: {
        // includePaths: [path.join(__dirname, 'src/styles')],
        // prependData: `
        //     @use 'sass:map';
        //     @import 'src/styles/variables.module.scss';
        //     @import 'src/styles/funtions.module.scss';
        // `,
        additionalData: `
            @use 'sass:map';
            @import 'src/styles/variables.scss';
            @import 'src/styles/funtions.scss';
        `,
    },
    exportPathMap: async () => ({
        '/': { page: '/' },
    }),
    publicRuntimeConfig: {
    }
}
  
module.exports = nextConfig