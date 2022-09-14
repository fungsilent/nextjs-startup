import { AppProps as NextAppProps } from 'next/app'
import { NextPage } from 'next'

export type App = (
    props: UnionOverride<NextAppProps<PageProps>, {
        pageProps: AppProps
    }>
) => JSX.Element

export type AppProps<ExtraPageProps = unknown> = {
    header?: HeaderProps
    page?: Partial<PageProps> & ExtraPageProps
}

export type HeaderProps = {
    classes?: {
        desktop?: ClassName
        mobile?: ClassName
    }
}

export type Page<ExtraPageProps = {}> = NextPage<PageProps & ExtraPageProps>
export type PageProps = {
    readonly env: string
}

// Menu
export type MenuItem = {
    name: string
    link: string
}