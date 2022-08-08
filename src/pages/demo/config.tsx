import { GetStaticProps } from 'next'
import _ from 'lodash'
import { PageProps } from '@/types/app'

const Config = () => {

    return (
        <div>
            Page Config
        </div>
    )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
    return {
        props: {
            headerClassName: 'cust-header-class'
        }
    }
}

export default Config
