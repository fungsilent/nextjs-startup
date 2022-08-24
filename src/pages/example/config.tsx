import { GetStaticProps } from 'next'
import { AppProps, PageProps } from '@/types/app'

const Config = ({ id }: PageProps) => {
    return (
        <div>
            Page Config
            <div>id - [{id}]</div>
        </div>
    )
}

export const getStaticProps: GetStaticProps<AppProps> = async () => {
    return {
        props: {
            header: {
                className: 'home-header',
            },
            page: {
                id: 1
            },
        }
    }
}

export default Config
