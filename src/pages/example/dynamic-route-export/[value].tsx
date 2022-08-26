import _ from 'lodash'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Link from '@/components/share/link'
import Display from '@/components/page/example/display'
import { findData } from '@/utils'
import styles from '@/styles/page/example.module.scss'

const list = [
    { value: 'param-1', data: 'data-1 -> ABC' },
    { value: 'param-2', data: 'data-2 -> DEF' },
]

const DynamicRouteExport = ({ data }) => {
    const router = useRouter()
    const { value } = router.query
    return (
        <div className={styles.layout}>
            <h2>Dynamic Route Export:</h2>
            <Display v={{ value }}/>
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

export const getStaticProps: GetStaticProps = async context => {
    const data = findData(list, context.params.value as string, {
        getKey: 'data'
    })
    return {
        props: {
            page: {
                data,
            },
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = _.map(list, ({ value }) => ({
        params: {
            value,
        }
    }))
    return {
        paths,
        fallback: false,
    }
}

export default DynamicRouteExport
