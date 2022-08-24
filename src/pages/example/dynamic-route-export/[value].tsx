import _ from 'lodash'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Link from '@/components/share/link'
import { findData } from '@/utils'

const list = [
    { value: 'param-1', data: 'data-1 -> ABC' },
    { value: 'param-2', data: 'data-2 -> DEF' },
]

const DynamicRouteExport = ({ data }) => {
    const router = useRouter()
    const { value } = router.query
    return (
        <div>
            Dynamic Route Export:
            <br/>
            [value] = {value}
            <br/>
            [data] = {data}
            <br/>
            <br/>
            <Link href='/example/dynamic-route-export/param-1'>
                Link to param-1
            </Link>
            <br/>
            <br/>
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
