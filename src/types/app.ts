import { AppProps as _NextAppProps } from 'next/app'

export type NextAppProps = Omit<_NextAppProps<PageProps>, 'pageProps'> & {
    pageProps: AppProps
}

export type AppProps = {
    header?: HeaderProps
    page?: PageProps
}

export type HeaderProps = {
    className?: string
}

/* TODO: how to extend custom props from pages itelff */
// Page component props
export type PageProps = {
    id?: number
}