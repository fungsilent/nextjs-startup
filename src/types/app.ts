import { AppProps as NextAppProps } from 'next/app'
import { NextPage } from 'next'

export type App = (
    props: UnionOverride<NextAppProps<PageProps>, {
        pageProps: AppProps
    }>
) => JSX.Element

export type AppProps<ExtraPageProps = unknown> = {
    header?: HeaderProps
    page?: PageProps & ExtraPageProps
}

export type HeaderProps = {
    className?: string
}

export type Page<ExtraPageProps = {}> = NextPage<PageProps & ExtraPageProps>
export type PageProps = {
    readonly env?: string;
}