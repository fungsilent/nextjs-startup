import _ from 'lodash'
import { useRouter } from 'next/router'
import Link from '@/components/share/link'
import Display from '@/components/page/example/display'
import { findData } from '@/utils'
// type
import { GetStaticProps, GetStaticPaths } from 'next'
import { AppProps, Page } from '@/types/app'
import styles from '@/styles/page/example.module.scss'

type Props = {
    data: string
}

const list = [
    { value: 'param-1', data: 'data-1 -> ABC' },
    { value: 'param-2', data: 'data-2 -> DEF' },
]

const DynamicRouteExport: Page<Props> = ({ data }) => {
    const router = useRouter()
    const { value } = router.query
    return (
        <div className={styles.layout}>
            <h2>Dynamic Route Export:</h2>
            <Display v={{ value: value as string }}/>
            <Display v={{ data }}/>
            <Link href='/example/dynamic-route-export/param-1'>
                Link to param-1
            </Link>
            <Link href='/example/dynamic-route-export/param-2'>
                Link to param-2
            </Link>
        </div>
    )
}

export const getStaticProps: GetStaticProps<AppProps<Props>, { value: string }> = async context => {
    const data = findData(list, context.params?.value as string, {
        getKey: 'data'
    }) as string
    return {
        props: {
            page: {
                data,
            },
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: _.map(list, ({ value }) => ({
            params: {
                value,
            }
        })),
        fallback: false,
    }
}

export default DynamicRouteExport
