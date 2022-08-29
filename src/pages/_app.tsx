// import NextApp from 'next/app'
import { DefaultSeo } from 'next-seo'
import { appStore, Provider } from '@/store'
import Container from '@mui/material/Container'
import Header from '@/components/part/header'
import Footer from '@/components/part/footer'
import GoTop from '@/components/part/goTop'
import useConfig from '@/hooks/useConfig'
import { NextAppProps } from '@/types/app'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/globals.scss'

const App = ({ Component, pageProps }: NextAppProps) => {
    const { header, page } = pageProps
    const config = useConfig()
    return (
        <Provider store={appStore}>
            <DefaultSeo
                title=''
                titleTemplate={`%s | ${config.seo.siteName}`}
                defaultTitle={config.seo.siteName}
                description={config.seo.description}
                openGraph={{
                    title: config.seo.siteName,
                    description: config.seo.description,
                    site_name: config.seo.siteName,
                }}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/images/favicon.ico',
                    },
                ]}
            />
            <div className='app'>
                {/* Wrap with `Container` to fix Mui components styled duplicate since ssr issues come from emotion inside Mui */}
                <Container maxWidth={false} disableGutters>
                    <Header {...header}/>
                    <Component {...page}/>
                    <GoTop/>
                    <Footer/>
                </Container>
            </div>
        </Provider>
        
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