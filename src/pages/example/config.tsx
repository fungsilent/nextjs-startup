import { GetStaticProps } from 'next'
import Display from '@/components/page/example/display'
import { AppProps, PageProps } from '@/types/app'
import styles from '@/styles/page/example.module.scss'

const Config = ({ id }: PageProps) => {
    return (
        <div className={styles.layout}>
            <h2>Page Config</h2>
            <Display v={{ id }}/>
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