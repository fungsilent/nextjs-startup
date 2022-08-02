// import NextApp from 'next/app'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import Header from '@/components/part/header'
import Footer from '@/components/part/footer'
import GoTop from '@/components/part/goTop'
import '@/styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
    const { headerClassName, ...restProps } = pageProps
    return (
        <div className='app'>
            <DefaultSeo
                title=''
                titleTemplate = '%s | SiteName'
                defaultTitle = 'Ankor Motor'
                description='description'
                openGraph={{
                    url: 'http://www.domain.com',
                    title: 'Title',
                    description: 'description',
                    site_name: 'SiteName',
                }}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/images/favicon.ico',
                    },
                ]}
            />
            <Header className={headerClassName}/>
            <Component {...restProps}/>
            <GoTop/>
            <Footer/>
        </div>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     const appProps = await NextApp.getInitialProps(appContext)
//     return { ...appProps }
// }

export default App